/*wow, console global*/
$(document).ready(function () {
  //accordion
  $('.hide:first').css('display', 'block');
  $('.acordion').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $(this).next().slideToggle(500).siblings('.hide').slideUp(500);
  })

  //countTo Numper plugin
  $('.count-1 span').counterUp({
    delay: 30,
    time: 5000,
    offset: 70,
    formatter: function (n) {
      return n.replace(/,/g, '.');
    }
  });

  $(this).scrollTop(0);
  setTimeout(() => {
    $('.loading-spinn').fadeOut('slow');
    $(' html, body').css({
      overflow: 'auto'
    });
  }, 2000);
});


new WOW().init();