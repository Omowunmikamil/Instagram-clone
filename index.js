const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const layout = document.getElementById("layout");

layout.innerHTML = "";

for (let i = 0; i < posts.length; i++) {
    layout.innerHTML += `
        <div class="card">
            <div class="user-info">
                <img class="user-avatar" src="${posts[i].avatar}" alt="${posts[i].name}">
                <div class="info">
                    <p class="avatar-name">${posts[i].name}</p>
                    <p class="user-location">${posts[i].location}</p>
                </div>
            </div>
            <img class="post" src="${posts[i].post}" alt="${posts[i].name}">
            <div class="reactions">
                <i class="fa-regular fa-heart toggle toggle-like"></i>
                <i class="fa-regular fa-comment toggle toggle-comment"></i>
                <i class="fa-regular fa-paper-plane toggle share"></i>
            </div>
            <p class="interaction-likes">${posts[i].likes} likes</p>
            <div class="comments">
                <p class="comment-message"><span class="avatar-username">${posts[i].username}</span>${posts[i].comment}</p>
            </div>
        </div>
    `
}

document.addEventListener("DOMContentLoaded", function() {
    const likeIcons = document.querySelectorAll(".toggle-like");
    const interactionLikes = document.querySelectorAll(".interaction-likes");
    const post = document.querySelectorAll(".post");
    
    likeIcons.forEach((icon, index) => {
        icon.addEventListener("click", function() {
            posts[index].likes += 1
            interactionLikes[index].innerText = `${posts[index].likes} Likes`
        })
    })
    
    post.forEach((postClick, index) => {
        postClick.addEventListener("dblclick", function() {
            posts[index].likes += 1
            interactionLikes[index].innerText = `${posts[index].likes} Likes`
        })
    })
})
