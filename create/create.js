import { createNewPost, checkAuth, logout } from '../fetch-utils.js';

const form = document.getElementById('new-post');

checkAuth();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newPost = {
        zodiac: data.get('zodiac'),
        birthdate: data.get('birthdate'),
        believe: data.get('believe'),
        contact: data.get('contact'),
    };
    const resp = await createNewPost(newPost);
    console.log(resp);
});

const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', async () => {
    await logout();
});