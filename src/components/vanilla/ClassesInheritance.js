import User from "./classes.js";
//A class created with a class inheritance inherits all the methods from another class:
//In this below example, the SubAdmin class is inheriting all the methods from the User class


class SubAdmin extends User{

        constructor(id,name,email,password,confirmpassword){
            super(id,name,email,password,confirmpassword);
        }
    getAdminInfo(){
        return `I am a Super Admin`
    }
}

//create an object from the SubAdmin class

const jamielatou = new SubAdmin(66,"Jamielatou Barry Kanneh","jamielatoubkanneh@gmail.com");

//get information from the SubAdmin class
console.log(jamielatou.getAdminInfo());

//get information from the User class through the SubAdmin's jamielatou object
console.log(jamielatou.login());
console.log(jamielatou.getInfo());

