$(document).ready(function(){

$('.js--section-features').waypoint(function(direction){
                         if  (direction=="down"){$('nav').addClass('sticky');
                                                }else{
                             $('nav').removeClass('sticky');
                         }           
                                      }, {
  offset: '8%'
});
$('.js--scroll-to-plan').click(function(){
    $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
});
$('.js--scroll-to-start').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);
});


    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
    /*===== animations on scroll ====== */
    $('.js-wp-1').waypoint(function(direction){
        $('.js-wp-1').addClass('animated fadeIn');  
    },{offset:'50%'});
    
    $('.js-section-cities').waypoint(function(direction){
        $('.js-section-cities').addClass('animated fadeIn');  
    },{offset:'50%'});    
    $('.js-iphone').waypoint(function(direction){
        $('.js-iphone').addClass('animated fadeInUp');
    },{offset:'75%'});
    $('.plan-box').waypoint(function(direction){
        $('.js-plan-box').addClass('animated pulse');
    },{offset:'50%'});
    $('.js-nav-icon').click(function(){
        var nav=$('.js-main-nav');

        nav.slideToggle(200);
        var icon=$('.js-nav-icon i');
        
        if(icon.hasClass('ion-md-map')){
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-map');
        }else{
            icon.addClass('ion-md-map');
            icon.removeClass('ion-md-close');
            
        }
    });
    
    
    
});