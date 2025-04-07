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
    constructor(name){
        console.log("Enter parent constructor");
        this.species="homo sapiens";
        this.name=name;
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
    constructor(branch, name){
        console.log("Enter child constructor");
        //Constructor can be in parent class by passing same method in super
        super(name);//It is used to invoke parent class constructor
        this.branch= branch;
        console.log("Exit child constructor");
    }
    work(){//if child and parent have same functions the child will get's more priority 
        super.eat();//Is used to directly accecing the parents method directly
        console.log("solve problems");//this is also know as method overridding
    }
};

let personobj= new engineer();
let p1= new Person();

// super keyword
//Is used to call a constructor of its parent class.
//Access the parent class properties and methods.

let engobj = new engineer("Computer Science", "JavaScript");//super is used in a constructor
console.log(engobj.name);//Accessing the properties of child class
console.log(engobj.species);//Accessing the properties of parent class
console.log(engobj.branch);//Accessing the properties of child class
console.log(engobj.eat());//Accessing the method of parent classf