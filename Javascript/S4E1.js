// Arrays 
// Arrays are collections of items
// Same type of informations are store in Arrays,index matter in arrays 
// Arrays is linear way of storing information as compare to objects

let marks=[97,82,75,55,45];
console.log(marks);
console.log(marks.length);//arrays length always start with 0
console.log(typeof marks);

// access item in an array 
console.log(marks[3]);

// Loops over arrays
// for loop
let Heroes=["Iron Man","SpiderMan","Thor","Black Panther","Ant Man","Doctor Strange","Captain Marvel"];
for (let i=0; i<Heroes.length; i++){
    console.log(Heroes[i]);
}

// for of
for (let Hero of Heroes){
    console.log(Hero);
}

// Similar methdos of string in arrays
let cities=["delhi","pune","vizag","mumbai","chennai"];
for(let city of cities){
    console.log(city.toUpperCase(Heroes));
}