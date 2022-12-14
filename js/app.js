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
        nextEl: '.swiper-nav .fa-chevron-right',
        prevEl: '.swiper-nav .fa-chevron-left',
    },
})
// -------------------------
// ---------Others---------
// -------------------------

// ---------Basic Functions

// Remove Class by Initial letters / prefix
function removeClassesByPrefix(el, prefix)
{
    for(var i = el.classList.length - 1; i >= 0; i--) {
        if(el.classList[i].startsWith(prefix)) {
            el.classList.remove(el.classList[i]);
        }
    }
}

// Medium Zoom
mediumZoom('.zoomable', {
    background: '#0009'
})

// --Review section Images full height on zoomed in
// --and keep aspect ratio after zooming out

const reviewImgs = document.querySelectorAll('.review-img')
for (const img of reviewImgs) {
    img.addEventListener('click', () => {
        img.style.aspectRatio = "auto"

        setTimeout(() => {
            const bigImg = document.querySelector('.medium-zoom-image--opened')
            bigImg.addEventListener('click', () => {
                reviewImgs.forEach((e) => {
                    e.style.aspectRatio = "5 / 3"
                })
            })
        }, 100)
    })
}


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

// Discount Banner
const pricings = document.querySelectorAll('.specials .card .pricing')
for (const pricing of pricings) {
    const oldPrice = Number(pricing.querySelector('.old').textContent)
    const newPrice = Number(pricing.querySelector('.new').textContent)
    const discount = Math.round(((oldPrice - newPrice) / oldPrice) * 100)
    if (discount >= 40) {
        const banner = document.createElement("div")
        banner.className = 'banner'
        banner.innerHTML = discount + '% Discount'
        pricing.parentElement.appendChild(banner)
    }
}

// Review Image Margin issue
const reviewQuote = document.querySelectorAll('.reviews .quote')

for (const quote of reviewQuote) {
    if (quote.previousElementSibling === null) {
        quote.style.marginTop = 0
    }
}

// Review Card grid row spans

const reviewCards = document.querySelectorAll('.reviews .card')

if (window.innerWidth >= 600) {
    for (const card of reviewCards) {
        card.classList.add('grsn' + Math.round(card.offsetHeight / 16))
    }
}

window.addEventListener('resize', (e) => {
    if (window.innerWidth >= 600) {
        for (const card of reviewCards) {
            card.classList.add('grsn' + Math.round(card.offsetHeight / 16))
        }
    } else if (window.innerWidth < 600) {
        for (const card of reviewCards) {
            removeClassesByPrefix(card, 'grsn')
        }
    }
})