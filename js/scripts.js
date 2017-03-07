$(document).ready(function () {

  $(document).on('scroll', changeActiveSection);

  $('a[href^="#"').on('click', function (e) {
    e.preventDefault();

    let elementId = this.hash;
    $('html, body').animate({
      scrollTop: $(elementId).offset().top
    }, 1000);
    
  });

});

function changeActiveSection(e) {
  let scrollPosition = $(document).scrollTop();
  const home = $('#home').scrollTop();
  const portfolio = $('#portfolio').position().top - 110;
  const contact = $('#contact').position().top - 110;

  if (scrollPosition >= contact) {
    $('.nav li').removeClass('active');
    $('.contact-nav').addClass('active');
  } else if (scrollPosition >= portfolio) {
    $('.nav li').removeClass('active');
    $('.portfolio-nav').addClass('active');
  } else {
    $('.nav li').removeClass('active');
    $('.home-nav').addClass('active');
  }
}
