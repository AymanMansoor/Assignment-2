function validate()
{
    document.getElementById('myForm')
	var emailt = document.getElementById("email");
	var password = document.getElementById("password");
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pwd;

  
	if(emailt.value == "")
	{
		alert("Please enter your email.");
		return false;
	}
    
	if(password.value == "")
	{
		alert("Please enter your password.");
		return false;
	}
    
    if (!reg.test(emailt.value) )  
    {
      alert("Please provide a valid email address");
      email.focus;
      return false;
    }
    else{(emailt.value == reg && password.value == pwd)
        alert("Login successfully!"); 
        
        window.location="index.html";
      
    }
	
}


  




