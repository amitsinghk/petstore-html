// find elements
var carousel = $(".carousel");

var options = {
  adaptiveHeight: true,
  arrows: false,
  dots: false,
  fade: true,
  infinite: true,
  mobileFirst: true,
  rows: 0,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
  zIndex: 75,
  autoplay: true,   
  autoplaySpeed: 3000  
};

var addAnimationClass = true;

carousel.on('beforeChange', function(e, slick, current, next) {
  var current = carousel.find('.slick-slide')[current];
  var next = carousel.find('.slick-slide')[next];
  var src = $(current).find('.carousel__image').attr('src');

  $(next).find('.carousel__slide__overlay').css('background-image', 'url("' + src + '")');
  
  
  if(addAnimationClass) {
    carousel.addClass('doAnimation');
    
    // so that adding the class only happens once
    addAnimationClass = false;
  }
});

carousel.not('.slick-initialized').slick(options);