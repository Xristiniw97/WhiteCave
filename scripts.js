(function($){

    var isNotMobile = window.matchMedia("only screen and (min-width: 768px)");
    
    var $item = $('.carousel .carousel-item'); 
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    
 if (isNotMobile.matches) {
     
    $item.height($wHeight); 
    $item.addClass('full-screen');
    
    $('.carousel img').each(function() {
      var $src = $(this).attr('src');
      var $color = $(this).attr('data-color');
      $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
      });
      $(this).remove();
    });
    
    $(window).on('resize', function (){
      $wHeight = $(window).height();
      $item.height($wHeight);
    });
    
}else{
      $('.carousel img').each(function() {
          $(this).addClass('img-fluid');

    }); 

}


$('.suites-owl').owlCarousel({
    loop:false,
    margin:25,
    nav:false,
    dots:false,
    responsive:{
        0:{
            dots:true,
            items:1
        },
        400:{
          dots:true,
          items:1
        },
        700:{
            dots:true,
            items:1
        },
        701:{
            dots:true,
            items:2
        },      
        1199:{
            dots:true,
            items:2
        } ,
        1200:{
            dots:false,
            items:3
        } 
    }
  });

  $('.suites-owl2').owlCarousel({
    loop:false,
    margin:25,
    nav:false,
    dots:false,
    responsive:{
        0:{
            dots:true,
            items:1
        },
        400:{
          dots:true,
          items:1
        },
        700:{
            dots:true,
            items:1
        },
        701:{
            dots:false,
            items:2
        },      
        1199:{
            dots:false,
            items:2
        } ,
        1200:{
            dots:false,
            items:2
        } 
    }
  });

})(jQuery);