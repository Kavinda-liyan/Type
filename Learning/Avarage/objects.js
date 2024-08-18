
// Object=a collection of related properties and /or methods can represent real world objects (people,products etc)
/*object delaration= {key:value,
    key2:value2,
    function()
}*/

const car1={name:"WagonR",
    brand:"Suzuki",
    made:"Japan",
    category:"kei",
    YOM:2018,
    engine:"998cc",
    topspeed:"150kmph",
    bootspace:()=>{console.log("180 Liter")}
}

const car2={name:"Alto 800",
    brand:"Maruti Suzuki",
    made:"Indian",
    category:"MidRange",
    YOM:2006,
    engine:"769cc",
    topspeed:"120kmph",
    bootspace:()=>{console.log("196 Liter")}
}

console.log(
    `${car1.name} is ${car1.category} car ,it was made in ${car1.made}.\nthis car ${car1.YOM} year of made. this car have ${car1.engine} capacity Engine and ${car1.topspeed}.`
)

console.log(
    `${car2.name} is ${car2.category} car ,it was made in ${car2.made}.\nthis car ${car2.YOM} year of made. this car have ${car2.engine} capacity Engine and ${car2.topspeed}.`
)

const person={
    name:"kavinda",
    age:25,
    sayHello:function(){
        console.log(`Hi, I'm ${this.name} . I'm ${this.age} years old`);
    }
}

person.sayHello();