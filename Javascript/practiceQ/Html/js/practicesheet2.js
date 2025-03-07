//Q1
let num=prompt("Enter a Number:");//tempory way to take input from user

if(num%5===0){
    console.log(num,"Number is a multiple of 5");
}else{
    console.log(num,"Number is not a multiple of 5")
}

//Q2

let score=prompt("Enter your score 0-100 :");
let grade;

if(score>=90 && score<=100){
    grade="A";
}else if(score>=70 && score<=89){
    grade="B";
}else if(score>=60 && score<=69){
    grade="C";
}else if(score>=50 && score<=59){
    grade="D";
}else if(score>=33 && score<=49){
    grade="E";
}else{
    grade="F";
}

console.log("According to you score,Your grade is:",grade);