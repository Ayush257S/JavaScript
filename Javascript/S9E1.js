//Synchronous
//Synchronous code is executed in the order it is written
console.log("one");
console.log("two");
console.log("three");

//Asynchronous
//Asynchronous code is executed in the background, allowing other code to run while waiting for a task to complete

setTimeout(()=>{
    console.log("hello");
},5000); // Asynchronous code, will run after 5 seconds

console.log("four");//This will run before the setTimeout function is executed
console.log("five");//It will not wait for the setTimeout function to finish before executing this line of code

//Callbacks
//Callback funtion is a function passed as an argument to another function, which is then invoked inside the outer function
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b, sumCallback){
    sumCallback(a,b); 
}

calculator(2,5, (a,b)=>{
    console.log(a+b);
});

//Callback hell
//Callback hell is a situation where multiple nested callbacks make the code difficult to read and maintain
//Nesting 

