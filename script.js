const createPostBtn = document.getElementById('createPostBtn');
const postModal = document.getElementById('postModal');
const closeBtn = document.getElementsByClassName('close')[0];
const postSubmitBtn = document.getElementById('postSubmitBtn');
const feed = document.getElementById('feed');
const postCaption = document.getElementById('postCaption');
const postImage = document.getElementById('postImage');

// Open modal on create post button click
createPostBtn.onclick = function() {
    postModal.style.display = 'block';
}

// Close modal on close button click
closeBtn.onclick = function() {
    postModal.style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target == postModal) {
        postModal.style.display = 'none';
    }
}

// Create new post
postSubmitBtn.onclick = function() {
    const post = document.createElement('div');
    post.classList.add('post');

    const caption = document.createElement('p');
    caption.textContent = postCaption.value;

    const image = document.createElement('img');
    image.src = URL.createObjectURL(postImage.files[0]);
    image.alt = 'Posted Image';

    post.appendChild(caption);
    post.appendChild(image);

    feed.appendChild(post);

    postModal.style.display = 'none';
    postCaption.value = '';
    postImage.value = '';
}
