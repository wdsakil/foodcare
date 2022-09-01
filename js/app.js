//Navigation scripts
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const burger = document.querySelector('.fa-burger')
const backdrop = document.querySelector('.backdrop')

function deActivateNav() {
    nav.classList.remove('active')
    backdrop.classList.remove("active")
}
function activateNav() {
    nav.classList.add('active')
    backdrop.classList.add("active")
}
function deActivateNavIfActivated() {
    if (nav.classList.contains('active')) {
        deActivateNav()
        return
    }
}

burger.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        deActivateNav()
        return
    } else {
        activateNav()
    }
})

backdrop.addEventListener('click', () => {
    deActivateNavIfActivated()

})

nav.addEventListener('click', (e) => {
    if ((e.target.tagName == 'A') || (e.target.tagName == 'SPAN')) {
        deActivateNavIfActivated()
    }
})

// Sticky Header Codes

window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY > 0)
})