//Events
//The change in the state of an object is called an event. 
//Events are used to trigger the execution of a function.
//JS Events has more priority than html events.

//Event Handler
let div=document.querySelector("div");
div.onmouseover=()=>{//onmouseover is an event. Using arrow function
// which is triggered when the mouse is over the div element.
div.style.backgroundColor='orange';
console.log("You are inside the div");
}

//Event object
//The event object is a built-in object in JavaScript that contains the information about the event.
let div1=document.getElementById("Object");
div1.onmouseover=(evt)=>{
console.log(evt);//It will show the event object.
//The event object contains the information about the event.
console.log(evt.target);//It will show the target element.
console.log(evt.type);//It will show the type of event.(click, mouseover, mouseout, etc.)
console.log(evt.clientX);//It will show the x-coordinate of the mouse pointer.
console.log(evt.clientY);//It will show the y-coordinate of the mouse pointer.
}

//Event Listener
//They are used to create multiple events on the same element. 
div1.addEventListener("click",()=>{
console.log("You clicked the object");
});
div1.addEventListener("mouseover",()=>{
 console.log("You clicked the object");
});

//Remove Event Listener
let button=document.querySelector("button");
button.addEventListener("click",()=>{
console.log("You clicked the object-1");
});
button.addEventListener("click",()=>{
 console.log("You clicked the object-2");;
});

const Handler=()=>{
console.log("You clicked the object-3");
}

button.addEventListener("click",Handler);

button.addEventListener("click",()=>{
    console.log("You clicked the object-4");;
});
// button.removeEventListener("click",()=>{
// console.log("You clicked the object-3");
// });


button.removeEventListener("click",Handler);