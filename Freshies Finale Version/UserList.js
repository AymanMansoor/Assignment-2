function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    //document.getElementById("save_button" + no).style.display = "block";

    var username = document.getElementById("username_row" + no);
    var name = document.getElementById("name_row" + no);
    var email = document.getElementById("email_row" + no);

    var username_data = username.innerHTML;
    var name_data = name.innerHTML;
    var email_data = email.innerHTML;

    username.innerHTML = "<input type='text' style='width:100px' id='username_text" + no + "' value='" + username_data + "'>";
    name.innerHTML = "<input type='text' style='width:200px' id='name_text" + no + "' value='" + name_data + "'>";
    email.innerHTML = "<input type='text' style='width:250px' id='email_text" + no + "' value='" + email_data + "'>";
}

function save_row(no) {
    var username_val = document.getElementById("username_text" + no).value;
    var name_val = document.getElementById("name_text" + no).value;
    var email_val = document.getElementById("email_text" + no).value;

    document.getElementById("username_row" + no).innerHTML = username_val;
    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("email_row" + no).innerHTML = email_val;

    document.getElementById("edit_button" + no).style.display = "initial";
    //document.getElementById("save_button" + no).style.display = "none";
}

function add_row() {
    var new_brand = document.getElementById("new_brand").value;
    var new_details = document.getElementById("new_details").value;
    var new_price = document.getElementById("new_price").value;
    var new_quantity = document.getElementById("new_quantity").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='brand_row" + table_len + "'>" + new_brand + "</td><td id='details_row" + table_len + "'>" + new_details + "</td><td id='price_row" + table_len + "'>" + new_price + "</td><td id='quantity_row" + table_len + "'>" + new_quantity + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_brand").value = "";
    document.getElementById("new_details").value = "";
    document.getElementById("new_price").value = "";
    document.getElementById("new_quantity").value = "";

}