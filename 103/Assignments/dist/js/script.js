
function calc(){
    var operand1 = Number((prompt("Enter first number")));
    var operator = (prompt("Enter an operator(+,-,*,/"));
    var operand2 = Number((prompt("Enter second number")));
    var result;

    if(isNaN(operand1) || isNaN(operand2) == true){
        alert("Error! Please enter a number only for operand 1 and 2.")
        console.log(`ERROR! operand1 is :${operand1} and operand 2 is:${operand2}, both must be a number!`)
    }else{
        console.log(operand1);
        console.log(operand2);
        console.log(operator);
    };

    switch(operator){
        case "+":
            result = Number(operand1) + Number(operand2);
            document.getElementById("resultMessage").innerHTML = `<p>The Sum of ${operand1} and ${operand2} is equal to ${result}</p>`;
            document.getElementById("calcButton").innerHTML = `<button onclick="calc()">Lets do some <strong>more</strong> math!</button>`;
            console.log(result);
            break;
        case "-":
            result = Number(operand1) - Number(operand2);
            document.getElementById("resultMessage").innerHTML = `<p>The difference of ${operand1} and ${operand2} is equal to ${result}</p>`;
            document.getElementById("calcButton").innerHTML = `<button onclick="calc()">Lets do some <strong>more</strong> math!</button>`;
            console.log(result);
            break;
        case "*":
            result = Number(operand1) * Number(operand2);
            document.getElementById("resultMessage").innerHTML = `<p>The product of ${operand1} and ${operand2} is equal to ${result}</p>`;
            document.getElementById("calcButton").innerHTML = `<button onclick="calc()">Lets do some <strong>more</strong> math!</button>`;
            console.log(result);
            break;
        case "/":
            result = Number(operand1) / Number(operand2);
            document.getElementById("resultMessage").innerHTML = `<p>The quotient of ${operand1} and ${operand2} is equal to ${result}</p>`;
            document.getElementById("calcButton").innerHTML = `<button onclick="calc()">Lets do some <strong>more</strong> math!</button>`;
            console.log(result);
            break;
        default:
            console.log("Not a supported operator");
            alert("Not a supported Operator, please use a +,-,*, or / as an operator only.")
    }
};
