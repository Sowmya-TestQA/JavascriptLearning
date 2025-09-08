// conditional statements - if,else
//looping statements - while, do while, for

const flag = true;
if(!flag){
    console.log("satisfied")
}
else{
    console.log(flag)
    console.log("not satisfied")
}

let i=0;
while(i<10){
    i++
    console.log(i)
}

let j=0;
do{
j++
}while(j<10);
 console.log(j)

 console.log("*********for*********")
    let n=0
    //lets print first 3 numbers - multiples of 2 and 5
    for(let k=1; k<=100; k++){
        if(k%2==0 && k%5==0){
            console.log(k)
            n++
            if(n==3){
                break
            }
        }
    }
 