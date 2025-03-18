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


//Insert element
//1. createElement
//2. add in the DOM or append in the DOM(4 major methods)

//Add the element in the End
let newbtn=document.createElement("button");//It will create a button element
newbtn.innerText="Click Me";
newbtn.style.backgroundColor="blue";
let div2=document.getElementsByClassName("JS")[1];//accessing the element by class name and index
div2.append(newbtn);//It will add the button at the end of the div2(inside the div2)
console.log(div2);



//Add the element in the Start
let newbtn1=document.createElement("button");
newbtn1.innerText="Click Me";
newbtn1.style.backgroundColor="blue";
let div3=document.getElementsByClassName("JS")[2];
div3.prepend(newbtn1);//It will add the button at the start of the div3(inside the div3)
console.log(div3);



//Add the element before the element
let newbtn2=document.createElement("button");
newbtn2.innerText="Click Me";
newbtn2.style.backgroundColor="blue";
let div4=document.getElementsByClassName("JS")[3];
div4.before(newbtn2);//It will add the button before the div4(outside the div4)
console.log(div4);



//Add the element after the element
let newbtn3=document.createElement("button");
newbtn3.innerText="Click Me";
newbtn3.style.backgroundColor="blue";
let div5=document.getElementsByClassName("JS")[4];
div5.after(newbtn3);//It will add the button after the div5(outside the div5)
console.log(div5);



//Remove the element or deleting the element
let heading=document.querySelector("h5");
heading.remove();//It will remove the heading element from the DOM

//Read MDN documentation for appendchild and removechild(read exctly what they does)