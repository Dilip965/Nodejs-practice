class classes{

    constructor(){
        this.name="pradip kumar"
        this.age=35
    }
    getName(){
        return this.name;
    
}
getAge(){
    this.email="sandeepmaheshwari@gmail.com"
    return this.age;
}
getEmail(){
    return this.email()
}
    
}
var user=new classes();

user.getAge()
console.log(user.getAge())
console.log(user.getName());
console.log(user.email);
