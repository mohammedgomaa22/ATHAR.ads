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
