
console.log("forEach\n-method used to iterate over the elements of an array and apply a specific function(callback) to each element \narray.forEach(callback)\n");


let numbers=[1,2,3,4,5];

numbers.forEach(cube);
numbers.forEach(random);
numbers.forEach(display);

function display(element){
    console.log(element);
}

function cube(element,index,array){
    array[index]=Math.pow(element,2);
}
function random(element,index,array){
    array[index]=Math.floor(Math.random()*element*10);
}



let Fruits=["mango","banana","apple","guava"];
let upper=true;
Fruits.forEach(upper?toUpperCase:toLowerCase);
Fruits.forEach(DisplayFruits);

function DisplayFruits(element){
    console.log(element);
}
function toUpperCase(element,index,array){
array[index]=element.toUpperCase();
}
function toLowerCase(element,index,array){
    array[index]=element.toLowerCase();
    }

    console.log("\n map()\naccept a callback and applies that function to each element of array and return new array");

    const NumberArr=[1,2,3,4,5,6,7,8];

    function squeareArr(element){
        return Math.pow(element,2);
    }

    const SquareArray=NumberArr.map(squeareArr);
    console.log(SquareArray);

    console.log("\nfilter()\ncreate new array by filtering out elements\n");
    const countNumbers=[1,2,3,4,5,6,7,8,9,10];

    function ifEvan(element){
        return element%2===0;
    }
    function ifOdd(element){
        return element%2!==0;
    }
    
    const evanNumbers=countNumbers.filter(ifEvan);
    const oddNumbers=countNumbers.filter(ifOdd);

    console.log(evanNumbers);
    console.log(oddNumbers);

    console.log("\nreduce()\nReduce the elements of array in to single value\n");

    const price=[200,500,100,1000,650,120];
    function avg( accumulator,element){
        return Math.max(accumulator,element);
    }
    const avarage=price.reduce(avg);
    console.log(avarage);