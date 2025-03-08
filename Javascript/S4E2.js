// Arrays Methods
// There two method one which change arrays and other where new arrays is returned
// Arrays can be changed but strings can't be changed

// Change in original array
let fruits=["kiwi","mango","banana","apple","watermelon"];
let marks=[97,88,77,72,100,45,33];
console.log(fruits);
fruits.push("orange","pineapple");// here new items are push(added) in an array
console.log(fruits);// items are added in the last
let deleteditem=fruits.pop();// here items are pop(removed) from the array
console.log(fruits);//delete from and return
console.log("deleted Item is",deleteditem);
console.log(fruits.toString());//Use to convert array into string,doesn't change the original array 
console.log(marks.toString());// create a new string and return
console.log(fruits.concat(marks));//Join multiple arrays and return,no change in original array
console.log(fruits+marks);//Multiple way on concatenation
fruits.unshift("strawberry","pineapple");//Adds item in the start,change in oridinal array
console.log(fruits);
fruits.shift();//Revome items from start,change in origianl array
console.log(fruits);
console.log(fruits.slice(1,6));//return a piece of array or portion of array
console.log(fruits.slice(1));//this means from one to end,ending index is not included
console.log(fruits.splice(1,2,"grapes","guava"));//change original array (add,remove,replace)
console.log(fruits);//can be use to add,replace,remove or change in array