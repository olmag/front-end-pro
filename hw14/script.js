const USER_LOCAL_STORAGE_KEY = 'user';

const userForm = document.getElementById("login-user-form");
const preloader = document.getElementById("preloader");
const signOutBtn = document.getElementById("sign-out-btn");

addEventListener('popstate', readingHrefState)
readingHrefState();

function readingHrefState() {
    const { href } = location;

    switch(true) {
        case href.includes('login-page.html'): {
            userForm.addEventListener('submit', onLoginFormSubmit)
            break
        }
        case href.includes('user-page.html') :{
            signOutBtn.addEventListener('click', goToPreviousPage)
            showUserLoginData();
            showInfoAboutScreen();
            break
        }
    }
}

function onLoginFormSubmit(e) {
    e.preventDefault();
    setUserDataToLocalStorage( getUserLoginData());
    showUserLoginData()
    window.setTimeout(goToSecondPage, 2000);
    showPreloader();
    resetForm();
}

function goToSecondPage() {
    window.location.href = 'user-page.html'
}

function resetForm() {
    userForm.reset()
}

function showPreloader() {
    userForm.style.display = "none";
    preloader.style.display = "inline-block";
}

function  getUserLoginData() {
    const login = userForm.elements['user-form__login'].value;
    const password = userForm.elements['user-form__password'].value;

    return { login, password };
}

function showUserLoginData() {
   const user = getUserDataFromLocalStorage();
    console.log(`login:${user.login}, password:${user.password}`);
}

function showInfoAboutScreen() {
    console.log("screenWidth", window.screen.width);
    console.log('screenHeight',window.screen.height);
}

function goToPreviousPage() {
    history.back()
    deleteUserDataFromLocalStorage()
}

function setUserDataToLocalStorage(user) { 
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}

function getUserDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem(USER_LOCAL_STORAGE_KEY));
}

function deleteUserDataFromLocalStorage() {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}
