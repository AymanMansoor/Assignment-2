function checkOrderNb() 
{ 

  var orderNumb = document.getElementById("ordNb").value;
	
  if (orderNumb == "") 
  {
    document.getElementById("warn").innerHTML= "Please enter order number.";
    return false;
  }

  else{
    var ok = orderNumb.search(/^\#?\d{5}[a-zA-Z]{2}$/);

    if (ok == 0){
        document.getElementById("warn").innerHTML= "";
        return true;
    }
      
    else 
    {
        document.getElementById("warn").innerHTML= "Please enter a valid order number (note:\"#\" is optional).";
        return false;
    }
  }
	
}