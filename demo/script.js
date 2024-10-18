let displayValue = "";

function appendNumber(number) {
  displayValue += number;
  document.getElementById("display").value = displayValue;
}

function appendOperator(operator) {
  displayValue += ` ${operator} `;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}

function calculate() {
  // Mengganti operator pangkat "^" dengan operator javascript "Math.pow()"
  displayValue = displayValue.replace(/\^/g, "**");
  try {
    let result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
