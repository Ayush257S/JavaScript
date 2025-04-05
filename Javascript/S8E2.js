//Inheritance in js
// Example one
class Parent{
    hello(){
        console.log("hello")
    }
};

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
};

class engineer extends Person{//here the engineer(child class) inhert the properties of Person(parent)
    constructor(branch){
        console.log("Enter child constructor");
        super();//It is used to invoke parent class constructor
        this.branch= branch;
        console.log("Exit child constructor");
    }
    work(){//if child and parent have same functions the child will get's more priority
        console.log("solve problems");//this is also know as method overridding
    }
}

let personobj= new engineer();
let p1= new Person();



