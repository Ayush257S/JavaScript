//Class and Objescts

//Prototype
//JavaScript object is an entity having state and behavior(properties and method).
const students={
    fullname:"Ayush",
    marks:95.7,
    printmarks: function(){ //can also be written as printmarks(){
        console.log("marks =",this.marks);//here this means student.marks
    },
};
//JavaScript objects have a special property called prototype(prototype itself is an object)


const empolyee={
    calcTax(){
        console.log("Tax rate is 10%");
    }
};
empolyee.calcTax();

const KaranArjun ={
    salary:50000,
    calcTax(){
        console.log("Tax rate is 20%");//this  gets more priority then prototype
    }
};

// when Object and prototype same method then Object method is used

//proto is used to set prototype
//prototype is refrence to anobject or it empty
KaranArjun.__proto__= empolyee;
//The the fuction which we want to use of other object is declared as other's prototype


//Classes
//Class is a program-code template for creating objects.
//Those objects will have some state(variables) & some behaviour(functions) inside it.

//Class is like a blueprint for objects
class ToyotaCar{
    Speed(){
        console.log("185Km/h");
    }
    Engine(){
        console.log("V8");
    }

    setBrand(brand){
        this.carCompany=brand;//what ever class this setBrand is called (this object is called)
    }
};

let BMW=new ToyotaCar();
let Lexus=new ToyotaCar();

BMW.Speed();//all the properties and method of (ToyotaCar)class
Lexus.setBrand("Lexus");
Lexus.Engine();//will store in (Lexus & BMW)object. 