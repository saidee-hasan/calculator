let currentInput = "";

function calculator(value) {
    currentInput += value;
    document.getElementById("myResult").value = currentInput;
}

function DeleteMe() {
    currentInput = "";
    document.getElementById("myResult").value = currentInput;
}

function canCle() {
    currentInput = currentInput.slice(0, -1); // Remove the last character
    document.getElementById("myResult").value = currentInput;
}

function AnsWer() {
    try {
        // Evaluate the expression
        const result = eval(currentInput);
        document.getElementById("myResult").value = result;
        currentInput = result.toString(); // Update currentInput to the result
    } catch (error) {
        document.getElementById("myResult").value = "Error";
        currentInput = ""; // Reset currentInput on error
    }
}