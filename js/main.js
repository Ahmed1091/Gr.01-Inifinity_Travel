
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




// var counter = function() {
		
//     $('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

//         if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

//             var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
//             $('.number').each(function(){
//                 var $this = $(this),
//                     num = $this.data('number');
//                     console.log(num);
//                 $this.animateNumber(
//                   {
//                     number: num,
//                     numberStep: comma_separator_number_step
//                   }, 7000
//                 );
//             });
            
//         }

//     } , { offset: '95%' } );

// }
// counter();



