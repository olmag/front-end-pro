const titleText = document.getElementById("title__text");
const titlePic = document.getElementById("title__pic");
const titleInput = document.getElementById("title__input");

titleInput.addEventListener('mouseover',(e) => {
    titlePic.classList.remove('hide')     
})
titleInput.addEventListener('mouseout', () => {
    titlePic.classList.add('hide')     
})

titleText.addEventListener('mouseover', () => {
    titlePic.classList.remove('hide')     
})

titleText.addEventListener('mouseout', () => {
    titlePic.classList.add('hide')     
})