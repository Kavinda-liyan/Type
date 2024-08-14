let points=0;

function diceRoll(){
    const dice1=document.getElementById("dice1");
    const dice2=document.getElementById("dice2");
    const warning=document.getElementById("warning");
    const pointsDisplay = document.getElementById("points");

    const value1=Math.floor(Math.random()*6)+1;
    
    const value2=Math.floor(Math.random()*6)+1;

    

    if(value1===value2){
        points += 10;
        dice1.innerHTML=`<img src="./dice/${value1}.png">`;
        dice2.innerHTML=`<img src="./dice/${value2}.png">`;
        warning.innerHTML=`<h3 class="win">Roll King !</h3>`;

    }
        

    
    else{
        points -= 5;
        dice1.innerHTML=`<img src="./dice/${value1}.png">`;
        dice2.innerHTML=`<img src="./dice/${value2}.png">`;
        warning.innerHTML=`<h3 class="lose">Try Again !</h3>`;
        
       
        
    }
    pointsDisplay.innerHTML = `<h3 min=0>${points}</h3>`;
   
   
}
