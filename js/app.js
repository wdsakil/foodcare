//Navigation scripts
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const burger = document.querySelector('.fa-burger')
const backdrop = document.querySelector('.backdrop')

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

// Sticky Header Codes

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
})


//   Under Development
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
// preloader
onload = (e) => {
    const preloader = document.querySelector('.pre-loader')
    preloader.classList.add('hidden')

    // Hero Carousel
    var swiper = new Swiper(".mySwiper", {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        parallax: true,
        centerSlides: true,
        autoplay: {
            delay: 3000
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
    });
};


