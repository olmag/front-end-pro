const calculatorOperators = ['+' , '-' , '*' , '/'];
const operator = getOperator();
const operandA = getOperand('operandA');
const operandB = getOperand('operandB');
const result = countUp(operator,operandA, operandB);

calculator(operator, operandA, operandB, result)

function getOperator(){
    const operator = prompt('Введіть дію яку ви хочете виконати: +, -, *, /?');
    
    if (validateOperator(operator)) {
        return operator;
    } else { 
        throw Error (`Error! Invalid operator ${operator}!`);
    }
}

function validateOperator(operator){
    return calculatorOperators.includes(operator)
}

function getOperand(operand){
    const result = prompt(`Введіть ${operand}`);
    const number = Number(result)

    if (validateOperand(number)) {
        return number;
    } else { 
        throw Error (`Error! Invalid operand ${number}!`);
    }
}

function validateOperand(number){
    return !isNaN(number)
}

function countUp(operator, operandA, operandB){
    switch (operator) {
        case '+': return add(operandA, operandB);
        case '-': return sub(operandA, operandB);
        case '*': return mult(operandA, operandB);
        case '/': return div(operandA, operandB);
        default: return 'Error operator value';
    }
}

function calculator(operator, operandA, operandB, result) {
    return alert(`${operandA} ${operator} ${operandB} = ${result}`);
}
// let operator = prompt('Введіть дію яку ви хочете виконати: +, -, *, /?');

// let operand1 = prompt('Введіть переше число');

// let operand2 = prompt('Введіть друге число');

// switch (operator) {
//     case "+":
//         alert(`${operand1} + ${operand2} = ${add(operand1, operand2)}`);
//         break;
//     case "-":
//         alert(`${operand1} - ${operand2} = ${sub(operand1, operand2)}`);
//         break;
//     case "*":
//         alert(`${operand1} * ${operand2} = ${mult(operand1, operand2)}`);
//         break;
//     case "/":
//         alert(`${operand1} / ${operand2} = ${div(operand1, operand2)}`);
//         break;
//     default:
//         alert("Error operator value:3");
// }


function add(a, b) {
    return Number(a) + Number(b);
}

function sub(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}



