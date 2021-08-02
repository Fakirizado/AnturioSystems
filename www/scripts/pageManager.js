$(document).ready(function () {
      $(".menu-icon").on("click", function () {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on("scroll", function () {
      if ($(window).scrollTop()) {
            $('nav').addClass('black');
      }

      else {
            $('nav').removeClass('black');
      }
});

$(window).resize(function(){
      resizePhone();
});

$(document).ready(function(){
      resizePhone();
});

function resizePhone(){
      if($(window).width() < 780)
      {
          $("#items_to_move").insertAfter("#support_div");
          console.log("deu")
      }
  }