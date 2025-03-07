console.log("hello");
// console.log is used to print,even work with single coat
console.log("I Love JS");
alert("Trying");// use to show a alert msg on the site
age=25;
x=null;
y=undefined;
name="Tony Stark";
console.log("name");
// "" is not used to print the value stored in variable 
console.log(name);
// boolean type variable
isfollow=true;
const PI=3.14;
// undefinded is shown if no value is given to variable accept const
// const a;
let b;
console.log(b);
// {} also know as blocks 

// data types in JavaScripts 1.(Primitive) and 2.(Non-Primitive)
// 7 Primitive are number,string,boolean,undefined,null,bigint,symbol
// typeof age on console for knowing the datatype
age=27; // nuber data type
name="Tony Stark";// String data type 
isfollow=false;// boolean data type 
y=undefined;// undefined data type 
x=null;// null data type
let a=BigInt("257");// bingInt data type 
f=Symbol("Hello");// Symbol data type

// Non-primitive
// 1.) Objects - collections of values are known to be objects
// a.) Arrays b.) Function
const student={
    Fullname: "Rahul",// "" is only used in strings in an objects
    Age: 20,
    Cgpa: 7.8,
    ispass: true,
};
console.log(student["Cgpa"]);
console.log(student.Cgpa); // both are correct method to print the value

student["Age"] = student["Age"] + 5;//used to update the existed value
console.log(student["Age"]);

student["newname"]="Rahul Sharma";//or add new value in an existing object 
console.log(student["newname"]);

// let can be updated but const can't be updated
// but in a cont object can be updated 