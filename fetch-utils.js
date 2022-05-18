const SUPABASE_URL = 'https://zcwghasajjcnjalirtgv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpjd2doYXNhampjbmphbGlydGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTg5MTEsImV4cCI6MTk2Nzg3NDkxMX0.PABjBwN_OcjQPMnybnEw2Gb1TCQAlLw_oz348jM0rSw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchPosts() {
    const response = await client.from('posts').select('*');

    return response.data;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/create');
    }
}

export async function createNewPost(post) {
    const response = await client.from('posts').insert(post);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('/');
}