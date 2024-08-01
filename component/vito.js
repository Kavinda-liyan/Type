let submitOrder=document.getElementById("SubmitOrderBtn");
let Cheese=document.getElementById("checkCheese");
let Olive=document.getElementById("checkOlive");
let Peporoni=document.getElementById("checkPeporoni");
let Allmeat=document.getElementById("checkMeat");
let Bpork=document.getElementById("checkBpork");
let emptyError=document.getElementById("emptyFill2");
let withToppingPrice;

let quantity=document.getElementById("quantity");
let increBtn=document.getElementById("increBtn");
let decreBtn=document.getElementById("decreBtn");
let incre=0;
let quantityDisplay;
vitodiscriptions=document.getElementById("VitoDescription");
vitoprices=document.getElementById("VitoPrice");
vitoQuantity=document.getElementById("Vitoquantity");

increBtn.onclick=function(){
    
    incre++;
    if(0<incre){
        quantity.value=incre;
        
    }
    
}
decreBtn.onclick=function(){
    incre--;
    if(0<incre){
        quantity.value=incre;
    }
   
}



submitOrder.onclick=function(){

   if(Cheese.checked==false && Olive.checked==false && Peporoni.checked==false 
    && Allmeat.checked==false && Bpork.checked==false){
        emptyError.textContent="Please Select Your Toppings and Quantity first before Checkout!";
    }
    else if(Cheese.checked==true && Olive.checked==false && Peporoni.checked==false 
        && Allmeat.checked==false && Bpork.checked==false){

            if(0<quantity.value){
                withToppingPrice=(1200+150)*quantity.value;
                vitodiscriptions.textContent=`Your order is Vito Cheese Pizza`;
                vitoQuantity.textContent=`Quantity: ${quantity.value}`;
                vitoprices.textContent=`Price : Rs.${withToppingPrice}`;

            }
            else{
                emptyError.textContent="Please select Quantity of food item first before Checkout!";
            }
            
        
            }

    else if(Cheese.checked==true && Olive.checked==true && Peporoni.checked==false 
        && Allmeat.checked==false && Bpork.checked==false){
            if(0<quantity.value){
                withToppingPrice=(1200+250+150)*quantity.value;
                vitodiscriptions.textContent=`Your order is Vito Cheese & Olive Pizza`;
                vitoQuantity.textContent=`Quantity: ${quantity.value}`;
                vitoprices.textContent=`Price : (1200+250+150)x ${quantity.value} = Rs.${withToppingPrice}`;

            }
            else{
                emptyError.textContent="Please select Quantity of food item first before Checkout!";
            }
        }
    else if(Cheese.checked==true && Olive.checked==true && Peporoni.checked==true 
        && Allmeat.checked==false && Bpork.checked==false){

        }
        else if(Cheese.checked==false && Olive.checked==false && Peporoni.checked==false 
            && Allmeat.checked==true && Bpork.checked==false){
                
            }
            else if(Cheese.checked==false && Olive.checked==false && Peporoni.checked==false 
                && Allmeat.checked==false && Bpork.checked==true){
                    
                }
        }

