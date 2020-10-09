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
// ************************************************** Start Reservation Date Picker ******************************** //
$("input[name='date']").datepicker({
    showOtherMonths: false,
    selectOtherMonths: false,
    showButtonPanel: true
});
// ************************************************** End Reservation Date Picker ********************************** //
// ************************************************** Start Sticky Navbar On Scroll ******************************** //
window.addEventListener('scroll' , function() {
    var header = document.querySelector('.header-navbar');
    header.classList.toggle('sticky', window.scrollY > 550);
});
// ************************************************** End Sticky Navbar On Scroll ********************************** //
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
// ************************************************** Start Scroll To Top ****************************************** //
var scrollButton = $('.scroll-top');
$(window).scroll(function () {
    $(this).scrollTop() >= 400 ? scrollButton.fadeIn(500) : scrollButton.fadeOut(500);
});
// ScrollButton Click Action
scrollButton.click(function () {
    $('html,body').animate({scrollTop : 0}, 1500);
});
// ************************************************** End Scroll To Top ******************************************** //




var counter = function() {
		
    $('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.number').each(function(){
                var $this = $(this),
                    num = $this.data('number');
                    console.log(num);
                $this.animateNumber(
                  {
                    number: num,
                    numberStep: comma_separator_number_step
                  }, 7000
                );
            });
            
        }

    } , { offset: '95%' } );

}
counter();



