function validate() {
    document.getElementById('myForm')

    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email_add = document.getElementById("email_add");
    var postalcode = document.getElementById("postalcode");
    var add = document.getElementById("address");
    var pn = document.getElementById("phonenumber");
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i;
    var regExp = /[A-Z\d[A-Z]\s\d[A-Z]\d/;
    var regPN = /\d{10}/;

    if (email_add.value == "") {
        alert("Please enter an email.");
        return false;
    } else if (reg.test(email_add.value) == false) {
        alert('Invalid Email Address');
        return false;
    }
    if (regExp.test(postalcode.value) == false) {
        alert("Invalid Zip Code");
        return false;
    }
    if (add.value == "") {
        alert("Address incomplete");
        return false;
    }
    if (!regPN.test(pn.value)) {
        alert("Invalid Phone Number");
        return false;
    }

    if (firstname.value != "" && lastname.value != "") {
        alert("Edit successful!");
        window.location = "UserList.html";
        return false;
    } else {
        alert("Please complete first name or last name");
    }



}