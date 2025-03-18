//Practice Q1
let newbtn=document.createElement("button");
newbtn.innerText="click me";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";
//two way of writing
document.querySelector("body").prepend(newbtn);//due img size it is not showing on the top but correct in inspect code
// button.append(newbtn);

//Practice Q2
let para=document.querySelector("p");
console.log(para);
para.getAttribute("class");//It will show the class attribute of the element
// para.setAttribute("class","newClass");//It will change change the old style to new style 
para.classList.add("newClass");//It will add the new class to the element
console.log(para.classList);