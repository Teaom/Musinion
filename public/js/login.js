const loginFormHandler = async (event) => {
    event.preventDefault();

const username = document.querySelector('#login-username').value.trim();
const password = document.querySelector('#login-password').value.trim();

if (username && password) {
    //need to add route for fetch
    const response = await fetch('/api/user/login' , {
        method: 'post',
        body: JSON.stringify({ username: username, password: password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
        document.location.reload()
    } else {
        alert("Invalid username or password");
    }
}
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);