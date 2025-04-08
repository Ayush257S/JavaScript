// Pratice Q1
let Data="User Data";
class user {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    view() {
        console.log("view user");
    }

}
 
let student1 = new user("ABC","abc123@gmial.com");
let student2 = new user("BCD","bcd234@gmail.com");

let teacher1 = new user("TeacherA","teacher123@gmail.com");
let teacher2 = new user("TeacherB","teacher234@gmail.com");

// Practice Q2
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data="some new values";
    }
}

let admin1= new Admin("admin","admincollege7.com");