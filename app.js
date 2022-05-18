// import functions and grab DOM elements
import { fetchPosts, logout } from './fetch-utils.js';

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


async function loadData() {
    // load up all your posts
    const posts = await fetchPosts();
    // const myPost = data[0];
    // const createdAt = new Date(myPost.created_at);
    for (let post of posts) {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const h2 = document.createElement('h2');
        h2.textContent = post.zodiac;
        p.textContent = post.birthdate;
        div.append(h2, p);
        div.classList.add('post');
        postsElem.append(div);
    }
}

loadData();