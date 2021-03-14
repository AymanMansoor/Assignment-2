function chkPasswords()
{
    document.getElementById('myForm')
	var pass1 = document.getElementById("initial");
	var pass2 = document.getElementById("second");

	// If the 1st password is empty
	if(pass1.value == ""|| pass2.value=="")
	{
		alert("Please enter a password");
		return false;
	}

	//if the two passwords are not the same
	if(pass1.value != pass2.value)
	{
		alert("The two passwords are not the same.\n"  + "Please re-enter.");
		return false;
	}
	else
         //validate if the pasword is correct or incorrect
         if( pass1.value ==  pass2.value ){
            alert("	Your password has been updated"); 
            //redirect the page
            window.location="index.html";
            return false;
        }else{
            alert("Passwords don't match, please enter the same password");
        }
        return true;
    
}
