

let slideIndex = 1;
showSlides(slideIndex);

$(document).keydown(function(e) {
    if (e.which == 37 || 38) {
        plusSlides(-1);
    } else if (e.which == 39 || 40) {
        plusSlides(1);
    }
});

function showSlides(n) {
    let slides = $('.testimonial-slide');
    if (n > slides.length) { 
        slideIndex = 1;
        n = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
        n = slides.length;
    }
    $('.testimonial-slide').each(function(){
        $(this).removeClass('display');
    })
    $(`.testimonial-slide:nth-child(${n})`).addClass("display");
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}