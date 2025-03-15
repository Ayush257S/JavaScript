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