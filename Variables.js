//till ES5 only var were there
// from ES6 let and const were introduced

//var - scope is either global or functional level, can be re-initialised
//let - scope is either global or block level {}, can be re-initialised
//const - have all characteristics of let but it cant be re-initialised

 var greet = "evening" //global

 if(1==1){
    var greet = "afternoon" //global
 }

 function add(a,b){
    var greet ="evening" //functional
    return a+b
 }

 let sum = add(2,3)
 console.log(sum)
 console.log(greet)