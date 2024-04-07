// DOM selection
const displayArea = document.getElementById('calculator-display');
const buttons = document.querySelectorAll('.button');

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');
const divideBtn = document.getElementById('divide');
const percentBtn = document.getElementById('percent');
const multiplyBtn = document.getElementById('multiply');
const squareRootBtn = document.getElementById('square-root');
const integerBtns = document.querySelectorAll('.integer');

let equationArray = [];
let sumArray = [];

clearBtn.addEventListener('click', clearEquation)
equalsBtn.addEventListener('click', sumEquation)
squareRootBtn.addEventListener('click', squareRootNumber)
percentBtn.addEventListener('click', percentNumber)
addNumberOrOperator();

function sumEquation() {
    let sumString = equationArray.join('');
    let result = eval(sumString);
    sumArray.push(result);
    displayEquation(sumArray);
    sumArray = [];
    equationArray = [];
}

function addNumberOrOperator() {
    buttons.forEach(button => {
        if (button.getAttribute('data-value') != null) {
                button.addEventListener('click', () => {
                let buttonValue = button.getAttribute('data-value')
                if (equationArray.length < 24) {
                    equationArray.push(buttonValue);
                    displayEquation(equationArray);
                }
            })
        }
    });
}

function clearEquation() {
    equationArray = [];
    sumArray = [];
    displayEquation(equationArray);
}

function displayEquation(array) {
    let equationString = array.toString();
    let equation = equationString.replaceAll(',', '')
    if (equation === NaN) {
        displayArea.textContent = '';
    } else {
        displayArea.textContent = equation;
    }
};

function squareRootNumber() {
    let sumString = equationArray.join('');
    let result = eval(sumString);
    let squareRootedResult = Math.sqrt(result)
    sumArray.push(squareRootedResult);
    if (isNaN(squareRootedResult)) {
        equationArray = [];
        sumArray = [];
    } else {
        displayEquation(sumArray);
    }
    equationArray = [];
    sumArray = [];
}

function percentNumber() {
    let sumString = equationArray.join('');
    let result = eval(sumString);
    let percentResult = (result/100);
    sumArray.push(percentResult);
    displayEquation(sumArray);
    equationArray = [];
    sumArray = [];
}