function add(a,b){
    return a+b
}
let num = add(1,6)
console.log(num) 

// anonymous function.. function without a name
//only function that can be assigned to a variable

let value = function(a,b){
    return a+b
}
value(2,3)
console.log(value(2,3)) 

//making much more simpler

let value1 = (c,d)=>c+d
console.log(value1(2,3)) 