<?php
include('header.php');
?>

    <div class="container">
        <h3>Dairy & Eggs</h3>
        <div class="row">
            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Milk.html"><img src="images/Milk.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Quebon - 2% Milk - 2L</h4>
                        <p class="card-text">$3.90 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Quebon - 2% Milk - 2L">
                        <input type="hidden" name="Price" value="3.90">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Eggs.html"><img src="images/Eggs.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Selection - White Eggs - Extra Large</h4>
                        <p class="card-text">$4.19 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Selection - White Eggs - Extra Large">
                        <input type="hidden" name="Price" value="4.19">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="CreamCheese.html"><img src="images/CreamCheese.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Philadelphia - Cream Cheese - 227g</h4>
                        <p class="card-text">$5.49 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Philadelphia - Cream Cheese - 227g">
                        <input type="hidden" name="Price" value="5.49">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Yogurt.html"><img src="images/Yogurt.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Activia - Vanilla Yogurt - 8x100g</h4>
                        <p class="card-text">$5.29 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Activia - Vanilla Yogurt - 8x100g">
                        <input type="hidden" name="Price" value="5.29">
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>


    <?php
include('footer.php');
?>
