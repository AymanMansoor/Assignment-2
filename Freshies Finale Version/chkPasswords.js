function chkPasswords()
{
    
	var pass1 = document.getElementById("initial");
	var pass2 = document.getElementById("second");

	
	if(pass1.value == ""|| pass2.value=="")
	{
		alert("Please enter a password");
		return false;
	}

	
	if(pass1.value != pass2.value)
	{
		alert("The two passwords are not the same.\n"  + "Please re-enter.");
		return false;
	}
	else
         
         if( pass1.value ==  pass2.value ){
            alert("	Your password has been updated"); 
            
            window.location="index.html";
            return false;
        }
    
}
