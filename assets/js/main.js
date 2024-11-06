// ***************************************************
// Preloader
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("preloader");
    window.addEventListener("load", function () {
        setTimeout(function () {
            loader.classList.add("opacity-0");
            setTimeout(function () { 
                loader.classList.add("hidden");
            } , 200);
            
        }, 1500);
    });
});

// ***************************************************
// Typed js

function typedJs(title = "اثر.ادس - ATHAR.ads", description = "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة") {
    
    var typed1 = new Typed('#typed_title', {
        strings: [
            title
        ],
        delay: 3000,
        typeSpeed: 40,
        backSpeed: 15,
        loop: false,
        cursorChar: ''
    });
    var typed2 = new Typed('#typed_desc', {
        strings: [
            description
        ],
        typeSpeed: 40,
        backSpeed: 20,
        loop: false,
        cursorChar: ''
    });
}
typedJs();

// ***************************************************
// <!-- Initialize Swiper -->

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// ********** Swiper Images **********
const swiperJS = () => {
    const swiper = new Swiper( '.swiper-container.two', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows : false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }         
    } );
};
swiperJS();

// ***************************************************

const openVideo = () => {
    const model = document.getElementById("model");
    const getVideo = document.querySelectorAll("[data-getVideo]");
    const setVideo = document.querySelector("[data-setVideo]");
    document.querySelector("[data-close]").addEventListener("click", () => {
        setVideo.pause();
        setVideo.removeAttribute("src");
        model.style.display = "none";
    });

    getVideo.forEach((vid) => {
        vid.addEventListener("click", () => {
            setVideo.setAttribute("src", vid.getAttribute("src"));
            setVideo.play();
            model.style.display = "flex";
        })
    })
    
};
openVideo();
