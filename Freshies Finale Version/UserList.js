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

    var new_username = document.getElementById("newusername").value;
    var new_name = document.getElementById("newname").value;
    var new_quantity = document.getElementById("newemail").value;

    var table = document.getElementById("usertable");
    var table_len = (table.rows.length) - 1;

    var node = createElement("tr");
    node.innerHTML = "<td style='width:5%' <img src='images/nopfp.jpg' height=50px width=50px></img></td>> ";

    document.getElementById("new_brand").value = "";
    document.getElementById("new_details").value = "";
    document.getElementById("new_price").value = "";
    document.getElementById("new_quantity").value = "";

}