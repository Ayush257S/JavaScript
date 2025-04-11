//Synchronous
//Synchronous code is executed in the order it is written
console.log("one");
console.log("two");
console.log("three");

//Asynchronous
//Asynchronous code is executed in the background, allowing other code to run while waiting for a task to complete

setTimeout(()=>{
    console.log("hello");
},10200); // Asynchronous code, will run after 5 seconds

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
//Nesting means putting one function inside another function or loops etc.

function getData(DataID,getNextData){
    setTimeout(()=>{
        console.log("Data",DataID);
        if(getNextData){
            getNextData();
        }
    },2000);
}

//This is a callback hell example
//It is difficult to read and maintain
//Nested callbacks stackd up and make pyramid structure
//This forms priamid of doom or callback hell
getData(1,()=>{
    console.log("getting data 2...");
    getData(2,()=>{
        console.log("getting data 3...");
        getData(3,()=>{
            console.log("getting data 4...");
            getData(4,()=>{
                console.log("getting data 5...");
                getData(5);
            });
        });
    });
});


