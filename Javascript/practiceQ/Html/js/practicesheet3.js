//Practice Q1
for(let i=0; i<=100; i++){
    if (i%2===0) {
        console.log(i);
    }
}

//Practice Q2
let gamenumber=25;
let num=prompt("Guess the number :");


while(num != gamenumber){
    num=prompt("You entered Worng number.Guess agian :");
}
console.log("Congratulations, You Win");
