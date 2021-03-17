function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var brand=document.getElementById("brand_row"+no);
 var details=document.getElementById("details_row"+no);
 var price=document.getElementById("price_row"+no);
 var quantity=document.getElementById("quantity_row"+no);
	
 var brand_data=brand.innerHTML;
 var details_data=details.innerHTML;
 var price_data=price.innerHTML;
 var quantity_data=quantity.innerHTML;
	
 brand.innerHTML="<input type='text' id='brand_text"+no+"' value='"+brand_data+"'>";
 details.innerHTML="<input type='text' id='details_text"+no+"' value='"+details_data+"'>";
 price.innerHTML="<input type='text' id='price_text"+no+"' value='"+price_data+"'>";
 quantity.innerHTML="<input type='text' id='quantity_text"+no+"' value='"+quantity_data+"'>";
}

function save_row(no)
{
 var brand_val=document.getElementById("brand_text"+no).value;
 var details_val=document.getElementById("details_text"+no).value;
 var price_val=document.getElementById("price_text"+no).value;
 var quantity_val=document.getElementById("quantity_text"+no).value;

 document.getElementById("brand_row"+no).innerHTML=brand_val;
 document.getElementById("details_row"+no).innerHTML=details_val;
 document.getElementById("price_row"+no).innerHTML=price_val;
 document.getElementById("quantity_row"+no).innerHTML=quantity_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_brand=document.getElementById("new_brand").value;
 var new_details=document.getElementById("new_details").value;
 var new_price=document.getElementById("new_price").value;
 var new_quantity=document.getElementById("new_quantity").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='brand_row"+table_len+"'>"+new_brand+"</td><td id='details_row"+table_len+"'>"+new_details+"</td><td id='price_row"+table_len+"'>"+new_price+"</td><td id='quantity_row"+table_len+"'>"+new_quantity+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_brand").value="";
 document.getElementById("new_details").value="";
 document.getElementById("new_price").value="";
 document.getElementById("new_quantity").value="";
 
}