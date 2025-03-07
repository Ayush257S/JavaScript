/*This is a 
Multi Line comment*/
console.log("Hello World");

// Operators in JavaScript

// Arithmetic Operators

// + , - , * , /
// 1.) ++ is known as Increment
// 2.) -- is known as Decrement
// 3.) ** is known as Exponentional 
// 4.) % is known as Modulus (also known as remainder)

let a=5;
let b=2;
let c=a+b;

console.log("a+b=",a+b);// Multiple way of doing the oprertion 
console.log("a+b=",c);
console.log(a+b);

console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);//remainder if 2 is divided by 5 which is 1
console.log("a**b=",a**b);//5^2 which is 5*5 = 25

// Unary Operators
// 1.) ++ is known as Increment
// 2.) -- is known as Decrement

a++;//a=a+1; is also a correct way of writing
console.log(a);

b--;
console.log(b);

// post increment and pre increment
// post increment,a++ is (post increment)
// post decrement,b-- is (post decrement)

let d=6;
let e=6;

console.log("d++=",d++);//here the value is printed first and then later is incremented
console.log("e--",e--);//value is printed then it is decremented
// new value of d and e will be 7 and 5

console.log(d,e);

// pre increment,++a is (pre increment)
// pre decrement,--b is (pre decrement)

console.log("++d",++d);//here value is incremented first then it is printed
console.log("--e",--e);//here value is decremented first then it is printed
// new value of d and e will be 8 and 4

// Assignment Operators
// = , += , -= , *= , %= , **= 

A=5;
B=7;

A += 2;
console.log("A+=2",A);//a+=2,where += is an assignment operator 

B -= 2;
console.log("B-=2",B);//-=,used to sub the value of "B" by 2

A *= 2;
console.log("A-=",A);

B %= 2;
console.log("B%=",B);

A **= 2;
console.log("A**=",A);//A is 14 as a new value was assign to A

//Comparison Operators
// 1.) ==    2.) !=    3.) ===    4.) !==
// 5.) >     6.) >=    7.) <      8.) <=

console.log("A==B",A==B);//use to compare and tell whether a=b
console.log("A!=B",A!=B);//use to tell a not equale to b
console.log("A===B",A===B);//strict version of = it also check the data type
console.log("A!==B",A!==B);//strict version of != also check the data type 
console.log("A>B",A>B);//check whether a is greater than b 
console.log("A>=B",A>=B);//check whether a is greater or equal to b
console.log("A<B",A<B);//check whether a is smaller than b
console.log("A<=B",A<=B);//check whether a is smaller or equal to b

//Logical Operators
//1.) & (Logical AND Operator)
//2.) || (Logical OR Operator)
//3.) ! (Logical NOT Operator)

let cond1=a==b;
let cond2=A==B;
console.log("cond1 && cond2",cond1 && cond2);//return True only if both are true 
console.log("cond1 || cond2",cond1 || cond2);//return false only if both are false
console.log("!(cond1)",!(cond1));//if true -> false ,if false -> true