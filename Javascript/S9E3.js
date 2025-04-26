// Promise Chaining or promise chain

function getData(DataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",DataID);
            resolve("Success");
        },2000);
    });
};


// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// });

//More better way to write
getData(1).then((res)=>{//first getData 1 is resolved
    return getData(2);//then data 2 is resolved
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    console.log(res);
});

//callback hell << promise chain << async await
//Async await 
//Async function always return a promise

async function hello() {
    console.log("Hello");
}; 

//Await pauses the execution of its surroundings async fuction until the promise is settled
