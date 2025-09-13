let marks = new Array(20,20,30,40,50)
let num = [10,20,30]
console.log(marks[1])
console.log(num[2])
marks[3]=100
console.log(marks[3])
console.log(marks.length)
marks.push(65)// add element to the last
console.log(marks)
marks.pop()//remove last element
console.log(marks)
marks.unshift(12)// adds value in the 0th index
console.log(marks)

console.log(marks.includes(120))// element search
console.log(marks.indexOf(20))// returns element 
var sum =0;
for(let i=0; i<marks.length;i++){
    sum = sum + marks[i]
}
console.log(sum)
// another simplest method like lambda exp in java here--> reduce filter method in JS
//Purpose: To pick elements from an array that match a condition.
// Returns: A new array with only the elements that pass the test.
// When to use: If you want to remove unwanted elements or extract a subset.
let total = marks.reduce((sum,mark)=> sum+mark,0)
console.log(sum)

// get even numbers in an array
// Purpose: To combine all elements into a single value.
// Returns: A single result (number, string, object, etc.).
// When to use: If you want to aggregate values (sum, product, max, etc.).
let scores=[10,20,23,45,60,62]
let even = scores.filter(even=>even%2==0)   
console.log(even)


// Purpose: To transform each element of an array.
// Returns: A new array with the same number of elements, but values changed.
// When to use: If you want to modify every element.

let multiply =[1,2,3,4,5]
let newvalue = multiply.map(multiplies=>multiplies*3)
console.log(newvalue)

let scores1=[10,20,23,45,60,62]
// we can chain all the actions like streams in java here in JS like below
let finalvalue = scores1.filter(even=>even%2==0).map(multiplies=>multiplies*3).reduce((sum,mark)=> sum+mark,0)
console.log(finalvalue)

//sort strings--> use sort() method

let fruits =["mango","kiwi","pomegranate","apple"]
console.log(fruits.sort())

//number sort -> sort() wont work. We need to use bubble sort way

let number1 = [1,9,5,2,4]
console.log(number1.sort((a,b)=>a-b)) //ascending order
console.log(number1.sort((a,b)=>b-a)) //descending order