var global = 10;

function hello(msg){
    console.log(msg);
    console.log(global)
}

hello("Hello functions!");

let traveling = function(country){
    return 'I am traveling to ' + country;
}

let travel;

travel = traveling("Italy");

console.log(travel);

function sum(a,b){
    console.log(a+b);
}
function multi(a, b){
    console.log(a*b);
}
multi(2, 10);
sum(5, 2);
//example of autocalling function
(function(topic){
    console.log("I am learning " + topic);
})(`35`);
