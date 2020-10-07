$('.js-tab').on('click', function () {
  $('.js-popular-slider').slick('destroy');

  $('.popular__tabs-item--active').removeClass('popular__tabs-item--active');
  $(this).addClass('popular__tabs-item--active');
  $(this).closest('.js-tabs').find('.js-tab-content').hide(0);
  $(this).closest('.js-tabs').find(`.js-tab-content[data-tab="${$(this).attr('data-tab')}"]`).fadeIn(300);

  initSlider();
});

$('.js-popular-more').on('click', e => {
  const $this = $(e.currentTarget);
  const text = $this.text();
  $this.parent().find('.popular__card-more').slideToggle(300);
  $this.text(text.toLowerCase() === 'подробнее' ? 'Свернуть' : 'Подробнее');
});

const initSlider = () => {
  $('.js-popular-slider').on('beforeChange', () => {
    $('.popular__card-more').slideUp(300);
    $('.js-popular-more').text('Подробнее');
  });
  
  $('.js-popular-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    dots: true,
    nextArrow: '<div class="popular__slider-arrow popular__slider-arrow--next"></div>',
    prevArrow: '<div class="popular__slider-arrow popular__slider-arrow--prev"></div>',
    customPaging: () => {
        return '<div class="poplar__slide-dot"></div>';
    },
  });
}

initSlider();