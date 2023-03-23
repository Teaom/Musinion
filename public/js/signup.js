const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (username && password) {
        //need to add route for fetch
        const response = await fetch ('/api/user' , {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
            document.location.reload()
        } else {
            alert("Account couldn't be created");
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);