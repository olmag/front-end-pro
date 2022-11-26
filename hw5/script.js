// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

getValuesBetweenTwoNumbers()

function getValuesBetweenTwoNumbers(firstNumber = 20, secondNumber = 30, step = 0.5) {
    const getValue = []
    
    for(let i = firstNumber; i <= secondNumber; i = i + step ) {
        getValue.push(i);
    }

    console.log(getValue)
}

getCurrencyExchange()

function getCurrencyExchange(firstNumber = 10, secondNumber = 100, step = 10, rate = 27) {

    for(let i = firstNumber; i <= secondNumber; i = i + step ) {
        const rateValue = rate;
        console.log(`${i} доларів = ${i * rateValue} грівень `)
    }
}

enterWholeNumbers()

function enterWholeNumbers(value = 5){
    for(let i = 1, n = 0 ; i <= 100; i++, n = i * i ) {
        if (n < value) {
            console.log(i)
        }
    }
}


getAnswerIfPrime()

function getAnswerIfPrime(value = 6) {
    if(isPrime(value) === true){
        console.log(`Число ${value} є простим`);
    }
}

function isPrime(num){
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false
        } 
    }
    return num >= 1;
}

getValueInDegree(16, 2)

function getValueInDegree(value = 729, degree = 3) {
    let i = 0;
    let result;

    do {
        i = ++i;
        result = Math.pow(degree, i);
    } while (result < value);

    if (result === value) {
        console.log(`Число ${value} можна одержати шляхом зведення числа ${degree} у ${i} ступінь.`);
    } else {
        console.log(`Число ${value} не можна одержати шляхом зведення числа ${degree} у ступінь.`);
    }
}



// const task5 = 729

// for(let i = 1, n = 0 ; i <= 100; i++, n = Math.pow(3, i)) {
// 	if (n === task5) {
//         console.log(`Число ${task5} можна одержати шляхом зведення числа 3 у ${i} ступінь.`);
//     }else {
//          console.log(`Число ${task5} не можна одержати шляхом зведення числа 3 у ступінь.`);
// }
// }
