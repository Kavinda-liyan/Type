//Array= a variable like structure that can hold more than one value


let fruits=["Banana","Apple","Mango"];

console.log(fruits);//will print whole array

//to access values of array we use index of array

console.log(fruits[0]);
console.log(fruits[1]);

//to assign values to array 

fruits[3]="Duriyan";
console.log(fruits);

//Array Methods

//Push=Add elements to the Array(to End)
let cars=["WagonR","Alto"];

cars.push("Celero","Preius");
console.log(cars);

//pop() remove element from end of the array
cars.pop();
console.log(cars);

//Unshift=Add elements to the Array(to Start)

cars.unshift("Vezel","CH-R");
console.log(cars);

//Shift =Remove Element from front of Array 

cars.shift();
console.log(cars);

//Length
let Berries=["Strawberry","blueberry","Malberry","Cranberry"];
console.log(`${Berries} and Length is ${Berries.length}`);

//Looping Array

//Print left to right
let Countries=["Sri Lanka","India","Pakisthan","Afganisthan","Bhuthan","Bangaladesh"];
for(let i=0;i<Countries.length;i++){
console.log(Countries[i]);
}
//print end to right
for(let i=Countries.length;i>=0;i--){
    console.log(Countries[i]);
}

//Array loop

let carBrands=["Honda","Lexus","Toyota","Suzuki","Ford"];

for(let brand of carBrands){
    console.log(brand);
}

//sort=Used to sort an array alphabetically

let names=["Achala","kavinda","binura","chamod"];
console.log(names);
names.sort();
console.log(names);


for(let name of names){
    console.log(name);
}
//sort and reverse = combining sort after reverse we can get reverse order

let numbers=["Alpha","gamma","bibba"];
numbers.sort();
console.log(numbers);
numbers.sort().reverse();
console.log(numbers);

//... Spread Operator=array or string into separate elements

let animals=["dog","cat","duck"];
console.log(animals);
console.log(...animals);

let evans=[2,4,6,8,10];
let maximum=Math.max(evans);
console.log(maximum);

maximum=Math.max(...evans);
console.log(maximum);
//saparate string in to elements and put in to array

let myName="Kavinda";
console.log(...myName);
let NameLetters=[...myName];
console.log(NameLetters);

//Combined two or more arrays

let newfruits=["apple","mango","rambutan","banana"];
let newVeggies=["cucumber","Pumpking","Eggplant","Baby jackfruit"];

let allFoodies=[...newVeggies,...newfruits];
console.log(allFoodies);
