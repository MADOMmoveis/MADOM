/* swiper start */
var swiper = new Swiper( '.swiper-container.two', {
  autoplay: 2500,
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

  }
} );

var swiper2 = new Swiper( '.ratedslider', {
  loop: true,
  centeredSlides: true,
  slidesPerView: '7',
  effect: 'coverflow',
  coverflow: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1.5,
    slideShadows : false,
  }

} );


/* swiper end */
