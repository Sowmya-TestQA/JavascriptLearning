//strings internally considered as arrays of characters in JS.

let day = "Tuesday "
console.log(day.slice(0,4)) //substring of the string
console.log(day[1].length) //returns the char st the day[1] index
let day1=day.split('s');
console.log(day1[1].trim()) 

let date = "23"
let nextdate = "27"
let newdate = parseInt(nextdate) - parseInt(date)
console.log(newdate)

let quote = day + "is beautiful"
console.log(quote)
let val = quote.indexOf("d",5)
console.log(val)
