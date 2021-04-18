<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" type="text/css"> 
<link href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@700&display=swap" rel="stylesheet" type="text/css"> 
<link href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>


<head>
    <meta charset="UTF-8">
    <title>Freshies - Shopping Cart</title>
    <link rel="stylesheet" href="style-p1p4.css">
    <link rel="stylesheet" href="style-p2p3.css">
    <style>
        .error {color: red;}
    </style>
</head>
<body class ="aisles" >
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
                <a class="nav-link" href="#">All Products</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="Aisles.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Aisles</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="Aisles.php">All Aisles</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="DairyEggs.php">Dairy & Eggs</a>
                    <a class="dropdown-item" href="FruitVegie.php">Fruits & Vegetables</a>
                    <a class="dropdown-item" href="Meat.php">Meat & Poultry</a>
                    <a class="dropdown-item" href="Bread.php">Bread & Bakery</a>
                    <a class="dropdown-item" href="Beverages.php">Beverages</a>
                </div>
            </li>
            <li class="nav-item">
                <?php
                    $count=0;
                    if(isset($_SESSION['cart']))
                    {
                        $count=count($_SESSION['cart']);
                    }
                ?>
                <a class="nav-link" href="mycart.php"><img src="images/Cart.png" width="18px" height="18px"> Cart (<?php echo $count; ?>)</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Signup.html"><img src="images/User.png" width="18px" height="18px"> Sign Up</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="login.html"><img src="images/Login.png" width="18px" height="18px"> Login</a>
            </li>
        </div>
    </nav>
