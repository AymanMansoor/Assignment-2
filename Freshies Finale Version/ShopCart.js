
/*------Part 3------*/

function addToCart()
{
    alert("Item Added to Cart.");
}

var sum = 4;
function addme() 
{
    var mainTable = document.getElementById('myTable');
    var row = mainTable.insertRow(sum);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = sum;
    sum = sum+1

    var cell2 = row.insertCell(1);
    cell2.innerHTML = "";

    var cell3 = row.insertCell(2);
    var img = document.createElement("img");
    img.src="images/Rasp.jpg";
    img.style.width="150px";
    img.style.height="150px";
    cell3.appendChild(img);

    var cell4 = row.insertCell(3);
    cell4.innerHTML = "Raspberries - 170g";

    var cell5 = row.insertCell(4);
    var remove = document.createElement("button")
    remove.className="btn rmv";
    remove.textContent="Remove";
    cell5.appendChild(remove);


    var cell6 = row.insertCell(5);
    var qty = document.createElement("input");
    qty.type="number";
    qty.value="1";
    cell6.appendChild(qty);

    var cell7 = row.insertCell(6);
    cell7.innerHTML = "$4.99 ea.";

    var cell8 = row.insertCell(7);
    cell8.innerHTML = "$4.99";

}


/*------Part 4------*/
function subQty1(){
    var qtyItm1 = document.getElementById("qty1").textContent;
    
    var qItm1 = parseFloat(qtyItm1);

    if (qItm1>1)
    {
        var qty = qItm1-1;
        document.getElementById("qty1").innerHTML = qty;
        
        var nItm = document.getElementById("totNumItems").textContent;
        var n = parseFloat(nItm);
        var num = n - 1;

        document.getElementById("totNumItems").innerHTML = num;

        var item1 = document.getElementById("cost1").textContent;
        var item2 = document.getElementById("cost2").textContent;
        var item3 = document.getElementById("cost3").textContent;
    
        var itm1 = parseFloat(item1);
        var itm2 = parseFloat(item2);
        var itm3 = parseFloat(item3);

        var totItemCost = itm1*qty
        var fnTotItmCost = totItemCost.toFixed(2);

        document.getElementById("fnCost1").innerHTML = fnTotItmCost;
    
        var qty2 = document.getElementById("qty2").textContent;
        var qty3 = document.getElementById("qty3").textContent;
    
        var q2 = parseFloat(qty2);
        var q3 = parseFloat(qty3);
    
        var subtotal = (itm1*qty)+(itm2*q2)+(itm3*q3);
    
        var finalSubtot = subtotal.toFixed(2);

        document.getElementById("subtotal").innerHTML = "$" + finalSubtot;

        var qst = subtotal*0.09975;
        var finalQst = qst.toFixed(2);
    
        document.getElementById("qsTax").innerHTML = "$" + finalQst;

        var gst = subtotal*0.05;
        var finalGst = gst.toFixed(2);
    
        document.getElementById("gsTax").innerHTML = "$" + finalGst;

        var grandtot = subtotal+qst+gst;
        var finalGrandTot = grandtot.toFixed(2);

        document.getElementById("gTotal").innerHTML = "$" + finalGrandTot;
    }
}

function addQty1(){
    var qtyItm1 = document.getElementById("qty1").textContent;
    
    var qItm1 = parseFloat(qtyItm1);

    if (qItm1>=1)
    {
        var qty = qItm1+1;
        document.getElementById("qty1").innerHTML = qty;

        var nItm = document.getElementById("totNumItems").textContent;
        var n = parseFloat(nItm);
        var num = n + 1;

        document.getElementById("totNumItems").innerHTML = num;

        var item1 = document.getElementById("cost1").textContent;
        var item2 = document.getElementById("cost2").textContent;
        var item3 = document.getElementById("cost3").textContent;
    
        var itm1 = parseFloat(item1);
        var itm2 = parseFloat(item2);
        var itm3 = parseFloat(item3);

        var totItemCost = itm1*qty
        var fnTotItmCost = totItemCost.toFixed(2);

        document.getElementById("fnCost1").innerHTML = fnTotItmCost;
    
        var qty2 = document.getElementById("qty2").textContent;
        var qty3 = document.getElementById("qty3").textContent;
    
        var q2 = parseFloat(qty2);
        var q3 = parseFloat(qty3);
    
        var subtotal = (itm1*qty)+(itm2*q2)+(itm3*q3);
    
        var finalSubtot = subtotal.toFixed(2);

        document.getElementById("subtotal").innerHTML = "$" + finalSubtot;

        var qst = subtotal*0.09975;
        var finalQst = qst.toFixed(2);
    
        document.getElementById("qsTax").innerHTML = "$" + finalQst;

        var gst = subtotal*0.05;
        var finalGst = gst.toFixed(2);
    
        document.getElementById("gsTax").innerHTML = "$" + finalGst;

        var grandtot = subtotal+qst+gst;
        var finalGrandTot = grandtot.toFixed(2);

        document.getElementById("gTotal").innerHTML = "$" + finalGrandTot;

    }
}

