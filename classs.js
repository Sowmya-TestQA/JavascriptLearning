class Person
{
    age = 25 //one way of creating property

    get location(){
        return "london"
    } // another way  of creating property using getter methods


//    Getters are useful when:
// You want a property-like access, but with some logic behind it
// The value is derived from other data, not directly stored
// You want to make the property read-only (user cannot change it directly)
// Useful for encapsulation (protecting class internals)

// Example:
// get birthYear() {
//     return new Date().getFullYear() - this.age; //logic behind before returning value
// }



    //constructor is the method which has class name is created and executed by default when a class and its object is created

    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName;
    }

    fullName(){ // method
        console.log(this.firstName+this.lastName)
        return this.firstName+this.lastName
    }
}

module.exports= Person

//its like a framework where we put all the reusable methods and other stuffs and epxort the class. all the other classes will reuse this class and its functions.
