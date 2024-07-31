document.getElementById("orderFood").onclick = function() {

    let foods = document.getElementById("foodInput").value;
    let toppings = document.getElementById("PT").value;
    let patty = document.getElementById("BP").value;
    let gravy = document.getElementById("SH").value;

   
    let message = document.getElementById("orderItem");
    let description = document.getElementById("orderDis");
    let total = document.getElementById("orderTot");
    let price;
if(foods==="" && toppings==="" && patty==="" && gravy===""){
    message.textContent = "Out of order! Check the order again";
    description.textContent=" ";
    total.textContent="";
}
else if(foods==="1" && (toppings==="PT1" || toppings==="PT2" || toppings==="PT3") && patty==="" && gravy===""){
  
    if(toppings==="PT1"){
        
     price=1350+100;
        message.textContent="Order : Pizza";
        description.textContent="Regular Pizza with Extra Cheese";
        total.textContent=`Total Price is ${price}`;

    }
    else if(toppings==="PT2"){
         price=1350+100;
        message.textContent="Order : Pizza";
        description.textContent="Regular Pizza with Pineapple";
        total.textContent=`Total Price is ${price}`;
    }
    else if(toppings==="PT3"){
        price=1350+250;
       message.textContent="Order : Pizza";
       description.textContent="Regular Pizza with Olive";
       total.textContent=`Total Price is ${price}`;
   }
   else{
    message.textContent = "Out of order! Check the topping code again";
   }
}
else if(foods==="2" && toppings==="" && gravy==="" && (patty==="BP1" || patty==="BP2")){
    if(patty==="BP1"){
        price=950+400;
        message.textContent="Order : Burgher";
        description.textContent="Beef Burgher ";
        total.textContent=`Total Price is ${price}`;
    }
   else if(patty==="BP2"){
        price=950+350;
        message.textContent="Order : Burgher";
        description.textContent="Pork Burgher ";
        total.textContent=`Total Price is ${price}`;
    }
    else{
        message.textContent = "Out of order! Check the patty code again";
       }
}
else if(foods==="3" && toppings==="" && patty==="" && (gravy==="SH1" || gravy==="SH2")){
    if(gravy==="SH1"){
        price=300+150;
        message.textContent="Order : String Hopper";
        description.textContent="String Hopper with Chicken gravy ";
        total.textContent=`Total Price is ${price}`;
    }
    if(gravy==="SH2"){
        price=300+100;
        message.textContent="Order : String Hopper";
        description.textContent="String Hopper with Kiri Gravy ";
        total.textContent=`Total Price is ${price}`;
    }
    else{
        message.textContent = "Out of order! Check the Gravy code again";
       }
}
else if(foods==="4" && toppings==="" && patty==="" && gravy===""){
    price=990;
        message.textContent="Order : Club Sandwitch";
        description.textContent="VIZA Club Sandwitch";
        total.textContent=`Total Price is ${price}`;
}
else{
    message.textContent = "Out of order! Check the order again"; 
    description.textContent=" ";
    total.textContent="";
}
}