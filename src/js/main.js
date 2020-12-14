import '../scss/style.scss';
import '../index.html';

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
    this.isCompute = false;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    if (this.currentOperand.toString().length === 1 && this.currentOperand.toString() === '-') {
      this.currentOperand = '';
    }
  }

  appendNumber(number) {
    if (this.isCompute && this.previousOperand === '' || this.operation === '√') {
      this.clear();
    }
    if (number === '.' && this.currentOperand.includes('.')) {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  changeToOppositeNumber() {
    if (this.currentOperand == 0) return;
    this.currentOperand = -this.currentOperand;
  }

  getSqrtOfNumber() {
    const current = parseFloat(this.currentOperand);
    
    if (isNaN(current)) return;
    let computation = Math.sqrt(parseFloat(this.currentOperand));
    this.previousOperand = this.currentOperand;
    this.currentOperand = computation;
    this.operation = '√';
    this.isCompute = true;
  }

  compute() {
    this.isCompute = true;
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      case 'xy':
        computation = Math.pow(prev, current);
        break;
      default:
        return;
    }
    this.currentOperand = +computation.toFixed(10);
    this.operation = undefined;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    if (this.previousOperand < 0 && this.operation === '√') {
      this.currentOperandTextElement.innerText = 'complex number';
    } else {
      this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    }
    
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
}


const currentOperandTextElement = document.querySelector('[data-current-operand]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const changeSignButton = document.querySelector('[data-change-sign]');
const sqrtButton = document.querySelector('[data-sqrt]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

changeSignButton.addEventListener('click', () => {
  calculator.changeToOppositeNumber();
  calculator.updateDisplay();
});

sqrtButton.addEventListener('click', () => {
  calculator.getSqrtOfNumber();
  calculator.updateDisplay();
});
