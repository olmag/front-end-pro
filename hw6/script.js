const userArr = [];
const userArrLength = getUserArrLength();
const typeOfUserArr = getTypeOfUserArr();

function getUserArrLength(){
    const result = prompt(`Введіть число елементів в масиві`);
    const number = Number(result)

    if (validateNumber(number)) {
        return number;
    } else { 
        throw Error (`Error! Invalid number ${number}!`);
    }
}

function validateNumber(number){
    return !isNaN(number)
}

function getTypeOfUserArr() {
    const result = prompt(`Введіть тип елементів масиву "num" або "str"`);

    if(result === "num" || result === "str" ) {
        return result
    } else {
        Error (`Error! Invalid type ${result}!`);
    }
}


function setValueOnUserArr(arr, arrLength, arrType) {
    switch (arrType) {
        case 'num': return setNumOnUserArr(arr, arrLength);
        case 'str': return setStrOnUserArr(arr, arrLength);
        default: return 'error';
    }
}

function setNumOnUserArr(arr, arrLength) {
    for(let i = 0; i < arrLength; i++) {
        const userValue = prompt(`Введіть ${i + 1} елемент в масиву`);
        if(validateNumber(userValue)) {
            arr.push(userValue);
        } else {
            arr.push('0')
        }
    }
}

function setStrOnUserArr(arr, arrLength) {
    for(let i = 0; i < arrLength; i++) {
        const userValue = prompt(`Введіть ${i + 1} елемент в масиву`);
        if(validateString(userValue)) {
            arr.push(userValue);
        } else {
            arr.push("")
        }
    }
}

function validateString(string) {
    return isNaN( +string)
}

function sortElOnArr(arr, arrType){
    if(arrType === "num") {
        arr.sort(sortNumOnArrInNest);
    } else if(arrType === "str") {
        arr.sort()
    }
}


function sortNumOnArrInNest(a, b) {
    return a - b
}

function spliceElementOnArr(arr, firstElForDelete = 2, lastElForDelete = 4) {
    arr.splice(firstElForDelete, lastElForDelete)
}

setValueOnUserArr(userArr, userArrLength, typeOfUserArr)
console.log(userArr)

sortElOnArr(userArr, typeOfUserArr)
console.log(userArr)

spliceElementOnArr(userArr) 
console.log(userArr)
