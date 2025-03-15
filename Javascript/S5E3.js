// Arrays methods
// Map method
// Map method creates a new array with the results of calling a provided function on every element in the calling array.

let nums = [1, 2, 3, 4, 5];//forEach is used when we some noramal calculations and we dont want to return anything
let newArr=nums.map((val)=>{//map is used when we want to return something and store it in a new array
    console.log(val);
    return val*val;
});
console.log(newArr);

//Filter method
//checks the condition at each element in an array and filters out the elements based on the condition eg. even numbers, odd numbers etc.
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let evenarr=nums1.filter((val)=>{
    return val%2===0;
})
console.log(evenarr);

let oddarr=nums1.filter((val)=>{
    return val%2!==0;
})
console.log(oddarr);

//Reduce method
//Performs a operations and reduce the array to a single value.It returns the array to a single value.eg calculating sum,average etc.

const Array=[1,2,3,4,5,6,7];

const output=Array.reduce((res,curr)=>{//res is the accumulator(result) and curr is the current(current) value
    return res+curr;
    // return res+curr/Array.length;  average
//1+2=3,1 is the accumulator and 2 is the current value
//3+3=6,3 is the accumulator and 3 is the current value
//6+4=10,6 is the accumulator and 4 is the current value
//10+5=15,10 is the accumulator and 5 is the current value
//15+6=21,15 is the accumulator and 6 is the current value
//21+7=28,21 is the accumulator and 7 is the current value
})
console.log(Array);
console.log(output);

//biggest number in an array
const Array1=[1,2,3,4,5,6,7];
const output1=Array1.reduce((res,curr)=>{
    return res>curr?res:curr;
})
console.log(output1);