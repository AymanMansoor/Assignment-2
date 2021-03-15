function numOfItems(){
    var item1 = document.getElementById("qty1").value;
    var item2 = document.getElementById("qty2").value;
    var item3 = document.getElementById("qty3").value;

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

    var subtotal = itm1+itm2+itm3;

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
