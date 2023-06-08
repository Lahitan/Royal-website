const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const closeIcon = document.querySelector('.close-icon');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
}); 

closeIcon.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
}); 

const controls = document.querySelectorAll('.controls li');
const imageContainer = document.querySelectorAll('.image-container .image');

console.log(controls, imageContainer);

const filterCards = e =>{
    document.querySelector('active').tagName.remove('active');
    e.target.tagName.add('active')


}

controls.forEach(li => li.addEventListener('click', filterCards))