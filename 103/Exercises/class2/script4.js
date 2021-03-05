/*
let result;
result = Math.round(2.5);
console.log(result);
result = Math.floor(2.599);
console.log(result);
result = Math.ceil(2.1);
console.log(result);
result = Math.sqrt(144);
console.log(result);

result = Math.min(10,2,58,63,99);
console.log(result);

let num1 = 50;
    num2 = "10";
    num3 = "tres";
    num4 = "20.20";
console.log(num1 + Number(num2));
console.log(Number(num4) + Number(num2));

let data = 898989989;

console.log(String(data));
*/
userName= prompt("Enter your name:");
userEmail = prompt("Enter your email:");
passWord = prompt("Enter your password");
userAge = prompt("Enter your age:");
userCountry = prompt("Enter your country:");
userSalaryMonthy = prompt("Enter your monthly salary:");

userAnnualSalary = Number(userSalaryMonthy) * 12;
console.log( userName + userEmail + userAnnualSalary);
document.writeln( userName + userEmail + userAnnualSalary);
