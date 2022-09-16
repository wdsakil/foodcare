// -------------------------
// -----Header scripts------
// -------------------------
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const burger = document.querySelector('.fa-burger')
const backdrop = document.querySelector('.backdrop')


// Sticky Header Codes
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
})

// Navigation Scripts
function deActivateNav() {
    nav.classList.remove('active')
    backdrop.classList.remove("active")
}
function toggleNav() {
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

// preloader
setTimeout(function () {
    const preloader = document.querySelector('.pre-loader')
    preloader.classList.add('hidden')
}, 1000);

// -------------------------
// --------Carousels--------
// -------------------------

// Hero Carousel Options
const heroParallaxOptions = {
    speed: 400,
    spaceBetween: 0,
    loop: true,
    parallax: true,
    centerSlides: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        init: function () {
            let swiper = this
            for (let i = 0; i < swiper.slides.length; i++) {
                let bgImg = swiper.slides[i].querySelector('.bg-img')
                bgImg.setAttribute("data-swiper-parallax", 0.75 * swiper.width)
                let texts = swiper.slides[i].querySelector('.content')
                texts.setAttribute("data-swiper-parallax", 0.65 * swiper.width)
            }
        }
    }
}

// Hero Carousel 
var heroSwiper = new Swiper(".hero", heroParallaxOptions);
var specialsSwiper = new Swiper(".specials .mySwiper", {
    slidesPerView: "auto",
    // spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-nav .fa-circle-chevron-right',
        prevEl: '.swiper-nav .fa-circle-chevron-left',
    },
})
// -------------------------
// ---------Others---------
// -------------------------

// Medium Zoom
mediumZoom('.zoomable', {
    margin: header.clientHeight - 10,
    background: '#000'
})

// add to cart under development
function underDevelopment() {
    document.querySelector('#under-development').classList.toggle('active')
    backdrop.classList.toggle('active')

    if (backdrop.classList.contains('active')) {
        document.querySelectorAll('#under-development .btn').forEach(e => e.addEventListener('click', (underDevelopment)))
    }
}
const addToCartBtns = document.querySelectorAll('.btn.add-to-cart')
for (const btn of addToCartBtns) {
    btn.addEventListener('click', underDevelopment)
}

// Specials Category Picker
const categoryPicker = document.querySelector('.category-picker')

categoryPicker.addEventListener('click', (e) => {
    const optionParent = categoryPicker.querySelector('.options')

    categoryPicker.classList.toggle('active')
    if (optionParent.contains(e.target)) {
        const cards = document.querySelectorAll('.cards.mySwiper')

        // Change Picker Placeholder
        categoryPicker.firstElementChild.textContent = e.target.textContent
        // Change Content
        cards.forEach((el) => {
            el.classList.remove('active')
            if (el.dataset.index === e.target.dataset.index) {
                el.classList.add('active')
            }
        })
    }
})