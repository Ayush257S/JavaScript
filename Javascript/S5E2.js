//ForEach loop in Arrays
//forEach is used when we want work or perform certain task on each element of the array
let arr=[1,2,3,4,5];

arr.forEach( function printvalue(val){//val will pass forEach and will call value at each indx
    console.log(val);
})

//ForEach in arrow funtion
let arr2=[1,2,3,4,5,6,7];
arr2.forEach((val)=>{
    console.log(val);
})

let arr3=["delhi","chennai","vizag"];
arr3.forEach((val,indx,arr)=>{//we can call array itself with indx value of each element
    console.log(val.toUpperCase(),indx,arr);//we can also call the arr itself 
    // console.log(arr3.length); 
})

//Higher order functions/methods->are the who take other funtions as parameter or return a funtion
