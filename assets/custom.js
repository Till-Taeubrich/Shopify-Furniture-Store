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