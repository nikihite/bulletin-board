import { redirectIfLoggedIn, signupUser, signInUser } from '../fetch-utils.js';

const signupForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');

redirectIfLoggedIn();

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signupForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/create');
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/create');
    }
});