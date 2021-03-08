
var x=0;
function Counter(){
    x++;
    document.getElementById("counter").innerHTML=`<p class="alert"> Counter:${x} <p>`;
    if(x%3==0){
        console.log("Fizz")
    }else if(x%5==0){
        console.log("Buzz")
    }else if(x%3==0 && i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(x);
    }
    
}
/*
// create a loop from 1 to 100
for(var i=0; i<100; i++){
    //number%3 == 0 print fizz
    if(i%3==0){
        console.log("Fizz")
    }else if(i%5==0){
        console.log("Buzz")
    }else if(i%3==0 && i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i);
    }
}
    //number%5 == 0 print buzz
    //number%3 == 0 && number%5 == 0 print fizzbuzz
    //just print the number

    for(var i=0;i<=20;i++){
        if(i%2==0){
            console.log(`${i} is even);
        }

    }
    var multiplier = Number(prompt("Add a multiplier: "));
    for(i=0;i<=10;i++){
        i * 9;
        console.log(`${i} * 9 = `)
    }
var multiplier = 9;
for(var i=0;i<=10;i++){
    var result = multiplier*i;
    console.log(`${i} * ${multiplier}=${result}`);
}
  

*/