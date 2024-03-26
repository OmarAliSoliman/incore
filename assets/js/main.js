$(document).ready(function () {
  var currentDir = $("body").css("direction");
  console.log(currentDir);

  if ($(".nice_select").length) {
    $(".nice_select").niceSelect();
  }

  if ($(".years_exp_slider").length) {
    $(".years_exp_slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 5000,
      infinite: true,
      loop: true,
      autoplaySpeed: 100,
      centerMode: false,
      autoplay: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.1,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".customers_say_slider").length) {
    $(".customers_say_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 500,
      infinite: true,
      loop: true,
      autoplaySpeed: 120000,
      centerMode: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    });
  }

  if($(".brands_mobile_slider").length){
    $(".brands_mobile_slider").slick({
      speed: 5000,
      infinite: true,
      loop: true,
      autoplaySpeed: 100,
      centerMode: false,
      autoplay: true,
      cssEase: "linear",
    })
  }

  if ($(".custom_navbar").length) {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $(".custom_navbar").addClass("fixed_navbar");
      } else {
        $(".custom_navbar").removeClass("fixed_navbar");
      }
    });
  }
  if ($(".mobile_header").length) {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 20) {
        $(".mobile_header").addClass("fixed_navbar");
      } else {
        $(".mobile_header").removeClass("fixed_navbar");
      }
    });
  }

  if ($("#phone").length) {
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js",
      initialCountry: "ae",
      showSelectedDialCode: true,
    });
  }

  if ($("#phone2").length) {
    const input = document.querySelector("#phone2");
    window.intlTelInput(input, {
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.16/build/js/utils.js",
      initialCountry: "ae",
      showSelectedDialCode: true,
    });
  }

  // promising_cards_slider
  if ($(".promising_cards_slider").length) {
    $(".promising_cards_slider").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 300,
      infinite: true,
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3.3,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.4,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.3,
            centerMode: true,
          },
        },
        {
          breakpoint: 325,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          },
        },
      ],
    });
  }

  if ($(".why_have_over_slider").length) {
    $(".why_have_over_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      infinite: true,
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      cssEase: "linear",
    });
  }

  if ($(".features_slider").length) {
    $(".features_slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      infinite: true,
      loop: true,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            // centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".blog_article_slider").length) {
    $(".blog_article_slider").slick({
      dots: true,
      arrows: false,
    });
  }

  // years_slider
  if ($(".years_slider").length) {
    $(".years_slider").slick({
      slidesToShow: 11,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 1000,
      infinite: false,
      loop: false,
      autoplaySpeed: 5000,
      centerMode: false,
      asNavFor: ".years_content_slider",
      autoplay: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 8,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            // centerMode: false,
          },
        },
      ],
    });
  }

  // years_content_slider
  if ($(".years_content_slider").length) {
    $(".years_content_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      speed: 1000,
      asNavFor: ".years_slider",
      infinite: false,
      loop: false,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: false,
      focusOnSelect: false,
    });
  }

  // $(".years_slider").on(
  //   "beforeChange",
  //   function (event, slick, currentSlide, nextSlide) {
  //     // Set the width of line_between_color based on the direction of the change
  //     if (nextSlide > currentSlide) {
  //       console.log($(".year_card").eq(currentSlide).nextAll());
  //       // Forward direction
  //       console.log(currentSlide);
  //       $(".year_card").eq(currentSlide).find(".year_box").css({
  //         "background-color": "#e97176",
  //         color: "#fff",
  //       });
  //       $(".year_card")
  //         .eq(currentSlide)
  //         .find(".line_after")
  //         .css("background-color", "#e97176");
  //     } else {
  //       // Backward direction]
  //       $(".year_card").eq(currentSlide).find(".year_box").css({
  //         "background-color": "#fff",
  //         color: "#000",
  //       });
  //       $(".year_card")
  //         .eq(currentSlide)
  //         .find(".line_after")
  //         .css("background-color", "#fff");
  //     }
  //   }
  // );


  // features_slider_mobile
  if ($(".features_slider_mobile").length) {
    $(".features_slider_mobile").slick({
      slidesToShow: 5.2,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 1000,
      infinite: false,
      loop: false,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: false,
      focusOnSelect: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4.2,
            // centerMode: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3.4,
            // centerMode: false,
          },
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.1,
            // centerMode: false,
          },
        },
      ],
    });
  }


  // case_study_slider
  if ($(".case_study_slider").length) {
    $(".case_study_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 1000,
      infinite: false,
      loop: false,
      autoplaySpeed: 5000,
      centerMode: false,
      autoplay: false,
      focusOnSelect: false,
    });
  }
  

  AOS.init();
});

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  // setTimeout(() => {
  //   animateOut();
  // }, 2000);
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "ltr" ? "left-front" : "right-front"
    },
    theme: "light",
    counters: {
      add: true,
    },
  });
});