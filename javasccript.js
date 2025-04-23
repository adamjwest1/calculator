let num1 = "";
let num2 = "";
let operator = "";


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        let sum = add(num1, num2);
    }
    if (operator == "-") {
        let sum = subtract(num1, num2);
    }
    if (operator == "/") {
        let sum = divide(num1, num2);
    }
    if (operator == "*") {
        let sum = multiply(num1, num2);
    }
    return sum;
}