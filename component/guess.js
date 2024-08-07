
document.getElementById("guessBtn").onclick=function(){
    let Guessinput=document.getElementById("guessinput").value;
    let GuessinputNumber=Number(Guessinput);
    let WinnerBox=document.getElementById("winner");
    let buttonName=document.getElementById("buttonName");
    let WinnerText=document.getElementById("WinnerText");
    let TryAgain=document.getElementById("TryAgain");
    let cordeRun=true;
    let Attempt=0;
    let GuessNumber;
    let GuessOutput=document.getElementById("GuessOutput");
    let LimitOutput=document.getElementById("limitationError");
let ifTrueOutput=document.getElementById("GuessOutputTrue");
    while(cordeRun){
        
       
GuessNumber= Math.ceil(Math.random()*10);

if(Guessinput>=1 && Guessinput<=10){
    ++Attempt;
    LimitOutput.textContent="";
    if(GuessNumber===GuessinputNumber){
    
        GuessOutput.textContent=GuessNumber;
        ifTrueOutput.textContent=GuessNumber;
        buttonName.textContent=`Play`;
        WinnerText.textContent=`Congratulations! You are the Winner`;
        TryAgain.textContent="";
        console.log(Attempt);
            
            cordeRun=false;
            
        }
        else{
            
            GuessOutput.textContent=GuessNumber;

            buttonName.textContent=`Try Again`;
            
            WinnerText.textContent="";
            TryAgain.textContent=`OOPSs.. Bad Luck Try Again`;
            cordeRun=false;
        
        }

            }
            else{
                console.log("hello");
                LimitOutput.textContent=`${GuessinputNumber} is not Between the 1 to 10`;
                cordeRun=false;
            }
            
            document.getElementById("guessinput").value="";
}



}


