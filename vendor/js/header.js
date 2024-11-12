const modalLogin = document.querySelector('.modal-login');
const closeButton = document.querySelectorAll('.block-close');
const forgotPassword = document.querySelector(".modal-forgot");
function openModal() {
    overlayBlack.classList.add('active');
    modalLogin.classList.add('show')
}
function closeModal() {
    overlayBlack.classList.remove('active');
    modalLogin.classList.remove('show');
    forgotPassword.classList.remove('show')
}
document.querySelector('.header-modal.login').addEventListener('click',openModal)
overlayBlack.addEventListener("click",closeModal)
closeButton.forEach(button => {
    button.addEventListener("click",closeModal)
});

document.querySelector('#forgot-password').addEventListener("click",function() {
    modalLogin.classList.remove('show');
    document.querySelector(".modal-forgot").classList.add('show');
})