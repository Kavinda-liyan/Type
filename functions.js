//function = A section of reuseble code.

//declaring function

/*
function declarationName(){
}*/

function happyBirthday(){
    console.log('Happy Birth day to you');
    console.log('Happy Birth day to you');
    console.log('Happy Birth Dear Kavinda');
    console.log('Happy Birth day to you');
}

//You have to call the function using function name to get output from function

happyBirthday();

//Parameters and arguments

/* The variables that are defined while declaring function called "Parameters"
The Values that are declared when called the function known as arguments*/

/*
function functionDeclaration(Parameters){
statements;
}

functionDeclaration(Arguments);

*/

function mySelf(name,age,city,school){
    console.log(`Hello!, i'm ${name} . i'm from ${city}.
        i'm ${age} years old and i went to ${school} in ${city}.`);
}

mySelf("Kavinda Liyanaarchchi",25,"Negombo","St.Peters Collage");
mySelf("Yasiru Heshan" ,26,"Kudaligama","Ananda Collage");


//Return Statement

function add(x,y){
    let result=x+y;
    return result;
}

let answer=add(2,4);
console.log(answer);