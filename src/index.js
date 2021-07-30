const imageUrl = "http://localhost:3000/images/1"
const fgTitle = el("fg-title");
const fgImage = el("fg-image");
const fgLikes = el("fg-likes");
const fgComments = el("fg-comments");
const likeButton = el("fg-like-button");
const commentForm = el("fg-comment-form");

let likes = 0;

likeButton.addEventListener("click", () => {
    likes += 1;
    renderLikes();
});


commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addComment(e.target.comment.value);
    e.target.comment.value = '';
});

fetch(imageUrl)
.then ((res) => res.json())
.then(renderImage);


function renderImage(data) {
    fgTitle.innerText = data.title;
    fgImage.src = data.image;
    likes = data.likes;
    renderLikes();
    setComments(data.comments);
}

function renderLikes(){
    fgLikes.innerText = `${likes} Likes`;
}

function setComments(comments) {
    fgComments.innerHTML = "";
    comments.forEach((comment) => addComment(comment.content));
}


function addComment(comment) {
    const li = document.createElement("li");
    li.innerText = comment;
    fgComments.append(li);
}

function el(id) {
    return document.getElementById(id);
}
// function placeImg (data){
//     document.getElementById("fg-image").src= data.image
    
// }


// const likeBtn = document.querySelector('.like-button')
// const spn = document.querySelector('.likes')
// likeBtn.addEventListener('click', () => {
//     spn.innerHTML = '1 like'
// })

// const commentForm = document.querySelector('.comment-form')
// commentForm.addEventListener('submit', addComment)

// function addComment(e) {
//     e.preventDefault();
//     const commentText = e.target.comment.value
//     const commentList = document.querySelector('.comments')

//     const newComm = document.createElement('li')
//     newComm.innerHTML = commentText;
//     commentList.append(newComm);
// }