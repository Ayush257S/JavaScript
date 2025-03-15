//Practice Q1
let num=[87, 93, 45, 67, 89, 34, 56, 99, 78, 90];
let pass=num.filter((val)=>{
    return val>80;
});
console.log(pass);

//Practice Q2
let n=prompt("Enter the number : ");
let arr=[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
} 

console.log(arr);