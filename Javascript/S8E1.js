//Class and objescts

//JavaScript object is an entity having state and behavior(properties and method).
const students={
    fullname:"Ayush",
    marks:95.7,
    printmarks: function(){
        console.log("marks =",this.marks);//here this means student.marks
    },
};