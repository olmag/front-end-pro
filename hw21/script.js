const allowedOperators = ['+', '-', '*', '/'];

const calculation = new Object();
getUserValues(calculation)

class SuperMath {

    check(obj) {
        const action = confirm(`Чи бажаєте ви побачити результат зробивши дію ${obj.operator}?`)

        if(action){
            this.showResult(obj)
        } else {
            this.input(obj)
            this.check(obj)
        }
    }

    showResult(obj) {
        const result = countUp(obj.operator, obj.X, obj.Y)
        calculator(obj.operator, obj.X, obj.Y, result)
    }

    input(userValueObj) {
        getOperator(userValueObj)
        getOperand(userValueObj, "X")
        getOperand(userValueObj, "Y")
    }

}

const p = new SuperMath()
p.check(calculation)


function getUserValues(userValueObj) {

    getOperator(userValueObj)
    getOperand(userValueObj, "X")
    getOperand(userValueObj, "Y")
}

function getOperator(userValueObj) {
    const operator = prompt('Введите значение +, -, *, /?');

    if (validateOperator(operator)) {
        userValueObj.operator = operator;
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