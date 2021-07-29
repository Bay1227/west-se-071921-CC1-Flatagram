
const imgUrl = 'http://localhost:3000/images/1'
fetch('http://localhost:3000/images/1')
.then (resp => resp.json())
.then((data) => placeImg(data));
function placeImg (data){
    document.getElementById("fg-image").src= data.image
    
}


const likeBtn = document.querySelector('.like-button')
const spn = document.querySelector('.likes')
likeBtn.addEventListener('click', () => {
    spn.innerHTML = '1 like'
})

const commentForm = document.querySelector('.comment-form')
commentForm.addEventListener('submit', addComment)

function addComment(e) {
    e.preventDefault();
    const commentText = e.target.comment.value
    const commentList = document.querySelector('.comments')

    const newComm = document.createElement('li')
    newComm.innerHTML = commentText;
    commentList.append(newComm);
}