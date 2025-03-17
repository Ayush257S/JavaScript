//Attributes in DOM
//Use to get value of the attribute

let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);

let js=div.getAttribute("name");
console.log(js);

//To set the attribute value

let para=document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","NewClass"));//It will set the class attribute to NewClass

//Style attribute

let div1=document.getElementsByClassName("JS")[0];//accessing the element by class name and index
console.log(div1.style);//It will show the inline style of the element
div1.style.backgroundColor="orange";//It will change the background color of the element to red