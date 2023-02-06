const allowedOperators = ['+', '-', '*', '/'];

class SuperMath {

    constructor() {
        this.calculation = new Object();
        this.input(this.calculation)

    }

    check() {
        const action = confirm(`Чи бажаєте ви побачити результат зробивши дію ${this.calculation.operand}?`)

        if(action){
            this.showResult()
        } else {
            this.input(this.calculation)
            this.check()
        }
    }

    showResult() {
        const result = countUp(this.calculation.operand, this.calculation.X, this.calculation.Y)
        calculator(this.calculation.operand, this.calculation.X, this.calculation.Y, result)
    }

    input(userValueObj) {
        getOperator(userValueObj)
        getOperand(userValueObj, "X")
        getOperand(userValueObj, "Y")
    }

}

const p = new SuperMath()
p.check()

function getOperator(userValueObj) {
    const operator = prompt('Введите значение +, -, *, /?');

    if (validateOperator(operator)) {
        userValueObj.operand = operator;
    } else { 
        throw Error (`Error! Invalid operator ${operator}!`);
    }
}

function validateOperator(operator) {
    return allowedOperators.includes(operator);
} 

function getOperand(userValueObj, idOperand) {
    const result = prompt(`Введите число ${idOperand}`);  
    const number = Number(result);

    if (validateNumber(number)) {
        userValueObj[`${idOperand}`] = number;
    }  else {
        throw Error (`Error! Invalid operand ${result}!`);
    }
}

function validateNumber(number) {
    return !isNaN(number);
} 


function countUp(operator, numberA, numberB) {
    switch (operator) {
        case '+': return sum(numberA, numberB);
        case '-': return subtraction(numberA, numberB);
        case '*': return multiply(numberA, numberB);
        case '/': return divide(numberA, numberB);
        default: return 'Error operator value';
    }
}

function calculator(operator, numberA, numberB, result) {
    return alert(`${numberA} ${operator} ${numberB} = ${result}`);
}

function sum(numA, numB) {
    return numA + numB;
}

function subtraction(numA, numB) {
    return numA - numB;
}

function multiply(numA, numB) {
    return numA * numB;
}

function divide(numA, numB) {
    return numA / numB;
}