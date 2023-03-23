const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#userName-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && password) {
        //need to add route for fetch
        const response = await fetch ('/api/users' , {
            method: 'POST',
            body: JSON.stringify({ name, password }),
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
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);