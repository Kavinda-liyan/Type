

//class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor

/*
class ClassName{


 constructor(parameter1,parameter..3){
 this.parameter1=parameter1;
 this.parameter2=parameter2;
 ...
 }

displayValue(){
console.log(parameter1);
}
}

assigned objects

const Product1=new ClassName("",400);
*/


class BrandNewCars{
    constructor(model,made,year,country,topspeed,price){
        this.model=model;
        this.made=made;
        this.year=year;
        this.country=country;
        this.topspeed=topspeed;
        this.price=price
    }

    DisplayCardetails(){
        console.log(`model:${this.model}\nmade:${this.made}\nyear:${this.year}\nMade in:${this.country}\ntop speed:${this.topspeed}KMPH`);
    }

    NetTotal(Vat){
        return this.price+ this.price*Vat;
        
    }
}
const Vat=0.18;


const Car01=new BrandNewCars("Raptor F-150","Ford",2018,"America",220,8500000);
const NetTotal01=Car01.NetTotal(Vat);

Car01.DisplayCardetails();
console.log(`Total Price(with Tax) : ${NetTotal01.toFixed(2)}`);

class FruitItems{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }

    DisplayFruits(){
        const total=this.price*this.quantity;
        console.log(`${this.name} is Rs.${this.price.toFixed(2)} per 1Kg`);
        console.log(`You Bought a ${this.quantity}Kilos . Total is ${total} `);
    }
}

const fruit01=new FruitItems("Strawberry",4200,0.5);
fruit01.DisplayFruits();

const fruit02=new FruitItems("Mangus",500,2.5);
fruit02.DisplayFruits();