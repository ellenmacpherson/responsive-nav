$(document).ready(function() {
  $(".topnav").hide();
  $("#cross").hide();

    $('.mobile-menu').hide();
    $('.desktop-menu').show();

    $('#menu-text').click(function() {
      $(".topnav").slideToggle("slow");
      $("#cross").show();
      $("#menu-text").hide();
    })

    $("#cross").click(function() {
      $(".topnav").slideToggle("slow");
      $("#menu-text").show();
      $("#cross").hide();
    });

  if ($(window).width() <= 800) {
    $('.mobile-menu').show();
    $('.desktop-menu').hide();

    $('#hamburger').click(function() {
      $(".topnav").slideToggle("slow");
    });
  }

});
