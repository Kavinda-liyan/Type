console.log("hello world !");
console.log('Hello this is single quote ' );
console.log(`Hello this is backtick`);

let header1=document.getElementById("header1");
header1.textContent="My self";
//I used inizilized variable assigned to header 1 id 


//directly assigned 

let x=100;
let lename='kavinda';
let isMarried=true;

console.log(`${typeof x}   ${typeof lename}`);
document.getElementById("para1").textContent=`${typeof x}   ${typeof lename}`;
console.log(`${typeof true} and ${isMarried}`);

//Arithmetic Opertaions
/*Oparators

+ - / *

*/

let studentNumber=3;
console.log(`Student Number = ${studentNumber}`);
console.log(`student Number + 1 = ${studentNumber + 1}`);
console.log(`student Number - 2 = ${studentNumber - 2}`);
console.log(`student Number * 10 = ${studentNumber*10}`);
console.log(`student Number / 2 = ${studentNumber/2}`);
console.log(`student Number +=5 = ${studentNumber+=5}`);
console.log(`student Number -=5 = ${studentNumber=-5}`);

//windows Prompt

let userAge;

// userAge=window.prompt("What is your age");
// console.log(userAge);

//user input proper way

//first inizilize the output text container

let UserOutputtxt;

//add event lisiner with function to button

document.getElementById("submitname").onclick= function(){
    UserOutputtxt=document.getElementById('userNameid').value;

    console.log(UserOutputtxt)

    document.getElementById("okText").textContent=`Congratulation ${UserOutputtxt} I don't know english`;
}

const pi=22/7;

document.getElementById("circle").onclick=function(){
    let radius=document.getElementById("radius").value;
    radius=Number(radius);

    let area;
    area=pi*(radius*radius);

    document.getElementById("area").textContent=`area of the ${radius} cm radius circle is ${area}`;
}

document.getElementById("squarebtn").onclick=function(){
    let width=document.getElementById("squarearea").value;
    width=Number(width);

    let area;
    area=width*width;
    document.getElementById("areasquare").textContent=area;
}

// Math basic integer activity

document.getElementById("roundbtn").onclick=function(){
    let inputTxt=document.getElementById("round").value;
    inputTxt=Number(inputTxt);
    let Answer=Math.round(inputTxt);
    console.log(Answer);
    document.getElementById("roundlable").textContent=`Rounded to Nearest Integer. the Answer is " ${Answer}"`;
}

document.getElementById("celibtn").onclick=function(){
    let inputTxt=document.getElementById("celi").value;
    inputTxt=Number(inputTxt);
    let Answer=Math.ceil(inputTxt);
    console.log(Answer);
    document.getElementById("celilable").textContent=`Rounded UP to it's nearest Integer. the Answer is "${Answer}"`;
}

document.getElementById("floorbtn").onclick=function(){
    let inputTxt=document.getElementById("floor").value;
    inputTxt=Number(inputTxt);
    let Answer=Math.floor(inputTxt);
    document.getElementById("floorlable").textContent=`Rounded DOWN to it's nearest Integer. the Answer is "${Answer}"`;
}

document.getElementById("truncbtn").onclick=function(){
    let inputTxt=document.getElementById("trunc").value;
    inputTxt=Number(inputTxt);
    let Answer=Math.trunc(inputTxt);
    document.getElementById("trunctable").textContent=`Remove decimal part . the Answer is "${Answer}"`;
}

// Math Pow,Sqrt and log activity

document.getElementById("powCal").onclick=function(){

   
    let pow1=document.getElementById("pow1").value;
    let pow2=document.getElementById("pow2").value;
    if (pow1=="" || pow2==""){
        document.getElementById("outputpow").textContent=`one or both input fields are empty!`;
      
    }
    else{
        pow1=Number(pow1);
        pow2=Number(pow2);
    
        let Answer=Math.pow(pow1,pow2);
        document.getElementById("outputpow").textContent=`${pow1} power of ${pow2} is "${Answer}"`;
    
        document.getElementById("pw1").textContent=pow1;
        document.getElementById("pw2").textContent=pow2;
    }
    

}

document.getElementById("sqrtbtn").onclick=function(){
    let sqrtTxt=document.getElementById("sqrt").value;
    sqrtTxt=Number(sqrtTxt);

    let Answer=Math.sqrt(sqrtTxt);
    document.getElementById("outputsqrt").textContent=`√${sqrtTxt} Answer  is "${Answer}"`
}


document.getElementById("randombtn").onclick=function(){
    let Answer=Math.random();
console.log(Answer);
    Answer=Answer*10;
    console.log(Answer);
    Answer=Math.round(Answer);

    document.getElementById("randomOutput").textContent=Answer;
}

document.getElementById("TrandomBtn").onclick=function(){
    let Answer=Math.random();
console.log(Answer);
    Answer=Answer*100;
    Answer=Math.round(Answer);
    document.getElementById("terneryRandom").textContent=Answer;

    let binoryornon;
    binoryornon = ( Answer%2)==0 ? document.getElementById("ifRandom").textContent="Even Number!":document.getElementById("ifRandom").textContent="Odd Number!";
}

document.getElementById("ResultBtn").onclick=function(){
    let result=document.getElementById("result").value;
    result=Number(result);

    switch(true){
        case (result>=90):
            console.log(result);
            document.getElementById("ResultOutput").textContent=`Your Result is ${result} and Grade is "A"`;
            break;

            case (result>=65):
                console.log(result);
                document.getElementById("ResultOutput").textContent=`Your Result is ${result} and Grade is "B"`;
                break;

                case (result>=50):
                    console.log(result);
                    document.getElementById("ResultOutput").textContent=`Your Result is ${result} and Grade is "C"`;
                    break;


                    case (result>=35):
                    console.log(result);
                    document.getElementById("ResultOutput").textContent=`Your Result is ${result} and Grade is "S"`;
                    break;

                    default:
                        document.getElementById("ResultOutput").textContent=`Your Result is ${result} and Grade is "F"`;
    }
}