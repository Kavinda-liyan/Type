

function rollDice(){
const diceInput=document.getElementById("diceSides").value;
const diceResult=document.getElementById("diceResult");
const Images=document.getElementById("diceImg");
const valueDice=[];
const diceImages=[];
  for(let i=0; i < diceInput ; i++){
    const value= Math.floor(Math.random()*6)+1;
    valueDice.push(value);
    diceImages.push(`<img src="../src/dice/${value}.png" alt>`);
    
  }

  diceResult.textContent=`dice : ${valueDice.join(" , ")}`;
  Images.innerHTML=diceImages.join(" ");

}