function subQty2(){
    var qtyItm1 = document.getElementById("qty2").textContent;
    
    var qItm1 = parseFloat(qtyItm1);

    if (qItm1>1)
    {
        var qty = qItm1-1;
        document.getElementById("qty2").innerHTML = qty;

        var nItm = document.getElementById("totNumItems").textContent;
        var n = parseFloat(nItm);
        var num = n - 1;

        document.getElementById("totNumItems").innerHTML = num;

        var item1 = document.getElementById("cost1").textContent;
        var item2 = document.getElementById("cost2").textContent;
        var item3 = document.getElementById("cost3").textContent;
    
        var itm1 = parseFloat(item1);
        var itm2 = parseFloat(item2);
        var itm3 = parseFloat(item3);

        var totItemCost = itm2*qty
        var fnTotItmCost = totItemCost.toFixed(2);

        document.getElementById("fnCost2").innerHTML = fnTotItmCost;
    
        var qty2 = document.getElementById("qty2").textContent;
        var qty3 = document.getElementById("qty3").textContent;
    
        var q2 = parseFloat(qty2);
        var q3 = parseFloat(qty3);
    
        var subtotal = (itm1*qty)+(itm2*q2)+(itm3*q3);
    
        var finalSubtot = subtotal.toFixed(2);

        document.getElementById("subtotal").innerHTML = "$" + finalSubtot;

        var qst = subtotal*0.09975;
        var finalQst = qst.toFixed(2);
    
        document.getElementById("qsTax").innerHTML = "$" + finalQst;

        var gst = subtotal*0.05;
        var finalGst = gst.toFixed(2);
    
        document.getElementById("gsTax").innerHTML = "$" + finalGst;

        var grandtot = subtotal+qst+gst;
        var finalGrandTot = grandtot.toFixed(2);

        document.getElementById("gTotal").innerHTML = "$" + finalGrandTot;
    }
}

function addQty2(){
    var qtyItm1 = document.getElementById("qty2").textContent;
    
    var qItm1 = parseFloat(qtyItm1);

    if (qItm1>=1)
    {
        var qty = qItm1+1;
        document.getElementById("qty2").innerHTML = qty;

        var nItm = document.getElementById("totNumItems").textContent;
        var n = parseFloat(nItm);
        var num = n + 1;

        document.getElementById("totNumItems").innerHTML = num;

        var item1 = document.getElementById("cost1").textContent;
        var item2 = document.getElementById("cost2").textContent;
        var item3 = document.getElementById("cost3").textContent;
    
        var itm1 = parseFloat(item1);
        var itm2 = parseFloat(item2);
        var itm3 = parseFloat(item3);

        var totItemCost = itm2*qty
        var fnTotItmCost = totItemCost.toFixed(2);

        document.getElementById("fnCost2").innerHTML = fnTotItmCost;
    
        var qty2 = document.getElementById("qty2").textContent;
        var qty3 = document.getElementById("qty3").textContent;
    
        var q2 = parseFloat(qty2);
        var q3 = parseFloat(qty3);
    
        var subtotal = (itm1*qty)+(itm2*q2)+(itm3*q3);
    
        var finalSubtot = subtotal.toFixed(2);

        document.getElementById("subtotal").innerHTML = "$" + finalSubtot;

        var qst = subtotal*0.09975;
        var finalQst = qst.toFixed(2);
    
        document.getElementById("qsTax").innerHTML = "$" + finalQst;

        var gst = subtotal*0.05;
        var finalGst = gst.toFixed(2);
    
        document.getElementById("gsTax").innerHTML = "$" + finalGst;

        var grandtot = subtotal+qst+gst;
        var finalGrandTot = grandtot.toFixed(2);

        document.getElementById("gTotal").innerHTML = "$" + finalGrandTot;
    }
}

function subQty3(){
    var qtyItm1 = document.getElementById("qty3").textContent;
    
    var qItm1 = parseFloat(qtyItm1);

    if (qItm1>1)
    {
        var qty = qItm1-1;
        document.getElementById("qty3").innerHTML = qty;

        var nItm = document.getElementById("totNumItems").textContent;
        var n = parseFloat(nItm);
        var num = n - 1;

        document.getElementById("totNumItems").innerHTML = num;

        var item1 = document.getElementById("cost1").textContent;
        var item2 = document.getElementById("cost2").textContent;
        var item3 = document.getElementById("cost3").textContent;
    
        var itm1 = parseFloat(item1);
        var itm2 = parseFloat(item2);
        var itm3 = parseFloat(item3);

        var totItemCost = itm3*qty
        var fnTotItmCost = totItemCost.toFixed(2);

        document.getElementById("fnCost3").innerHTML = fnTotItmCost;
    
        var qty2 = document.getElementById("qty2").textContent;
        var qty3 = document.getElementById("qty3").textContent;
    
        var q2 = parseFloat(qty2);
        var q3 = parseFloat(qty3);
    
        var subtotal = (itm1*qty)+(itm2*q2)+(itm3*q3);
    
        var finalSubtot = subtotal.toFixed(2);

        document.getElementById("subtotal").innerHTML = "$" + finalSubtot;

        var qst = subtotal*0.09975;
        var finalQst = qst.toFixed(2);
    
        document.getElementById("qsTax").innerHTML = "$" + finalQst;

        var gst = subtotal*0.05;
        var finalGst = gst.toFixed(2);
    
        document.getElementById("gsTax").innerHTML = "$" + finalGst;

        var grandtot = subtotal+qst+gst;
        var finalGrandTot = grandtot.toFixed(2);

        document.getElementById("gTotal").innerHTML = "$" + finalGrandTot;
    }
}

