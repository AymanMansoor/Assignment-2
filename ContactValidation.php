<?php
include('header.php');
?>

    <div class="container contact">
        <h2 class="contactHead text-center"> Contact Us </h2>
        </br>

        <?php

        $userErr = $itemErr = $orderErr = $questErr = "";
        $user = $itemName = $orderNumb = $quest = "";

        $myfile = fopen("UserList.txt", "r") or die("Unable to open file!");
        $userlist = fread($myfile,filesize("UserList.txt"));
        $usernames = preg_split("/[\s,]+/", $userlist);

        $myfile = fopen("OrderList.txt", "r") or die("Unable to open file!");
        $orderlist = fread($myfile,filesize("OrderList.txt"));
        $orderItems = preg_split("/[\s,]+/", $orderlist);


        if ($_SERVER["REQUEST_METHOD"] == "POST") 
        {
            if (empty($_POST["user"])) {
                $userErr = "* Username is required";
            } 
            else {
                $user = test_input($_POST["user"]);
            }

            if(in_array($user, $usernames))
            {
                $user = test_input($_POST["user"]);
            }
            else{
                $userErr = "* Username is invalid. Don't have an account? <a href='Signup.html'>Sign Up Now!</a>";
            }

            if (empty($_POST["itemName"])) {
                $itemErr = "* Item name is required";
            } 
            else {
                $itemName = test_input($_POST["itemName"]);
            }

            if (empty($_POST["orderNumb"])) {
                $orderErr = '* Please enter a valid order number (note: "#" is optional)';
            }
            else {
                $orderNumb = test_input($_POST["orderNumb"]);
            }

            if(in_array(strtoupper($orderNumb), $orderItems)){
                $orderNumb = test_input($_POST["orderNumb"]);
            }
            else{
                $orderErr = '* Order number does not exist. Try again.';
            }

            if (empty($_POST["quest"])) {
                $questErr= "* Please ask us a question.";
            } 
            else {
                $quest = test_input($_POST["quest"]);
            }

            if (preg_match("/^\#?\d{5}[a-zA-Z]{2}$/", $orderNumb))
            {
                if(!empty($user) && in_array($user, $usernames) && !empty($itemName) && in_array(strtoupper($orderNumb), $orderItems) && !empty($quest)){
                    echo '<p>Thank you '.$_POST['user'].'!</br> Your question about the item '.$_POST['itemName'].' will be answered shorty. </br></br>Your order number is: '.$orderNumb.'</p>';

                    $findOrder = array_search(strtoupper($orderNumb),$orderItems);
                    $findQty = $orderItems[$findOrder+2];
                    $itemInfo = $findQty*4;

                    for($x=0; $x<$itemInfo; $x++)
                    {
                        $findItems = $x+7+$findOrder;
                        echo "Product: $orderItems[$findItems]</br>";
                        $findItems++;
                        $x++;
                        echo "Qty: $orderItems[$findItems]</br>";
                        $findItems++;
                        $x++;
                        echo "Price: $orderItems[$findItems]</br>";
                        $findItems++;
                        $x++;
                        echo "Cost: $$orderItems[$findItems]</br>";
                    }
                }
            }
            else
            {
                $orderErr= '* Please enter a valid order number (note: "#" is optional).';
            }
        }

        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }

        fclose($myfile);
        ?>

        </br>
        <form class="contactForm" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <div class="form-group">
                <label class="formItem user">Username: 
                <input type="text" class="form-control" id="userName" name="user" size="140" placeholder="Enter username"/>
                <span class="error"> <?php echo $userErr;?></span> 
                </label>
            </div>
            <div class="form-group">
                <label class="formItem item">Item Name: 
                <input type="text" class="form-control" id="itemNm" name="itemName" size="140" placeholder="Enter item name"/>
                <span class="error"> <?php echo $itemErr;?></span> 
                </label>
            </div>
            <div class="form-group">
                <label class="formItem orderNum">Order Number (ex: #12345AB): 
                <input type="text" class="form-control" id="ordNb" name="orderNumb" size="140" placeholder="Enter order #"/>
                <span class="error"> <?php echo $orderErr;?></span>
                <p id="warn"></p>
                </label>
            </div>
            <div class="form-group">
                <label class="formItem question">Question: 
                <textarea class="form-control" name="quest" rows="5" cols="140"></textarea>
                <span class="error"> <?php echo $questErr;?></span> 
                </label>
            </div>

            <button type="submit" class="btn btn-info" value="submit">Submit</button>
            <button type="reset" class="btn btn-info" value="clear">Reset</button>
            </br></br>


        </form>
    </div>    

<?php
include('footer.php');
?>