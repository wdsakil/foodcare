const navBtn = document.querySelector('.fa-burger')
const nav = document.querySelector('.nav')

navBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
})