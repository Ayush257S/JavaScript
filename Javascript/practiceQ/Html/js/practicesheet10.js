//Practice Q1

let h2=document.querySelector("h2");
h2.innerText=h2.innerText+" from apna college";//concatinating the two strings

//Practice Q2

let divs=document.querySelectorAll(".box");
// box.innerText="Hello";
console.dir(divs[0]);//individualy accessing the divs
divs[0].innerText="New unique text 4";//changing the text of the first div             
divs[1].innerText="New unique text 5";//changing the text of the second div             
divs[2].innerText="New unique text 6";//changing the text of the third div      


// second method
let div1=document.querySelectorAll(".box");
let idx=1;
for(div of div1){
     div.innerText=`New unique text ${idx}`;
     idx++;
}