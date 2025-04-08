//Error hadling
let a=5;
let b=10;
console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
console.log("a/b",a/b);
console.log("a%b",a%b);

try{//Try is used for find the error in the code 
    console.log("a+b",a+c);
}catch(err){
    console.log(err);
}

console.log("a**b",a**b);
console.log("a&b",a&b);
console.log("a|b",a|b);
console.log("a^b",a^b);

