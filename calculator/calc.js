let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

const input = document.querySelector("#num1");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const value = button.dataset.value;

    switch (type) {
      case "number":
        if (waitingForSecondOperand) {
          input.value = value;
          waitingForSecondOperand = false;
        } else {
          input.value += value;
        }
        break;

      case "decimal":
        if (!input.value.includes(".")) {
          input.value += ".";
        }
        break;

      case "operator":
        const currentValue = parseFloat(input.value);
        if (operator && firstOperand !== null && !waitingForSecondOperand) {
          firstOperand = performCalculation(operator, firstOperand, currentValue);
          input.value = firstOperand;
        } else {
          firstOperand = currentValue;
        }

        operator = value;
        waitingForSecondOperand = true;
        break;

      case "action":
        if (value === "clear") {
          firstOperand = null;
          operator = null;
          waitingForSecondOperand = false;
          input.value = "";
        } else if (value === "delete") {
          input.value = input.value.slice(0, -1);
        } else if (value === "equal") {
          if (operator && firstOperand !== null) {
            const secondOperand = parseFloat(input.value);
            firstOperand = performCalculation(operator, firstOperand, secondOperand);
            input.value = firstOperand;
            operator = null;
            waitingForSecondOperand = false;
          }
        }
        break;
    }
  });
});

function performCalculation(operator, first, second) {
  switch (operator) {
    case "+": return first + second;
    case "-": return first - second;
    case "*": return first * second;
    case "/": return second !== 0 ? first / second : "Error";
    default: return second;
  }
}
