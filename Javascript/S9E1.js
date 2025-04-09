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
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b, sumCallback){
    sumCallback(a+b);
}

calculator(2,5, (a,b)=>{
    console.log(a+b);
});

