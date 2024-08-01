let small=document.getElementById("smallP");
let medium=document.getElementById("mediumP");
let large=document.getElementById("largeP");
let submitOrder=document.getElementById("SubmitOrderBtn");
let Cheese=document.getElementById("checkCheese");
let Olive=document.getElementById("checkOlive");
let Peporoni=document.getElementById("checkPeporoni");
let Allmeat=document.getElementById("checkMeat");
let Bpork=document.getElementById("checkBpork");
let emptyError=document.getElementById("emptyFill2");
let emptyError1=document.getElementById("emptyFill1");
let withToppingPrice;

let count=document.getElementById("quantity");
let increBtn=document.getElementById("increBtn");
let decreBtn=document.getElementById("decreBtn");
let incre=0;
let quantityDisplay;
vitodiscriptions=document.getElementById("VitoDescription");
vitoprices=document.getElementById("VitoPrice");
vitoQuantity=document.getElementById("Vitoquantity");
let errorChoice=document.getElementById("errorChoice");
let basePrice;
let orderNo=document.getElementById("orderNo");

increBtn.onclick=function(){
    
    incre++;
    if(0<incre){
        count.value=incre;
        
    }
    
}
decreBtn.onclick=function(){
    incre--;
    if(0<incre){
        count.value=incre;
    }
   
}



