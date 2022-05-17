import { logout } from '../fetch-utils.js';

const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', async () => {
    await logout();
});