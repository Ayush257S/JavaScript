//Class and objescts

//JavaScript object is an entity having state and behavior(properties and method).
const students={
    fullname:"Ayush",
    marks:95.7,
    printmarks: function(){ //can also be written as printmarks(){
        console.log("marks =",this.marks);//here this means student.marks
    },
};
//JavaScript objects have a special property called prototype(prototype itself is an object)


const empolyee={
    calcTax(){
        console.log("Tax rate is 10%");
    }
};
empolyee.calcTax();