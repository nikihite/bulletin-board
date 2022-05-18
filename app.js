// import functions and grab DOM elements
import { signupUser, signInUser, redirectIfLoggedIn } from './fetch-utils.js';
// let state
const signupForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');

redirectIfLoggedIn();

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signupForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/some-other-page');
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('/some-other-page');
    }
});