/*
Assignment 2
Create a program where :

- The user can enter information such as product's name, quantity, price and the program should display the info on the console. Use the prompt to get the required information.

-The system should calculate the final price adding taxes (like in Mexico 16% of taxes).

*** use the Number()
*/

//The user can enter information such as product's name, quantity, price and the program should display the info on the console. Use the prompt to get the required information.
var productName = prompt("What is the name of the product you are buying?");
var productQuantity = prompt("How many of this product are you buying?");
var productPrice = prompt("How much does the item cost(before taxes)?");
var taxRate = prompt("Enter your tax rate:");
var subTotal = Number(productQuantity) * Number(productPrice);
console.log(subTotal);
var taxAmount = Number(taxRate) * subTotal;
console.log(taxAmount);
var finalPrice = taxAmount + subTotal;
console.log(finalPrice);
const purchaseSummary = `You purchased ${productQuantity} ${productName} for $${productPrice} for a total of ${finalPrice} after taxes. `;
console.log(purchaseSummary);
console.log(productName);
console.log(productPrice);
console.log(productQuantity);
console.log(taxRate);
console.log(finalPrice);

document.write(purchaseSummary);