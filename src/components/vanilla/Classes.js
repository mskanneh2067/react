//Example#1

class User{

    constructor(id,name,email,password,confirmpassword){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmpassword = confirmpassword
    }

    //Placing the #(number sign) before courseList make it private and can only be access with method that reference it 
    #courseList = [];

    getInfo(){
        return {
            id:this.id,
            name: this.name,
            email:this.email
        };
    }

    enrollCourse(course){
        this.#courseList.push(course)
    }

    getCourseList(){
        return this.#courseList
    }
//The static keyword make the method private and can't be inherited
    static login(){
        return `You are loggedin`
    }
}

export default User;