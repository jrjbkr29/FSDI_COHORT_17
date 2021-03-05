/*
Assignment 1
1) Create one script with 20 different variables an display them on the HTML.

2) Create one script with a for loop and display the numbers from 1 to 100, 2 by 2.

3) Create one script with an if statement.
*/

// 1) Create one script with 20 different variables an display them on the HTML.
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

//2) Create one script with a for loop and display the numbers from 1 to 100, 2 by 2.
var i;
var countByTwo = 1;
document.writeln(countByTwo);
for(var i = 1; i <=50; i++){
countByTwo += 2;
document.writeln(countByTwo);
};

//3) Create one script with an if statement.
if(countByTwo>=100){
    document.writeln('<hr>');
    document.writeln(`<h2>Incremented by 2 all the way to ${countByTwo} with a for loop and outputted this heading with an if statement</h2>`);
};