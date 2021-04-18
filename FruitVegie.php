<?php
include('header.php');
?>

    <div class="container">
        <h3>Fruits & Vegetables</h3>
        <div class="row">
            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Raspberries.html"><img src="images/Rasp.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Raspberries - </br>170g</h4>
                        <p class="card-text">$4.99 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Raspberries - 170g">
                        <input type="hidden" name="Price" value="4.99">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Lettuce.html"><img src="images/Letuce.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Iceberg Letuce - Sold Individually</h4>
                        <p class="card-text">$2.69 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Iceberg Letuce - Sold Individually">
                        <input type="hidden" name="Price" value="2.69">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Avocado.html"><img src="images/CreamCheese.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Avocado - Sold Individually</h4>
                        <p class="card-text">$1.99 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Avocado - Sold Individually">
                        <input type="hidden" name="Price" value="1.99">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Carrots.html"><img src="images/BabyCarrot.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Baby-Cut Carrots - 340g</h4>
                        <p class="card-text">>$1.99 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Baby-Cut Carrots - 340g">
                        <input type="hidden" name="Price" value="1.99">
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>


    <?php
include('footer.php');
?>
