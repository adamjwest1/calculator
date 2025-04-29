let num1 = 0
let num2 = 0
let operation = null
let shouldResetScreen = false

const numbersInput = document.querySelectorAll('[numberInput]')
const displayOne = document.getElementById('displayOne')
const operatorInput = document.querySelectorAll('.operators button')
const evaluator = document.getElementById('equals')
const allClear = document.getElementById('allClear')
const backSpace = document.getElementById('backSpace')
const decimal = document.getElementById('decimal')

allClear.addEventListener('click', clearAll)
backSpace.addEventListener('click', deleteLast)
evaluator.addEventListener('click', evaluate)

decimal.addEventListener('click', addDecimal)

function addDecimal() {
    if (shouldResetScreen) {
        clearAll()
    }
    if(displayOne.textContent.includes(".")) {
        return
    }
    displayOne.textContent += '.'
}

operatorInput.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

numbersInput.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

function deleteLast() {
    displayOne.textContent = displayOne.textContent.toString().slice(0, -1)
}

function clearAll() {
    num1 = 0
    num2 = 0
    displayOne.textContent = ''
    operation = null
    shouldResetScreen = false
}

function evaluate() {
    num2 = displayOne.textContent
    a = Number(num1)
    b = Number(num2)
    
    if (b == 0) {
        displayOne.textContent = "ERROR"
        return
    }
    if (operation == '+') {
        displayOne.textContent = Math.round(add(a, b) * 1000) / 1000
    }
    if (operation == '-') {
        displayOne.textContent = Math.round(subtract(a, b) * 1000) / 1000
    }
    if (operation == '/') {
        displayOne.textContent = Math.round(divide(a, b) * 1000) / 1000
    }
    if (operation == '*') {
        displayOne.textContent = Math.round(multiply(a,b) * 1000) / 1000
    }
    if (displayOne.textContent.length >= 10) {
        displayOne.textContent = Number(displayOne.textContent).toExponential(6);
    }
}

function setOperation(operator) {
    num1 = displayOne.textContent;
    operation = operator;
    shouldResetScreen = true;
}

function appendNumber(number) {
    if (displayOne.textContent === '0' || shouldResetScreen) {
        resetScreen();
    }
    if (displayOne.textContent.length < 15) {
        shouldResetScreen = false
        displayOne.textContent += number;
    }
}

function resetScreen() {
    displayOne.textContent = '';
}

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
