const ITEM_INFO_LOCAL_STORAGE_KEY = 'item';

const itemList = document.getElementById("item-list");
const itemInfo = document.getElementById("item-info");
const checkoutForm = document.getElementById("checkout-user-form");
const errorsContainer = document.getElementById("errors-container");
const datalist = document.getElementById("citi-list");
const cities = ['Київ','Харків','Одеса','Дніпро','Донецьк','Запоріжжя','Львів','Кривий Ріг','Миколаїв','Маріуполь','Луганськ','Севастополь','Вінниця','Макіївка','Сімферополь','Херсон','Полтава','Чернігів','Черкаси','Суми','Житомир','Хмельницький','Чернівці','Горлівка','Рівне','Івано-Франківськ','Кременчук','Тернопіль','Луцьк','Біла Церква','Червоний Луч','Бердянськ','Ужгород','Павлоград'];

const localStorageItemData = {
    get: ()=> JSON.parse(localStorage.getItem(ITEM_INFO_LOCAL_STORAGE_KEY)),
    set: (item)=> localStorage.setItem(ITEM_INFO_LOCAL_STORAGE_KEY, JSON.stringify(item)),
    delete: ()=> localStorage.removeItem(ITEM_INFO_LOCAL_STORAGE_KEY),
}

let userChoice

itemList.addEventListener("click", onItemListClick);
checkoutForm.addEventListener("submit", onCheckoutFormSubmit);

function onItemListClick(e) {
    const item = getItemBySelector(e.target);

    if (item) {
        if (e.target.classList.contains('buy-btn')) {
            userChoice = getItemName(item);
            showForm(setCitiesOnDatalist(cities, datalist));
            localStorageItemData.delete();
            clearInfoAboutItemDelivery();
        } 
    }
}

function onCheckoutFormSubmit(e) {
    e.preventDefault();
    clearErrors();
    const userData = getUserInfoFromForm(checkoutForm);
    localStorageItemData.set(userData);

    if(userData.errorFields.length === 0) {
        hideForm();
        resetForm();
        showInfoAboutItemDelivery(userChoice, userData.userInfo);
    } else {
        userData.errorFields.forEach(function(element){
            showErrorFromForm(element);
        });
    }
}

function getUserInfoFromForm(form) {
    const data = new FormData (form);
    const userInfo = {};
    const errorFields = [];

    for(const[name, value] of data) {
        if(!value.trim()){
            errorFields.push(name);
        } else {
            userInfo[name] = value;
        }
    }
    return {userInfo, errorFields};
}

function showErrorFromForm(name) {
    const error = document.createElement('li');
    error.style.color = "red";
    error.innerText = `вам потрібно заповнити поле з назвою ${name}`;
    errorsContainer.append(error);
}

function showInfoAboutItemDelivery(item, data) {
    const textInfo =  document.createElement('p');
    const ul = document.createElement("ul");
    
    textInfo.innerText = `Ви замовили ${item}`;
    itemInfo.append(textInfo);
    
    for (const key in data) {
        const li = document.createElement("li");
        li.innerText = `Your ${key} : ${data[key]} `;
        ul.appendChild(li);
    }    
    itemInfo.append(ul);
}

function clearInfoAboutItemDelivery() {
    itemInfo.innerHTML = '';
}

function clearErrors() {
    errorsContainer.innerHTML = '';
}

function setCitiesOnDatalist(cities, formDatalist) {
    cities.forEach(function(item){
        const option = document.createElement('option');
        option.value = item;
        formDatalist.appendChild(option);
     });
}

function getItemName(item) {
    const itemName = item.dataset.itemName;
    return itemName;
}

function getItemBySelector(el) {
    return el.closest('.item-block');
}

function getFormBySelector(el) {
    return el.closest('.checkout-form');
}

function showForm() {
    checkoutForm.style.display = "flex";
    itemList.style.display = "none";
    itemInfo.style.display = "none";
}

function hideForm() {
    checkoutForm.style.display = "none";
    itemList.style.display = "flex";
    itemInfo.style.display = "block";
}

function resetForm() {
    checkoutForm.reset();
}
