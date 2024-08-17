

// arrow functions= 
// expression = (parameters)=>some Codes;

const printHello=(name,age)=>{
console.log(`Hello I'm ${name} and I'm ${age} years old!`);
}

printHello("kavinda", 25);
printHello("Devini",24);

setTimeout((msg)=>{console.log("kavinda");},3000);



const Numb=[1,5,7,8];

const cubicNumbers=Numb.map((element)=>Math.pow(element,3));
console.log(`${Numb} of Cubic Number array is ${cubicNumbers}`);