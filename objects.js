//collections of properties - objects
const Person = require ("./classs") //importing external class

let person = {
    firstName: 'Sowmya',
    lastName: 'Shan',
    age : 24,
    fullName : function(){
       this.firstName + this.lastName
    } //anonymous fxn that concatenates fname and lname dynamically for huge set of records.
}
console.log(person.fullName())
console.log(person.firstName)
person.firstName = 'Jagan' //edit the first name prop
console.log(person.firstName)
person.gender = 'male'
console.log(person)
delete person.gender //delete the property
console.log(person)
console.log('gender' in person) //to check if the property is present in a object, returns true if exists or false if not.

//to iterate objects use enhanced for loops
for(let key in person){
    console.log(person[key]) //prints all the props in a object
}



//creating obj for the imported class
let p = new Person("h","d")
console.log("vvv"+p.fullName())
