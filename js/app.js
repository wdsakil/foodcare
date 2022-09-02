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
    header.classList.add('sticky')
    nav.classList.add('active')
    backdrop.classList.add("active")
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
    // speed: 1000,
    // autoplay: true,
    // parallax: true,
    // loop: true,
    // pagination: {
    //     el: '.hero .pagination',
    //     dynamicBullets: true,
    //     clickable: true
    // },
    // navigation: {
    //     nextEl: '.slider-prlx .parallax-slider .next-ctrl',
    //     prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
    // }

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".hero .pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
      
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 300,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });