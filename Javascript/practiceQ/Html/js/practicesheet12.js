//Practice Q1
let modeBtn = document.querySelector("#Mode");
let currentMode = "light";
let body = document.querySelector("body");
div = document.querySelector("div");

modeBtn.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currentMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentMode);
});

//Homework Q
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "orange"; // Change color when mouse enters
});
    
div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "rgb(246, 255, 0)"; // Revert color when mouse exits
});