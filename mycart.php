<?php
include('header.php');
?>

    <div class="container" style="padding-bottom:300px;">
        <div class="row">
            <div class="col-lg-12 text center border rounded bg-light my-4">
                <h3>Shopping Cart</h3>
            </div>

            <div class="col-lg-9">
              <table class="table">         
                <thead class="text-center">
                    <tr> 
                      <th scope="col">Item #</th>
                      <th scope="col">Item Name</th> 
                      <th scope="col">Item Price</th> 
                      <th scope="col">Quantity</th> 
                      <th scope="col">Total</th> 
                      <th scope="col"></th> 
                    </tr>  
                </thead>
                <tbody class="text-center">
                    <?php
                        if(isset($_SESSION['cart']))
                        {
                            foreach($_SESSION['cart'] as $key => $value)
                            {
                                $sr=$key+1;
                                echo"
                                  <tr>
                                    <td>$sr</td>
                                    <td>$value[Item_Name]</td>
                                    <td>$value[Price]<input type='hidden' class='iprice' value='$value[Price]'></td>
                                    <td><input class='text-center iquantity' onchange='subTotal()' type='number' value='$value[Quantity]' min='1' max='10'></td>
                                    <td class='itotal'></td>
                                    <td>
                                        <form action='manage_cart.php' method='POST'>
                                            <button name='Remove_Item' class='btn btn-sm btn-outline-danger'>REMOVE</button>
                                            <input type='hidden' name='Item_Name' value='$value[Item_Name]'>
                                        </form>
                                    </td>
                                  </tr>
                                ";
                            }
                        }
                    ?> 
                </tbody>
              </table>
            </div>

            <div class="col-lg-3">
              <div class="border bg-light rounded p-4">
                <h6>Items Qty:</h6>
                <h6 class="text-right" id="itemQ"></h6>  
                <h6>Subtotal:</h6>
                <h6 class="text-right" id="stotal"></h6>
                <h6>GTS:</h6>
                <h6 class="text-right" id="taxgst"></h6>
                <h6>QTS:</h6>
                <h6 class="text-right" id="taxqst"></h6>
                <h4>Grand Total:</h4>
                <h5 class="text-right" id="gtotal"></h5>
                <br>
                <form>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" style="height:15px;" name="flexRadioDefault" id="flexRadioDefault1" checked>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Credit Card
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" style="height:15px;" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                        Paypal
                    </label>
                    </div>
                    <br>
                    <button class="btn btn-secondary btn-block">Checkout</button>
                </form>

              </div>
            </div>
        </div>
    </div>

    <script>
        
        var st=0;
        var gst=0;
        var qst=0;
        var iprice=document.getElementsByClassName('iprice');
        var iquantity=document.getElementsByClassName('iquantity');
        var itotal=document.getElementsByClassName('itotal');
        var stotal=document.getElementById('stotal');
        var taxgst=document.getElementById('taxgst');
        var taxqst=document.getElementById('taxqst');
        var gtotal=document.getElementById('gtotal');
        var itemQ=document.getElementById('itemQ');



        function subTotal()
        {
            st=0;
            qtyI=0;
            for(i=0;i<iprice.length;i++)
            {
                qtyI+=parseInt(iquantity[i].value);
                itotal[i].innerText=((iprice[i].value)*(iquantity[i].value)).toFixed(2);
                st=st+(iprice[i].value)*(iquantity[i].value);  
            }

            stot = st.toFixed(2);

            gst = st*0.05;
            finalG = gst.toFixed(2);

            qst = st*0.09975;
            finalQ = qst.toFixed(2);

            g = (st+gst+qst);
            gtot = g.toFixed(2);

            itemQ.innerHTML=qtyI;
            stotal.innerHTML= stot;
            taxgst.innerHTML= finalG;
            taxqst.innerHTML= finalQ;
            gtotal.innerHTML= gtot;
        
        }

        subTotal();

    </script>

<?php
include('footer.php');
?>


