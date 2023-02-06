const postForm = document.getElementById("post-form");
const postIdValue = document.getElementById("id-value");
const postArea = document.getElementById("post-area");
const input = document.getElementById("id-value");

const server = 'https://jsonplaceholder.typicode.com/posts/'

postForm.addEventListener("submit", onPostFormSubmit)

function onPostFormSubmit(e){
    e.preventDefault()

    clearWall()

    const userPostValue = postIdValue.value 

    if (validId(userPostValue)){
        const postPromise = fetch(`${server}${userPostValue}`);
        const commentPromise = fetch(`${server}${userPostValue}/comments`);

        Promise.allSettled([postPromise, commentPromise])
        .then(([postRes, commentRes]) => {
            {postRes = postRes.value.json(), commentRes = commentRes.value.json()}
            postRes.then(el => showPost(el)).then(commentRes.then(el => addComments(el)));
        })
        .then(clearInput)
    }
}

function addComments(comments) {
    const commentsBtn = document.getElementById("comments-btn");

    commentsBtn.addEventListener('click', () => {
        showComments(comments)
    })
}

function validId(id){
    if (!isNaN(id)){
        return id
    } else {
        alert(`${id} do not valid`)
    }

}

function showPost(post) {
    const div = document.createElement("div")
    const btn = document.createElement("button")

    btn.id = "comments-btn";

    const divTitle = document.createElement("h2")
    const divBody = document.createElement("p")

    const divTitleText = document.createTextNode(`${post.title}`);
    const divBodyText = document.createTextNode(`${post.body}`);

    const btnText = document.createTextNode('Показати кометарі');

    divTitle.appendChild(divTitleText)
    divBody.appendChild(divBodyText)

    div.appendChild(divTitle)
    div.appendChild(divBody)

    btn.appendChild(btnText)

    postArea.appendChild(div)
    postArea.appendChild(btn)
}  

function showComments(comments) {
    const ul = document.createElement("ul")

    for(i = 0; i < comments.length; i++){
        const li = document.createElement("li")

        const user = document.createElement("h2")
        const text = document.createElement("p")

        const userEmail = document.createTextNode(`${comments[i].email}`);
        const commentText = document.createTextNode(`${comments[i].body}`);

        user.appendChild(userEmail)
        text.appendChild(commentText)

        li.appendChild(user)
        li.appendChild(text)

        ul.appendChild(li)
    } 
    postArea.appendChild(ul)
}  

function clearInput() {
    input.value = '';
}

function clearWall() {
    postArea.innerHTML = '';
}







