// import functions and grab DOM elements
import { fetchPosts, logout } from './fetch-utils.js';
import { getUser } from './fetch-utils.js';

const postsElem = document.getElementById('posts');

// let state
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', async () => {
    await logout();
    window.location.href = '/some-other-page';
});

const authBtn = document.getElementById('auth');
authBtn.addEventListener('click', () => {
    window.location.href = './some-other-page';
});

const user = getUser();
if (user) {
    logoutBtn.classList.remove('hide');
} else {
    authBtn.classList.remove('hide');
}

async function loadData() {
    // load up all your posts
    const posts = await fetchPosts();
    // const myPost = data[0];
    // const createdAt = new Date(myPost.created_at);
    for (let post of posts) {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const h2 = document.createElement('h2');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h2.textContent = post.zodiac;
        h3.textContent = post.birthdate;
        h4.textContent = post.believe;
        p.textContent = post.contact;
        div.append(h2, h3, h4, p);
        div.classList.add('post');
        postsElem.append(div);
    }
}

loadData();