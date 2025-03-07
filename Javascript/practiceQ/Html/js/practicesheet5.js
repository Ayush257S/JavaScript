// Practice Q1

let marks=[85,97,44,37,76,60];
let sum1=0;
let sum2=0;
let sum3=0;


// Method 1 of doing lengthy method
sum1 = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];
console.log(sum1/marks.length);

// Method 2 of doing
for(let val of marks){
    sum2=sum2+val;
}
console.log(sum2/marks.length);
let avg=sum2/marks.length;

// Method 3 of doing 
for(let val of marks){
    sum3+=val;
}
console.log(sum3/marks.length);

console.log(`Avg marks of the class is ${avg}`);

// Practice Q2
//solving using for of loop
let items=[250,645,300,900,50];
let j=0;
for(let amt of items){
   let offer=amt/10;
    items[j]=items[j]-offer;
    console.log(items[j]);
    j++;
}
console.log(items);//print the new array 

// solving using for loop
let price=[250,645,300,900,50];
for(let k=0; k<price.length;k++){
    let discount=price[k]/10;
    price[k]-=discount;
    console.log(price[k]);
}
console.log(price);