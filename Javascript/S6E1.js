//DOM document object model
// dom is object oriented representation of web page
// dom is interface that allows scripts to dynamically access and update content, structure and style of a document
// dom represents the document as nodes and objects


console.dir(document);//shows the document object
console.log(document);//shows the html document


//DOM Manupulation
//selting with id
let id=document.getElementById("idselector");
console.dir(id);//This is an object
console.log(id);//This is an html element


//selecting with class
let classselector=document.getElementsByClassName("classselector");
console.dir(classselector);//This is an object,returns Html Collection similar to array
console.log(classselector);//This is an html element


//selecting with tag
let tagselector=document.getElementsByTagName("p1");
console.dir(tagselector);
console.log(tagselector);


//selecting with queryselector
let queryselector=document.querySelector("p");//selects the first p element
console.dir(queryselector);//This is an object
console.log(queryselector);//This is an html element


let queryselectorall=document.querySelectorAll("p");//selects all the p elements
console.dir(queryselectorall);//This is an object   
console.log(queryselectorall);//This is an html element


let queryselectorall1=document.querySelectorAll(".querysel");//. is used to select class
console.dir(queryselectorall1);
console.log(queryselectorall1);


let queryselectorall2=document.querySelectorAll("#idselector");//# is used to select id
console.dir(queryselectorall2);
console.log(queryselectorall2);

//dom manupulation properties
//tag name
queryselectorall1.getElementsByTagName