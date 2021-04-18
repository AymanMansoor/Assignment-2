<?php
include('header.php');
?>

    <div class="container">
        <h3>Dairy & Eggs</h3>
        <div class="row">
            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="villagioBread.html"><img src="images/VillagioBread.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Villaggio - Original White Bread - 675g</h4>
                        <p class="card-text">$3.59 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Villaggio - Original White Bread - 675g">
                        <input type="hidden" name="Price" value="3.59">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="bagel.html"><img src="images/Bagel.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">POM - 12 Grain Bagels - 510g</h4>
                        <p class="card-text">$3.99 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="POM - 12 Grain Bagels - 510g">
                        <input type="hidden" name="Price" value="3.99">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Tortillas.html"><img src="images/Tortillas.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">POM- Original 7" Tortillas - 10/Pack</h4>
                        <p class="card-text">$3.79 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="POM- Original 7 Tortillas - 10/Pack">
                        <input type="hidden" name="Price" value="3.79">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Pie.html"><img src="images/Pie.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">St-Donat Bakery - Apple Pie - 620g</h4>
                        <p class="card-text">$6.99 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="St-Donat Bakery - Apple Pie - 620g">
                        <input type="hidden" name="Price" value="6.99">
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>


    <?php
include('footer.php');
?>
