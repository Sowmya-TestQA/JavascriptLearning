const Person = require("./classs")
class Pet extends Person{

    get Location(){
        return "Bluecross"
    }
    constructor(fname,lname){
        super(fname,lname)
    }
   
    
}
 let p = new Pet("anbu","jagan") 
 p.fullName()