const TempInput=document.getElementById("inputTemp");

const CeltoFah=document.getElementById("CtoF");
const FahtoCel=document.getElementById("FtoC");
const CeltoKel=document.getElementById("CtoK");
const KeltoCel=document.getElementById("KtoC");
const FahtoKel=document.getElementById("FtoK");
const KeltoFah=document.getElementById("KtoF");
const OutputTxt=document.getElementById("Output");
const disTxt=document.getElementById("discription");
const ErrorMsg=document.getElementById("error");
let temprature;

function tempconverter(){
    let inputTemparature=Number(TempInput.value);
    temprature=Number(TempInput.value);
    if(CeltoFah.checked){
        
        temprature=temprature*9/5+32;
        OutputTxt.textContent=`${temprature}°F`;
        disTxt.textContent=`${inputTemparature}°C is ${temprature}°F`;
        ErrorMsg.textContent="";
    }
    else if(FahtoCel.checked){
        temprature=(temprature-32)*5/9;
        OutputTxt.textContent=`${temprature}°C`;
        disTxt.textContent=`${inputTemparature}°F is ${temprature}°C`;
        ErrorMsg.textContent="";

    }
    else if(CeltoKel.checked){
        temprature=temprature+273.15;
        OutputTxt.textContent=`${temprature}K`;
        disTxt.textContent=`${inputTemparature}°C is ${temprature}K`;
        ErrorMsg.textContent="";
    }
    else if(KeltoCel.checked){
        temprature=temprature-273.15;
        OutputTxt.textContent=`${temprature}°C`;
        disTxt.textContent=`${inputTemparature}K is ${temprature}°C`;
        ErrorMsg.textContent="";
    }
    else if(FahtoKel.checked){
        temprature=(temprature-32)*5/9 +273.15;
        OutputTxt.textContent=`${temprature}K`;
        disTxt.textContent=`${inputTemparature}°F is ${temprature}K`;
        ErrorMsg.textContent="";
    }
    else if(KeltoFah.checked){
        temprature=(temprature-273.15)*9/5 +32;
        OutputTxt.textContent=`${temprature}°F`;
        disTxt.textContent=`${inputTemparature}K is ${temprature}°F`;
        ErrorMsg.textContent="";
    }
    else{
ErrorMsg.textContent="Select Temperature";
OutputTxt.textContent="";
disTxt.textContent="";
    }
}