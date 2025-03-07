//Loops
//For loop

for (let i = 1; i <=5; i++) {
    console.log("ayush");
}

let sum=0;
let n=100;

// sum of number from 1 to 5
for(let i=1; i<=5; i++){
    sum=sum+i;
}
console.log("sum is :",sum);

// sum of 1 to n numbers 
for(let i=1; i<=n; i++){//value store in sum is 15 from above 
    sum=sum+i;
}
console.log(sum);

//printing the value of i for better understanding
for ( let i= 1; i <=5; i++) {//var i=1;
    console.log("i=",i);//i is defined in the block scope
} //which means i will end after loop is executed 
// console.log(i);//var is global and can be executed outside the loop


//While loop
let j=1;
while (j<=5) {
    console.log("j=",j);
    j++;
}

// do-while loop
let k=1;
do{
    console.log("k=",k);//always runs for the first case 
    k++;//try k=20 and while(k<=10) for better understanding
}while(k<=5);

//for-of loop
//help to work in stings and arrays

let str="Tony";//itreator -> characters
for(let i of str){//work and gives value of each character in a string
    console.log("i=",i);//value in i and updation come's automaticly
}

// Size or Length of the string
let stri="Tony";
let size=0;
for(let i of stri){
    console.log("i=",i);
    size++;
}
console.log("size of string is",size);

//for-in loops
//used for objects
let student={
    name:"Ayush",
    age:18,
    cgpa:7.2,
    ispass:true,
};

for(let key in student){
    console.log(key,student[key]);//key are name,age,cgpa,ispass in an object
}