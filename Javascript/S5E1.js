// Functions in JavaScript*(iportant topic in java script)
// We always use parentheses symbol "()" or bracakets
// Fuction defination
function myfunction() {
    console.log("Welcome");
    console.log("We are learing JS");
}
// Call a function 
myfunction();//Function can be call many as needed

function jifunction(msg){//parameter->input (msg) is the paramerter in this
    console.log(msg);
}
jifunction("learing JS");//the value pass is known as argument here "learing JS" 
//Here "learing JS" is the argument 

function jifunctions(ms,n){//using new variable for a another argument
    console.log(ms+n);
}
jifunctions("learing JS", 100);//multiple argument can be pass

//Function -> 2 number sum
function sum(a,b) {//parameter work as local variable
    console.log(a+b);//variable are defined only for the block
}
sum(5,2);
