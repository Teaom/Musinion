// Collects login info and pushes it to back end to compare to data (including hashed password)
const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({ username: username, password: password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert("Invalid username or password");
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);