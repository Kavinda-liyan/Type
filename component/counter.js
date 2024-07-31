
const decreseBtn=document.getElementById("dec");
const resetBtn=document.getElementById("reset");
const increseBtn=document.getElementById("inc");

const Lable=document.getElementById("countertxt");

let count=0;

increseBtn.onclick=function(){
    count++;
    Lable.textContent=count;
}

decreseBtn.onclick=function(){
    count--;
    Lable.textContent=count;
}

resetBtn.onclick=function(){
    count=0;
    Lable.textContent=0;
}