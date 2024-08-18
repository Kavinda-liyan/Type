

//Constructor=special method for defining the properties and methods of objects.

function Car(make,model,year,color,country){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.country=country,

    this.drive=function(topSpeed){console.log(`Top speed of this ${this.model} is ${topSpeed}MPH`)}


    //assigning arguments using this method
}

// crate object for car1
const cars1=new Car("Ford","Raptor F-150",2020,"Blue","America");

cars1.drive(220);
//create object for car2
const cars2=new Car("Nissan","Skyline R34",1999,"Metalic Gray","Japan");

//displaying 

console.log(`This ${cars1.color} color ${cars1.model} is made by ${cars1.make} in ${cars1.year}.${cars1.make} is Automotive Company in ${cars1.country} `);
console.log(`This ${cars2.color} color ${cars2.model} is made by ${cars2.make} in ${cars2.year}.${cars2.make} is Automotive Company in ${cars2.country} `);