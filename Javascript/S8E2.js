//Inheritance in js
// Example one
class Parent{
    hello(){
        console.log("hello")
    }
}

class Child extends Parent{}

let obj = new Child();


//Example two 
class Person{
    constructor(){
        console.log("Enter parent constructor");
        this.species="homo sapiens";
    }
    eat(){
        console.log("Eat");
    }

    sleep(){
        console.log("Sleep");
    }

    work(){
        console.log("Do nothing");
    }
}