function addQty3(){
    var qtyItm1 = document.getElementById("qty3").textContent;
    
    var qItm1 = parseFloat(qtyItm1);

    if (qItm1>=1)
    {
        var qty = qItm1+1;
        document.getElementById("qty3").innerHTML = qty;

        var nItm = document.getElementById("totNumItems").textContent;
        var n = parseFloat(nItm);
        var num = n + 1;

        document.getElementById("totNumItems").innerHTML = num;

        var item1 = document.getElementById("cost1").textContent;
        var item2 = document.getElementById("cost2").textContent;
        var item3 = document.getElementById("cost3").textContent;
    
        var itm1 = parseFloat(item1);
        var itm2 = parseFloat(item2);
        var itm3 = parseFloat(item3);

        var totItemCost = itm3*qty
        var fnTotItmCost = totItemCost.toFixed(2);

        document.getElementById("fnCost3").innerHTML = fnTotItmCost;
    
        var qty2 = document.getElementById("qty2").textContent;
        var qty3 = document.getElementById("qty3").textContent;
    
        var q2 = parseFloat(qty2);
        var q3 = parseFloat(qty3);
    
        var subtotal = (itm1*qty)+(itm2*q2)+(itm3*q3);
    
        var finalSubtot = subtotal.toFixed(2);

        document.getElementById("subtotal").innerHTML = "$" + finalSubtot;

        var qst = subtotal*0.09975;
        var finalQst = qst.toFixed(2);
    
        document.getElementById("qsTax").innerHTML = "$" + finalQst;

        var gst = subtotal*0.05;
        var finalGst = gst.toFixed(2);
    
        document.getElementById("gsTax").innerHTML = "$" + finalGst;

        var grandtot = subtotal+qst+gst;
        var finalGrandTot = grandtot.toFixed(2);

        document.getElementById("gTotal").innerHTML = "$" + finalGrandTot;
    }
}

function numOfItems(){
    var item1 = document.getElementById("qty1").textContent;
    var item2 = document.getElementById("qty2").textContent;
    var item3 = document.getElementById("qty3").textContent;

    var itm1 = parseFloat(item1);
    var itm2 = parseFloat(item2);
    var itm3 = parseFloat(item3);

    var numItm = itm1+itm2+itm3;

    document.getElementById("totNumItems").innerHTML = numItm;

}

function subtotal()
{
    var item1 = document.getElementById("cost1").textContent;
    var item2 = document.getElementById("cost2").textContent;
    var item3 = document.getElementById("cost3").textContent;

    var itm1 = parseFloat(item1);
    var itm2 = parseFloat(item2);
    var itm3 = parseFloat(item3);

    var qty1 = document.getElementById("qty1").textContent;
    var qty2 = document.getElementById("qty2").textContent;
    var qty3 = document.getElementById("qty3").textContent;

    var q1 = parseFloat(qty1);
    var q2 = parseFloat(qty2);
    var q3 = parseFloat(qty3);

    var subtotal = (itm1*q1)+(itm2*q2)+(itm3*q3);

    document.getElementById("subtotal").innerHTML = "$" + subtotal;

    return subtotal;
}

function qst()
{
    var sub = subtotal();

    var qst = sub*0.09975;

    var finalQst = qst.toFixed(2);

    document.getElementById("qsTax").innerHTML = "$" + finalQst;

    return finalQst;
}

function gst()
{
    var sub = subtotal();

    var gst = sub*0.05;

    var finalGst = gst.toFixed(2);

    document.getElementById("gsTax").innerHTML = "$" + finalGst;

    return finalGst;
}

function gTotal()
{
    var sub = subtotal();
    var qs = qst();
    var gs = gst();

    var qTax = parseFloat(qs);
    var gTax = parseFloat(gs);

    var grandtot = sub+qTax+gTax;

    document.getElementById("gTotal").innerHTML = "$" + grandtot;

    return gst;
}

function remove(target) 
{
    var remove = target.parentNode
    var toDel = remove.parentNode;
    toDel.parentNode.removeChild(toDel);
}

