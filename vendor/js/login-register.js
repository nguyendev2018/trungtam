const passwordField = document.getElementById('password');
const togglePasswordButton = document.getElementById('toggle-password');
togglePasswordButton.addEventListener('click', function () {
    const currentType = passwordField.getAttribute('type');
    if (currentType === 'password') {
        passwordField.setAttribute('type', 'text');
        togglePasswordButton.classList.add("show-password")
    } else {
        passwordField.setAttribute('type', 'password');
        togglePasswordButton.classList.remove("show-password")
    }
});