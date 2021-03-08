/*
var multiplier = Number(prompt("Add a multiplier: "));
for(var i=0;i<=10;i++){
var result = multiplier*i;
console.log(`${i} * ${multiplier}=${result}`);
}
*/

var ages = [21,23,34,33,40,20,22, 26, 31];
var largest= ages[0];
var smallest=ages[0];

for(i=1;i<ages.length;i++){
    //console.log(ages[i]);
    if(ages[i]>largest){
        largest=ages[i];
    }
    if(ages[i]<smallest){
        smallest=ages[i];
    }
}
console.log(smallest);
console.log(largest);
