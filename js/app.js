//Navigation scripts
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const burger = document.querySelector('.fa-burger')
const backdrop = document.querySelector('.backdrop')

function deActivateNav() {
    nav.classList.remove('active')
    backdrop.classList.remove("active")
}
function toggleNav(){
    header.classList.add('sticky')
    nav.classList.toggle('active')
    backdrop.classList.toggle("active")
}

burger.addEventListener('click', () => {
    toggleNav()
})

backdrop.addEventListener('click', () => {
    deActivateNav()
    
})

nav.addEventListener('click', (e) => {
    if ((e.target.tagName == 'A') || (e.target.tagName == 'SPAN')) {
        deActivateNav()
    }
})

// Sticky Header Codes

window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY > 0)
})

// Hero Scripts

let parallaxSliderOptions = {
    

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".hero .pagination",
        clickable: true,
    }
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 400,
    effect: 'slide',
    autoplay: {
        delay:3000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

//   Under Development
function underDevelopment(){
    document.querySelector('#under-development').classList.toggle('active')
    backdrop.classList.toggle('active')

    if(backdrop.classList.contains('active')){
    document.querySelectorAll('#under-development .btn').forEach(e => e.addEventListener('click',(underDevelopment)))
}
}
const addToCartBtns = document.querySelectorAll('.btn.add-to-cart')
for (const btn of addToCartBtns){
    btn.addEventListener('click', underDevelopment)
}
// To close Under-development


