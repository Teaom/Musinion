const loginFormHandler = async (event) => {
    event.preventDefualt();

const userName = document.querySelector('#userName-login').value.trim();
const password = document.querySelector('#password-login').value.trim();

if (userName && password) {
    //need to add route for fetch
    const response = await fetch('/api/users/login' , {
        method: 'post',
        body: JSON.stringify({ userName, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
}
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);