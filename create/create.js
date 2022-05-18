import { createNewPost } from '../fetch-utils.js';

const form = document.getElementById('new-post');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newPost = {
        zodiac: data.get('zodiac'),
        birthdate: data.get('birthdate'),
        believe: data.get('believe'),
    };
    const resp = await createNewPost(newPost);
    console.log(resp);
});

