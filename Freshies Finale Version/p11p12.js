    function removeMilk(target) 
    {
        var qty = document.getElementById("qtyMilk").textContent;
        var qty1=parseInt(qty);
            
        if (qty1==1)
        {
            var toDel = target.parentNode.parentNode.parentNode;
            toDel.parentNode.removeChild(toDel);
        }
        else
        {
            var qty2= qty1-1;
            document.getElementById("qtyMilk").innerHTML=qty2;

            var prc = document.getElementById("prcMilk").textContent;
            var prc1 = parseFloat(prc);
            var cst = prc1*qty2;
            document.getElementById("cstMilk").innerHTML=cst.toFixed(2);
        }
    }

    function removeRasp(target) 
    {
        var qty = document.getElementById("qtyRasp").textContent;
        var qty1=parseInt(qty);
            
        if (qty1==1)
        {
            var toDel = target.parentNode.parentNode.parentNode;
            toDel.parentNode.removeChild(toDel);
        }
        else
        {
            var qty2= qty1-1;
            document.getElementById("qtyRasp").innerHTML=qty2;

            var prc = document.getElementById("prcRasp").textContent;
            var prc1 = parseFloat(prc);
            var cst = prc1*qty2;
            document.getElementById("cstRasp").innerHTML=cst.toFixed(2);
        }
    }

    function removeLetuce(target) 
    {
        var qty = document.getElementById("qtyLetuce").textContent;
        var qty1=parseInt(qty);
            
        if (qty1==1)
        {
            var toDel = target.parentNode.parentNode.parentNode;
            toDel.parentNode.removeChild(toDel);
        }
        else
        {
            var qty2= qty1-1;
            document.getElementById("qtyLetuce").innerHTML=qty2;

            var prc = document.getElementById("prcLetuce").textContent;
            var prc1 = parseFloat(prc);
            var cst = prc1*qty2;
            document.getElementById("cstLetuce").innerHTML=cst.toFixed(2);
        }
    }

    function addMilk()
        {
            var qty = document.getElementById("qtyMilk").textContent;
            var qty1=parseInt(qty);
            var qty2= qty1+1;
            document.getElementById("qtyMilk").innerHTML=qty2;

            var prc = document.getElementById("prcMilk").textContent;
            var prc1 = parseFloat(prc);
            var cst = prc1*qty2;
            document.getElementById("cstMilk").innerHTML=cst.toFixed(2);
        }

    function addRasp()
        {
            var qty = document.getElementById("qtyRasp").textContent;
            var qty1=parseInt(qty);
            var qty2= qty1+1;
            document.getElementById("qtyRasp").innerHTML=qty2;

            var prc = document.getElementById("prcRasp").textContent;
            var prc1 = parseFloat(prc);
            var cst = prc1*qty2;
            document.getElementById("cstRasp").innerHTML=cst.toFixed(2);
        }

    function addLetuce()
        {
            var qty = document.getElementById("qtyLetuce").textContent;
            var qty1=parseInt(qty);
            var qty2= qty1+1;
            document.getElementById("qtyLetuce").innerHTML=qty2;

            var prc = document.getElementById("prcLetuce").textContent;
            var prc1 = parseFloat(prc);
            var cst = prc1*qty2;
            document.getElementById("cstLetuce").innerHTML=cst.toFixed(2);
        }

    var sum=4;
    function addItem()
        {
            var mainTable = document.getElementById('orderEditTable');
            var row = mainTable.insertRow(sum);
            
            var cell1 = row.insertCell(0);
            cell1.innerHTML = sum;
            sum = sum+1;
            
            var cell2 = row.insertCell(1);
            var prod1 = document.createElement("div");
            prod1.id="prodName";
            var prod = document.createElement("input");
            prod.type="text";
            prod.id="productName";
            prod1.appendChild(prod);
            cell2.appendChild(prod1);
            
            var cell3 = row.insertCell(2);
            var qty1 = document.createElement("div");
            qty1.id="prodQty";
            var qty = document.createElement("input");
            qty.type="text";
            qty.id="productQty";
            qty1.appendChild(qty);
            cell3.appendChild(qty1);
            
            var cell4 = row.insertCell(3);
            var prc1 = document.createElement("div");
            prc1.id="prodPrice";
            var prc = document.createElement("input");
            prc.type="text";
            prc.id="productPrice";
            prc1.appendChild(prc);
            cell4.appendChild(prc1);
            
            var cell5 = row.insertCell(4);
            var cst1 = document.createElement("div");
            cst1.id="prodCost";
            var cst = document.createElement("input");
            cst.type="text";
            cst.id="productCost";
            cst1.appendChild(cst);
            cell5.appendChild(cst1);

            var cell6 = row.insertCell(5);
            var btnAdd = document.createElement("button");
            btnAdd.style="font-size: 16px";
            btnAdd.onClick="addMilk()";
            btnAdd.textContent="Add";
            var btnDel = document.createElement("button");
            btnDel.style="font-size: 16px";
            btnDel.onClick="removeMilk(this)";
            btnDel.textContent="Delete";
            cell6.appendChild(btnAdd);
            cell6.appendChild(btnDel);

        }

        function savePage()
        {
            var prod1 = document.getElementById("productName").value;
            document.getElementById("prodName").innerHTML=prod1;

            var qty1 = document.getElementById("productQty").value;
            document.getElementById("prodQty").innerHTML=qty1;

            var prod1 = document.getElementById("productPrice").value;
            document.getElementById("prodPrice").innerHTML=prod1;

            var prod1 = document.getElementById("productCost").value;
            document.getElementById("prodCost").innerHTML=prod1;

        }

