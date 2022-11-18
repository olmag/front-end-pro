const hoursValue = gethoursValue();
const resultInSecond = getResultInSecond(hoursValue)

countingSeconds(hoursValue, resultInSecond)

function gethoursValue(){
    const result = prompt(`Введіть кількість годин`);
    const hours = Number(result)

    if (validateHours(hours)) {
        return hours;
    } else { 
        throw Error (`Error! Invalid hours ${hours}!`);
    }
}
function validateHours(number){
    return !isNaN(number)
}

function getResultInSecond(hours) {
    return hours * 3600
}

function countingSeconds(hours, seconds){
    return alert(`В ${hours} годинах ${seconds} секунд :3`);
}