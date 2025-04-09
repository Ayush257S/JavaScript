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