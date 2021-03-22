function validate()
{
    
    
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
	var email_add = document.getElementById("email_add");
	var password = document.getElementById("password");
    var passwordconfirmation = document.getElementById("passwordconfirmation");
    var postalcode = document.getElementById("postalcode");
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var regExp =/[A-Z\d[A-Z]\s\d[A-Z]\d/;

	
	if(email_add.value == "") 
	{
		alert("Please enter your email.");
		return false;
	} else if(reg.test(email_add.value) == false) 
    {
            alert('Invalid Email Address');
            return false;
    }
	if(password.value != passwordconfirmation.value) 
	{
		alert("The two passwords are not the same.\n"  + "Please re-enter.");
		return false;
	}else if(password.value == "" || passwordconfirmation.value == "") {
	    alert("Please enter your password.");
		return false;
	}
    if(regExp.test(postalcode.value) == false) {
        alert("Invalid Zip Code");
        return false;
    }
  if( firstname.value != "" && lastname.value != "") 
    {
        alert("Registration successful!"); 
        window.location="index.html";
        return false;
    }else{
        alert("Please complete first name or last name");
    }
    

    
}


  
