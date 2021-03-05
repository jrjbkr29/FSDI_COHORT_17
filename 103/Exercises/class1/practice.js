
/*exc 1
//declarations
var numberChildren=0;
var partnerName=0;
var geoLocation=0;
var jobTitle=0;

console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberChildren + " kids.");
//window.alert("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberChildren + " kids.")
document.write(`<p class="alert">"You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numberChildren + " kids."`);
*/

/*exc 2
var name1="???";
var email= "etc@gmail.com";
var passWord= "1234";
var age= 30;
var country="USA";
var salaryMonthly=10000;
var salaryAnnual=0;
salaryAnnual=salaryMonthly * 12;
console.log(name1 + email + salaryAnnual);
*/
/*
//for loop
for(var i=1;i<10;i++){
    document.writeln(i);
}
*/
/*
//if statement
var passWord="123456";
int passWord2=123456;
if("252525"==passWord){
    console.log("Welcome to the sytem");

}
else{
    console.log("Incorrect Password!");
}

var total=45;
if(total<100){
    console.log("You can buy it!");
}

else{
    console.log("But you can buy this one");
}
end examples
*/ 
var num1="1";
var num2="2";
var num3="3";
var num4="4";
var num5="5";
var num6="6";
var num7="7";
var num8="8";
var num9="9";
var num10="10";
var num11="11";
var num12="12";
var num13="13";
var num14="14";
var num15="15";
var num16="16";
var num17="17";
var num18="18";
var num19="19";
var num20="20";
document.writeln('<hr>');
document.writeln(num1 +num2 +num3 +num4 +num5 +num6 +num7 +num8 +num9 +num10 +num11 +num12 +num13 +num14 +num15 +num16 +num17 +num18 +num19 +num20);
document.writeln('<hr>');
var i;
var countByTwo = 1;
document.writeln(countByTwo);
for(var i = 1; i <=50; i++){
countByTwo += 2;
document.writeln(countByTwo);
};

if(countByTwo>=100){
    document.writeln('<h2>Incremented by 2 all the way to 100 with a for loop and outputted this with a if statement</h2>');
};