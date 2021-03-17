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
    var emailre = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

    var username_val = document.getElementById("username_text" + no).value;
    var name_val = document.getElementById("name_text" + no).value;
    var email_val = document.getElementById("email_text" + no).value;


    if (username_val == "") {
        alert("Username cannot be empty");
    } else if (name_val == "") {
        alert("Name cannot be empty");
    } else if (!emailre.test(email_val)) {
        alert("Invalid email address")
    } else {

        document.getElementById("username_row" + no).innerHTML = username_val;
        document.getElementById("name_row" + no).innerHTML = name_val;
        document.getElementById("email_row" + no).innerHTML = email_val;

        document.getElementById("edit_button" + no).style.display = "initial";
        //document.getElementById("save_button" + no).style.display = "none";
    }
}

function add_row() {

    var emailre = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var new_username = document.getElementById("newusername").value;
    var new_name = document.getElementById("newname").value;
    var new_email = document.getElementById("newemail").value;

    if (new_username == "") {
        alert("Username cannot be empty");
    } else if (username = "") {

        alert("Name cannot be empty");
    } else if (!emailre.test(new_email)) {
        alert("Invalid email address")
    } else {
        var table = document.getElementById("usertable");
        var table_len = (table.rows.length) - 1;

        var first = table.children[0];

        var s = document.createElement('TR');


        s.innerHTML = first.innerHTML;
        var str = s.innerHTML;

        var str2 = str.replace("slous1948", new_username);
        var str3 = str2.replace("Michael Larsen", new_name);
        var str4 = str3.replace("MichaelKLarsen@hotmail.com", new_email);
        var str5 = str4.replace("pfp1.jpeg", "nopfp.jpg");

        var newrow = "row" + (table_len + 1);
        var str6 = str5.replace(/row\d/g, newrow)

        var newbutton = "button" + (table_len + 1);
        var str7 = str6.replace(/button\d/g, newbutton);

        var newcom = "row('" + (table_len + 1);
        var str8 = str7.replace(/row\('\d/g, newcom);
        var str9 = str8.replace("2 Days Ago", "Never");

        s.innerHTML = str9;

        table.insertBefore(s, table.children[table_len]);

        document.getElementById("new_brand").value = "";
        document.getElementById("new_details").value = "";
        document.getElementById("new_price").value = "";
        document.getElementById("new_quantity").value = "";

    }
}