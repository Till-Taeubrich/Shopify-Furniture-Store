// video-section
$('.box-one > .header').click(function (e) {
  $(e.target).parent().addClass('active');
  $('.box-one > .header > .indicator').html('-');
  $('.box-two > .header > .indicator').html('+');
})


$('.box-two > .header').click(function () {
  $('.box-one').removeClass('active');
  $('.box-one > .header > .indicator').html('+');
  $('.box-two > .header > .indicator').html('-');
});

// product-section
$('#Slider-template--15579679981747__16500169001f3e140d').hover(function () {
    $('.product-buttons').addClass('visible')
  }, function () {
    $('.product-buttons').removeClass('visible')
  }
);
