$(document).ready(function () {

  $(document).on('scroll', changeActiveSection);

  $('a[href^="#"').on('click', function (e) {
    e.preventDefault();

    let elementId = this.hash;
    $('html, body').animate({
      scrollTop: $(elementId).offset().top
    }, 1000);
    
  });

  $(function() {
    var form = $('#ajax-contact');
    var formMessages = $("#form-messages");

    $(form).submit(function(event) {
      event.preventDefault();
      var formData = $(form).serialize();

      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData
      })

      .done(function(response) {
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        $(formMessages).text(response);

        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
      })

      .fail(function(data) {
        $(formMessages).removeClass('success');
        $(formMessages.addClass('error'));

        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text("An error has occured and your message could not be sent.");
        }
      });
    });
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
