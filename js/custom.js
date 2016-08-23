$('.pagination__link').click(function(){
  $('.pagination__link').removeClass('pagination__link_active');
  $(this).addClass('pagination__link_active');
});

$('.menu__link').click(function(){
  $('.menu__link').removeClass('menu__link_active');
  $(this).addClass('menu__link_active');
});