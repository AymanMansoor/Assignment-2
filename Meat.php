<?php
include('header.php');
?>

    <div class="container">
        <h3>Dairy & Eggs</h3>
        <div class="row">
            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Chicken.html"><img src="images/Chicken.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Boneless Chicken Breasts - 5/pack</h4>
                        <p class="card-text">$7.99 /lb.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Boneless Chicken Breasts - 5/pack">
                        <input type="hidden" name="Price" value="7.99">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Steak.html"><img src="images/Tbone.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Red Grill - T-Bone Steak</h4>
                        <p class="card-text">$15.99 /lb.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Red Grill - T-Bone Steak">
                        <input type="hidden" name="Price" value="15.99">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="Bacon.html"><img src="images/Bacon.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Selection- Regular Bacon - 375g</h4>
                        <p class="card-text">$6.99 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Selection- Regular Bacon - 375g">
                        <input type="hidden" name="Price" value="6.99">
                    </div>
                  </div>
                </form>
            </div>

            <div class="col-md-3">
                <form action="manage_cart.php" method="POST">
                  <div class="product-top">
                    <a href="TopDogs.html"><img src="images/HotDog.jpg"></a>
                    <div class="card-body" style="text-align:center; font-family:Patua One;">
                        <h4 class="card-title" style="font-size:20px;">Maple Leaf - Original Wieners - 375g</h4>
                        <p class="card-text">$6.29 ea.</p>
                        <button type="submit" name="Add_To_Cart" class="btn btn-info" style="background:red;">Add To Cart</button>
                        <input type="hidden" name="Item_Name" value="Maple Leaf - Original Wieners - 375g">
                        <input type="hidden" name="Price" value="6.29">
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>


    <?php
include('footer.php');
?>
