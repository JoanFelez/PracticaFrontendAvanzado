export const loginMenu = () => {
    let working = false;
    const loginContainer = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const loginSpan = document.getElementById('state');

    loginButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        loginContainer.classList.remove('inactive');
    });

    document.addEventListener('click', function(evt) {
        evt.preventDefault();
        const formElements = ['login-form', 'login-button', 'state-button', 'form-link', 'pass-icon', 'pass-input', 'user-icon', 'user-input', 'form-title', 'login-header', 'state-span', 'state-spinner'];
        if (formElements.includes(evt.target.id) == false) {
            loginContainer.classList.add('inactive');
        }
    });

    document.getElementById('close-button').addEventListener('click', function(evt) {
        evt.preventDefault();
        loginContainer.classList.add('inactive');
    });

    loginButton.addEventListener('submit', function(e) {
        e.preventDefault();
        if (working) return;
        working = true;
        loginContainer.classList.toggle('loading');
        loginSpan.innerHTML = 'Authenticating';
        setTimeout(function() {
            loginContainer.classList.toggle('ok');
            loginSpan.innerHTML = 'Welcome back!';
            setTimeout(function() {
                loginSpan.innerHTML = 'Log in';
                loginContainer.classList.toggle('loading');
                loginContainer.classList.toggle('ok');
                working = false;
            }, 4000);
        }, 3000);
    });
};

export default loginMenu;
