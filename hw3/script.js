const userAge = getAge();
const userCity = getCity();
const userFavoriteSport = getFavoriteSport();

getUserInformation()

function getAge() {
    const userValue = prompt('Введіть Ваш рік народження');

    if(userValue === null || userValue.trim() === '') {
        return 'Шкода, що Ви не захотіли ввести свою дату народження';
    } else if(!isNaN(userValue)) {
        return `Рік вашого народження ${userValue}`;
    } else { 
        throw Error(invalidUserAge(userValue));
    } 
}

function invalidUserAge(userValue) {
    alert(`Оновіть сторінку та введіть рік народження цифрами, а не ${userValue}!`);
}

function getCity() {
    const userValue = prompt('Введіть назву міста в якому Ви проживаєте');

    if(userValue === null || userValue.trim() === '') {
        return 'Шкода, що Ви не захотіли ввести своє місцепроживання'; 
    } else if(userValue === 'Київ' || userValue === 'київ') {
        return "Ти живеш у столиці України";
    } else if(userValue === 'Вашингтон' || userValue === 'вашингтон') {
        return "Ти живеш у столиці Сполучених Штатів Америки";
    } else if(userValue === 'Лондон' || userValue === 'лондон') {
        return "Ти живеш у столиці Велікобританії";
    } else {
        return `Ти живеш у місті ${userValue}`;
    }
}

function getFavoriteSport() {
    const userValue = prompt('Введіть назву Вашаго улюбленого спорту');

    if(userValue === null || userValue.trim() === '') {
        return 'Шкода, що Ви не захотіли ввести назву улюбленого спорту'; 
    } else if(userValue === 'Футбол' || userValue === 'футбол') {
        return "Круто! Хочеш стати Роналдо?";
    } else if(userValue === 'Баскетбол' || userValue === 'баскетбол') {
        return "Круто! Хочеш стати Ентоні Девісом?";
    } else if(userValue === 'Великий теніс' || userValue === 'великий теніс') {
        return "Круто! Хочеш стати Андрієм Медвєдєвим?";
    } else {
        return `Ти полюбляєш ${userValue}`;
    }
    // switch (userValue) {
    //     case "null":
    //         return 'Шкода, що Ви не захотіли ввести назву улюбленого спорту'; 
    //     case 'Футбол' || 'футбол':
    //         return "Круто! Хочеш стати Роналдо?";
    //     case 'Баскетбол' || 'баскетбол':
    //         return "Круто! Хочеш стати Ентоні Девісом?";
    //     case 'Великий теніс' || 'великий теніс':
    //         return "Круто! Хочеш стати Андрієм Медвєдєвим?";
    //     default:
    //         return `Ти полюбляєш ${userValue}`;
    // }
}

function getUserInformation() {
    alert(`${userAge}. ${userCity}. ${userFavoriteSport}`)
}