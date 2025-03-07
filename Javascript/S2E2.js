//Conditional Statements
//IF statements
let age=25;
let mode="dark";
let color;

if(age>=18)
{
    console.log("You Can Vote");
}
if (age<=18)
{
    console.log("You can't vote");
}

if(mode==="dark")
{
    color="black";
}
if(mode==="light")
{
    color="white";
}
console.log(color);

//if-else
if(mode==="light")
{
    color="white";
}else{
    color="black";
}
console.log(color);

let a=25;
if(a%2===0)
{
    console.log(a,"is even");
}else{
    console.log(a,"is odd");
}

//else-if
if(age<=18){
    console.log("junior");
}else if(age>=60){
    console.log("senior");
}else {
    console.log("middle");
}

//Ternary Operators (simpler if else)
let result=age>=18?"adult":"not adult";
console.log(result);
//both are correct way to print the value
age>=18 ? console.log("adult") : console.log("not adult");