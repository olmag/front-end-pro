function powNumber(number, degree) {
    if(degree === 1){
        return number
    } else {
        return number * powNumber(number, degree - 1)
    }
}

console.log(powNumber(3, 7))