submitOrder.onclick=function(){

    


if(small.checked==true || medium.checked==true || large.checked==true){

    errorChoice.textContent="";

    if(small.checked==true){
        basePrice=1200;
    }
    else if(medium.checked==true){
        basePrice=1650;
    }
    else if(large.checked==true){
        basePrice=2100;
    }
else{
errorChoice.textContent="Please select pizza size first";

}

    if(Cheese.checked==false && Olive.checked==false && Peporoni.checked==false 
        && Allmeat.checked==false && Bpork.checked==false){
            emptyError.textContent="Please Select Your Toppings and Quantity first before Checkout!";
        }
        else if(Cheese.checked==true && Olive.checked==false && Peporoni.checked==false 
            && Allmeat.checked==false && Bpork.checked==false){
    
                if(0<quantity.value){
                    orderNo.textContent=`Order No: ${Math.trunc((Math.random()*1000))}` ;
                    withToppingPrice=(basePrice+150)*count.value;
                    vitodiscriptions.textContent=`Your order is Vito Cheese Pizza`;
                    vitoQuantity.textContent=`Quantity: ${count.value}`;
                    vitoprices.textContent=`Price : (${basePrice}+150)x ${count.value} = Rs.${withToppingPrice}`;
    
                }
                else{
                    emptyError1.textContent="Please select Quantity of food item first before Checkout!";
                }
                
            
                }
    
        else if(Cheese.checked==true && Olive.checked==true && Peporoni.checked==false 
            && Allmeat.checked==false && Bpork.checked==false){
                if(0<quantity.value){
                    orderNo.textContent=`Order No: ${Math.trunc((Math.random()*1000))}` ;
                    withToppingPrice=(basePrice+250+150)*count.value;
                    vitodiscriptions.textContent=`Your order is Vito Cheese & Olive Pizza`;
                    vitoQuantity.textContent=`Quantity: ${count.value}`;
                    vitoprices.textContent=`Price : (${basePrice}+250+150)x ${count.value} = Rs.${withToppingPrice}`;
    
                }
                else{
                    emptyError1.textContent="Please select Quantity of food item first before Checkout!";
                }
            }
        else if(Cheese.checked==true && Olive.checked==true && Peporoni.checked==true 
            && Allmeat.checked==false && Bpork.checked==false){
                if(0<quantity.value){
                    orderNo.textContent=`Order No: ${Math.trunc((Math.random()*1000))}` ;
                    withToppingPrice=(basePrice+250+150+250)*count.value;
                    vitodiscriptions.textContent=`Your order is Vito Cheese, Olive with Peporoni Pizza`;
                    vitoQuantity.textContent=`Quantity: ${count.value}`;
                    vitoprices.textContent=`Price : (${basePrice}+250+150+250)x ${count.value} = Rs.${withToppingPrice}`;
    
                }
                else{
                    emptyError1.textContent="Please select Quantity of food item first before Checkout!";
                }
            }
            else if(Cheese.checked==false && Olive.checked==false && Peporoni.checked==true 
                && Allmeat.checked==true && Bpork.checked==false){
                    if(0<quantity.value){
                        orderNo.textContent=`Order No: ${Math.trunc((Math.random()*1000))}` ;
                        withToppingPrice=(basePrice+250)*count.value;
                        vitodiscriptions.textContent=`Your order is Vito Peporoni Pizza`;
                        vitoQuantity.textContent=`Quantity: ${count.value}`;
                        vitoprices.textContent=`Price : (${basePrice}+250)x ${count.value} = Rs.${withToppingPrice}`;
        
                    }
                    else{
                        emptyError1.textContent="Please select Quantity of food item first before Checkout!";
                    }
                }
                else if(Cheese.checked==false && Olive.checked==true && Peporoni.checked==false 
                    && Allmeat.checked==false && Bpork.checked==false){
                        if(0<quantity.value){
                            orderNo.textContent=`Order No: ${Math.trunc((Math.random()*1000))}` ;
                            withToppingPrice=(basePrice+250)*count.value;
                            vitodiscriptions.textContent=`Your order is Vito Olive Pizza`;
                            vitoQuantity.textContent=`Quantity: ${count.value}`;
                            vitoprices.textContent=`Price : (${basePrice}+250)x ${count.value} = Rs.${withToppingPrice}`;
            
                        }
                        else{
                            emptyError1.textContent="Please select Quantity of food item first before Checkout!";
                        }
                        
                    }

                    else if(Cheese.checked==false && Olive.checked==false && Peporoni.checked==false 
                        && Allmeat.checked==true && Bpork.checked==false){
                            if(0<quantity.value){
                                orderNo.textContent=`Order No: ${Math.trunc((Math.random()*1000))}` ;
                                withToppingPrice=(basePrice+450)*count.value;
                                vitodiscriptions.textContent=`Your order is Vito Allmeat Signature Pizza`;
                                vitoQuantity.textContent=`Quantity: ${count.value}`;
                                vitoprices.textContent=`Price : (${basePrice}+450)x ${count.value} = Rs.${withToppingPrice}`;
                
                            }
                            else{
                                emptyError1.textContent="Please select Quantity of food item first before Checkout!";
                            }
                        }
                        else if(Cheese.checked==false && Olive.checked==false && Peporoni.checked==false 
                            && Allmeat.checked==false && Bpork.checked==true){
                                if(0<quantity.value){
                                    orderNo.textContent=`Order No: ${Math.trunc((Math.random()*1000))}` ;
                                    withToppingPrice=(basePrice+600)*count.value;
                                    vitodiscriptions.textContent=`Your order is Vito Sri Lankan Black Pork Signature Pizza`;
                                    vitoQuantity.textContent=`Quantity: ${count.value}`;
                                    vitoprices.textContent=`Price : (${basePrice}+600)x ${count.value} = Rs.${withToppingPrice}`;
                    
                                }
                                else{
                                    emptyError1.textContent="Please select Quantity of food item first before Checkout!";
                                }
                            }
                            else if(Cheese.checked==false && Olive.checked==false && Peporoni.checked==false 
                                && Allmeat.checked==true && Bpork.checked==true){
                                    emptyError.textContent="One Type of Signature Pizza under one Order ";
                                }
                            else {
                                emptyError.textContent="Signature Pizzas can not add Toppings please redraw the Order";
                                vitodiscriptions.textContent=``;
                                    vitoQuantity.textContent=``;
                                    vitoprices.textContent=``;
                                    orderNo.textContent= ``;
                            }
}
else{
    errorChoice.textContent="Please select pizza size first";
}

       
                }

             
    

   

