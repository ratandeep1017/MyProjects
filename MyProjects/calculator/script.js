// Get references to the display and input elements
const display = document.getElementById("display");
let input = "";
let operator = "";

// Function to append a digit or decimal point to the input
function appendInput(value) {
    input += value;
    display.textContent = input;
}

// Function to set the operator
function setOperator(op) {
    operator = op;
    input += op;
    display.textContent = input;
}

// Function to clear the display
function clearDisplay() {
    input = "";
    operator = "";
    display.textContent = "0";
}

// Function to perform the calculation
function calculate() {
    try {
        const result = eval(input); // Evaluate the expression
        display.textContent = result;
        input = result;
        operator = "";
    } catch (error) {
        display.textContent = "Error"; // Handle invalid expressions
        input = "";
        operator = "";
    }
}
