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

