const city = document.getElementById("city");
const datalist = document.getElementById("city-list");
const weatherForm = document.getElementById("weather-form");
const wetherList = document.getElementById("weather");
const cities = ['Київ','Харків','Одеса','Дніпро','Донецьк','Запоріжжя','Львів','Кривий Ріг','Миколаїв','Маріуполь','Луганськ','Севастополь','Вінниця','Макіївка','Сімферополь','Херсон','Полтава','Чернігів','Черкаси','Суми','Житомир','Хмельницький','Чернівці','Горлівка','Рівне','Івано-Франківськ','Кременчук','Тернопіль','Луцьк','Біла Церква','Червоний Луч','Бердянськ','Ужгород','Павлоград'];

function setCitiesOnDatalist(cities, formDatalist) {
    cities.forEach(function(item){
        const option = document.createElement('option');
        option.value = item;
        formDatalist.appendChild(option);
     });
}
setCitiesOnDatalist(cities, datalist)

function showWeather(data) {

    const temp = document.createElement("li")
    const pressure = document.createElement("li")
    const description = document.createElement("li")
    const humidity = document.createElement("li")
    const speed = document.createElement("li")
    const deg = document.createElement("li")
    const icon = document.createElement("div")
    
    const pic = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`
    
    temp.innerHTML = `температура = ${data.main.temp}`;
    pressure.innerHTML = `тиск = ${data.main.pressure}`;
    description.innerHTML = `опис = ${data.weather[0].description}`;
    humidity.innerHTML = `вологість = ${data.main.humidity}`;
    speed.innerHTML = `швидкість вітру = ${data.wind.speed}`;
    deg.innerHTML = `напрям у градусах = ${data.wind.deg}`;

    icon.innerHTML = pic;
    wetherList.appendChild(temp)
    wetherList.appendChild(pressure)
    wetherList.appendChild(description)
    wetherList.appendChild(humidity)
    wetherList.appendChild(speed)
    wetherList.appendChild(deg)
    wetherList.appendChild(icon);
}

weatherForm.addEventListener('submit', onWeatherFormSubmit)

function onWeatherFormSubmit(e) {
    e.preventDefault()
    const cityValue = city.value
    const urlValue = {
        q: cityValue,
        units: 'metric',
        APPID: '5d066958a60d315387d9492393935c19',
    }

    fetch('https://api.openweathermap.org/data/2.5/weather?' + new URLSearchParams(urlValue))
    .then(data => data.json())
    .then((data) => {
        showWeather(data)

    })
}


