const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { 'Content-Type': 'application/json'},
        });
        
        if (response.ok) {
            // dont have profile page dont know if we need one yet. Might just do a redirect to main homepage
            document.location.replace('/layouts/main');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            // dont have profile page dont know if we need one yet. Might just do a redirect to main homepage
            document.location.replace('/layouts/main');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#logBtn').addEventListener('submit', loginFormHandler);
document.querySelector('#signBtn').addEventListener('submit', signupFormHandler);