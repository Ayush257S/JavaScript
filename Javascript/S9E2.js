//Promises
//A problem is resolved or rejected in a promise
//Promises is an object that represents the eventual completion of task

let promise= new Promise((resolve,reject)=>{
    console.log("JavaScript");
    // resolve(123);
    // reject(456);
});

function getData(DataID, getNextData){
    return new Promise((resolve,reject)=>{//promises are called here 
        setTimeout(()=>{
            console.log("data",DataID);
            resolve("Succes"); 
            if(getNextData){
                getNextData();
            }
        },5000);//promise will be in pending state for 5sec 
    });
};

let result=getData(123);

// A JavaScript Promise object can be in one of three states:
//Pending: initial state, neither fulfilled nor rejected.(undefined)
//Fulfilled: meaning that the operation completed successfully.(resolved),result
//Rejected: meaning that the operation failed.(rejected),error

const getPromise = ()=>{
    return new Promise ((resolve,reject)=>{
        console.log("Promise is created");
        // reject("Error Occured");
        resolve("Success");
    });
};

// Then method is used to handle the success of the promise
let promise1= getPromise();
promise1.then((res)=>{
    console.log("Promise Fullfiled",res);
});

// Catch method is used to handle the error of the promise
promise1.catch((err)=>{
    console.log("rejected",err);
});


// Promsie chaining

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Data 5"); 
            resolve("Successfully resolved");
        }, 3000);
    });
}

console.log("fetching data 5");
let p1=asyncFunc();
p1.then((res)=>{
    console.log(res);
}); 

// Data chaining
function asyncFunc2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data 2");
            resolve("successfully resolve");
        },10000);
    })
}

function asyncFunc3() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data 3");
            resolve("successfully resolve");
        },10000);
    })
}

console.log("fetching data 2");
let p2=asyncFunc2();
p2.then((res)=>{//when p2 is resoslved then only p3 will fetch and will be resolve
    console.log("fetching data 3");
    let p3=asyncFunc3();
    p3.then((res)=>{}); 
}); 
