//Strings
let str="Tony Stark";//both are correct way of writting a string
let str2='Tony Stark';//one single and one double is wrong 
let str5="hellololo";

//All string have some inbuilt properties and some functions 
//these inbuilt functions are called methods 
// sting also function as object as it carry key(values)

// str.length can be used to print the String length on console(length is a property which only gives some value)

console.log(str[7]);

// Template Literals
let sentence=`This is a Template Literals`;//are used in objects represted by `` symbols
console.log(sentence);
console.log(typeof sentence);

let object={
    item:"Pen",
    price:10,
}

let output=`The cost of ${object.item} is ${object.price} rupees.`;//Template Literals
console.log(output);//simple way to print objects and keys

console.log("The cost of",object.item,"is",object.price,"rupees.");

let sent=`This is a Template Literals ${1+2+3+1}`;
console.log(sent);

// Escape characters
console.log("Tony\nStark");// \n is use print in the next line 
console.log("Tony\tStark");// \t is use to give tab space

str3="Iron\nman";// \ and n are counted as single character
console.log(str3.length);

//String Methods 
// Methods are those which can perform some kind of work 
str4=" Iron Man ";//is don't change the value of original string it create a new string
console.log(str4.toUpperCase());//str4.toUpperCase() is used to convert string in upper case
console.log(str4.toLowerCase());//str4.toUpperCase() is used to convert strond in lower case
console.log(str4.trim());//removes whitespaces form start and end
console.log(str4.slice(0,7));//return part of string
console.log(str4.slice(3));
console.log(str.concat(str4));//adds or join two strings
console.log(str+str4);//There are multiple way of joining two strings
console.log(str5.replace("lo","p"));//replace a character with other value 
console.log(str5.replaceAll("lo","p"));//replace all matching values
console.log(str4.charAt(7));//give character of a given index
//String are inmutable can't be changed
