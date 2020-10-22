// ************************************************** Start Swiper Header Slider ************************************ //
var swiper = new Swiper('.swiper-header .swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop:true,
    speed:2000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-header .swiper-button-next',
        prevEl: '.swiper-header .swiper-button-prev',
    },
});
// ************************************************** End Swiper Header Slider ************************************* //
// ************************************************** Start Owl-Carousel Top Offers ******************************** //
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1200:{
            items:3
        }
    },
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
})
// ************************************************** End Owl-Carousel Top Offers ********************************** //


// ************************************************** Start Swiper Best Destenation Slider ************************* //
var swiper = new Swiper('.best-destinations .swiper-container', {
    effect: 'coverflow',
    grabCursor: false,
    speed:2000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    centeredSlidesBounds:true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    navigation: {
        nextEl: '.best-destinations .swiper-button-next',
        prevEl: '.best-destinations .swiper-button-prev',
    },
});
// ************************************************** End Swiper Best Destenation Slider *************************** //