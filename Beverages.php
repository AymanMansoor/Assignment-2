<?php
include('header.php');
?>

    <div class="container">
        <h3>Beverages</h3>
        <div class="row">
            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Eska.html"><img src="images/Water.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Eska - Natural Spring Water - 4L</h4>
                        <p class="card-text">$2.49 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Eska - Natural Spring Water - 4L">
                        <input type="hidden" name="Price" value="2.49">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Juice.html"><img src="images/OrangeJuice.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">OASIS - Orange Juice Without Pulp - 1.65L</h4>
                        <p class="card-text">$4.49 ea</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="OASIS - Orange Juice Without Pulp - 1.65L">
                        <input type="hidden" name="Price" value="4.49">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Coke.html"><img src="images/Coke.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Coca-Cola - Soft Drink - 12x355ml</h4>
                        <p class="card-text">$5.49 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Coca-Cola - Soft Drink - 12x355ml">
                        <input type="hidden" name="Price" value="5.49">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Coffee.html"><img src="images/Coffee.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Maxwell House - Original Roast - 150g</h4>
                        <p class="card-text">$5.99 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Maxwell House - Original Roast - 150g">
                        <input type="hidden" name="Price" value="5.99">
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>


    <?php
include('footer.php');
?>