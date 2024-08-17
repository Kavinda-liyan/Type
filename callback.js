/*callback=a function that is passed as and argument to another function

used to handle asynchronous oparations
1 reading files
2 network requests
3 Interacting with database

"When You are done! call this next"*/

function hello(){
    console.log("Hello!");
}

function bye(){
    console.log("Bye!");

}

//function calling president is Matter
console.log("");
hello();
bye();
console.log("");

bye();
hello();

//Let see when the delay happened 


function greetings(greeting){
    setTimeout(function (){
        console.log(greeting);

    },3000);
   
}

function curseWord(curse){
    console.log(curse);
}

greetings("Greetings My lord!");
curseWord("Mahinda Uba mariyan");
//curseWord function called before the Greeting because of Delay

//lets callback this

console.log("");

//first call the first needed function
goodmorning(goodnight);
function goodmorning(callback){
    console.log("Good Morning!");

callback();
}

function goodnight(){
    console.log("Good Night!");
}

//functionYouneedtocallfirst(callAfterThis);

//functionYouneedtocallfirst(callback){
//console.log("");
//callback();
// }

sum(DisplayRe,1,3);

function sum(callback,x,y){
    let result=x+y;
    
    callback(result);
}

function DisplayRe(result){
    console.log(result);
}


//forEach

