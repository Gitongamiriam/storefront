var idcounter=0



function Addrow(){
    idcounter+=1
    let row = document.createElement("tr");
    row.classList.add('rowclass');
    row.setAttribute('id',idcounter)

    let column1 = document.createElement("td"); 
    let input1 =document.createElement("input");
    input1.setAttribute("type", "text");
    var column1id=`description-${idcounter}`
    input1.setAttribute("id",column1id);
    column1.appendChild(input1)

   

    let column2 = document.createElement("td"); 
    let input2 =document.createElement("input");
    input2.setAttribute("type", "number");
    var column2id=`quantity-${idcounter}`
    input2.setAttribute("id",column2id);
    input2.addEventListener("input",Calculatetotal);
    column2.appendChild(input2)

    let column3 = document.createElement("td"); 
    let input3 =document.createElement("input");
    input3.setAttribute("type", "number");
    var column3id=`cost-${idcounter}`
    input3.setAttribute("id",column3id);
    input3.addEventListener("input",Calculatetotal);
    column3.appendChild(input3)

    let column4 = document.createElement("td"); 
    let input4 =document.createElement("input");
    input4.setAttribute("type", "number");
    var column4id=`vat-${idcounter}`
    input4.setAttribute("id",column4id);
    input4.addEventListener("input",Calculatetotal);
    column4.appendChild(input4)


    let column5 = document.createElement("td"); 
    let input5 =document.createElement("input");
    input5.setAttribute("type", "number");
    var column5id=`total-${idcounter}`
    input5.setAttribute("id",column5id);
    column5.appendChild(input5)

    let column6 = document.createElement("td"); 
    let input6 =document.createElement("button");
    input6.innerHTML="Delete item"
    var column6id=`button-${idcounter}`
    input6.setAttribute("id",column6id);
    input6.addEventListener("click",deleteitem);
    column6.appendChild(input6)


  
    
    row.appendChild(column1)
    row.appendChild(column2)
    row.appendChild(column3)
    row.appendChild(column4)
    row.appendChild(column5)
    row.appendChild(column6)

  

    document.getElementById("table2").appendChild(row);
    //let row="<tr> <td>Item1</td>  <td>50</td> <td>3</td> <td>10</td> <td>160</td> </tr>"
}

function Calculatetotal(){
    console.log('test')
    var correctid=this.id.split("-")[1]
    var costcolumnid=`cost-${correctid}`
    var quantitycolumnid=`quantity-${correctid}`
    var vatcolumnid=`vat-${correctid}`
    var totalcolumnid=`total-${correctid}`
    
    
    var costvalue=document.getElementById(costcolumnid).value 
    var quantityvalue=document.getElementById(quantitycolumnid).value
    var vatvalue=document.getElementById(vatcolumnid).value
    console.log(costvalue)
    console.log(quantityvalue)
    console.log(vatvalue)
    
    
    var total=(costvalue+(vatvalue/100*costvalue))*quantityvalue
    console.log(total)
    document.getElementById(totalcolumnid).value=total
    
    
};

function deleteitem(){
    var correctidrow=this.id.split("-")[1]
    var mynode=document.getElementById('table2')
    mynode = mynode.removeChild(mynode.childNodes[correctidrow])

}




