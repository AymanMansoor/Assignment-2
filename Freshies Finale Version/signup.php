<!DOCTYPE html>
<html lang="en">
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@700&display=swap" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css2?family=Eczar:wght@700&display=swap" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

<head>
    <meta charset="UTF-8">
    <title>Freshies - Login</title>
    <link rel="stylesheet" href="p5p6.css">
    <script src="p6.js"></script>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="Index.html">Freshies</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="Index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="ProductList.html">All Products</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="Aisles.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Aisles</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="Aisles.html">All Aisles</a>
                        <a class="dropdown-item" href="WeeklyDeals.html">Weekly Deals</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="DairyEggs.html">Dairy & Eggs</a>
                        <a class="dropdown-item" href="FruitVegie.html">Fruits & Vegetables</a>
                        <a class="dropdown-item" href="Snacks.html">Snacks</a>
                        <a class="dropdown-item" href="Meat.html">Meat & Poultry</a>
                        <a class="dropdown-item" href="Bread.html">Bread & Bakery</a>
                        <a class="dropdown-item" href="Beverages.html">Beverages</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="ShopCart.html"><img src="images/Cart.png" width="18px" height="18px"> Cart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Signup.html"><img src="images/User.png" width="18px" height="18px"> Sign Up</a>
                </li>
        </div>
    </nav>
    <?php
     
      $firstname = $_POST["firstname"];
      $lastname = $_POST["lastname"];
      $postalcode = $_POST["postalcode"];
      $email = $_POST["email"];
      $password = $_POST["password"]; ?>
    <br>
    <div class="container col-md-12">
        <div class="text ">
            <div>
    <h2>Sign up information </h2>
    
    <?php
    
      print ("First name :  $firstname  <br />");
      print ("Last name :  $lastname  <br />"); 
      print ("Postal code :  $postalcode  <br />");
      print ("Email :  $email  <br />");
     
   
      
    ?>
    <?php
    $out = fopen("register_user","a");
    fputs($out,"$_POST[firstname]\n");
    fputs($out,"$_POST[lastname]\n");
    fputs($out,"$_POST[postalcode]\n");
    fputs($out,"$_POST[email]\n");
    fputs($out,"$_POST[password]\n\n");
    


    ?>
    <?php
if(isset($_POST["email"]) && isset($_POST["pass"]))
{
    
    $file=fopen("data.txt","r");
    $finduser = false;
    while(!feof($file))
    {
        $line = fgets($file);
        $array = explode(";",$line);
        if(trim($array[0]) == $_POST['email'])
        {
            $finduser=true;
            break;
        }
    }
    fclose($file);
 
    
    if( $finduser )
    {
        echo $_POST["email"];
        echo "<script>alert('user already exists please Log in ');</script>";
        echo'<script> window.location="Login.html"; </script> ';
        
    }
    else
    {
        $file = fopen("data.txt", "a");
        fputs($file,$_POST["email"].";".$_POST["pass"]."\r\n");
        fclose($file);
        echo $_POST["email"];
        echo " registered successfully!";
    }
}
else
{
    include 'signup.html';
}
?>

