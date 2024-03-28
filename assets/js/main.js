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

  if ($(".brands_mobile_slider").length) {
    $(".brands_mobile_slider").slick({
      speed: 5000,
      infinite: true,
      loop: true,
      autoplaySpeed: 100,
      centerMode: false,
      autoplay: true,
      cssEase: "linear",
    });
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

  if ($(".highprocess_card").length) {
    var levelProcessAnimation = gsap.timeline();

    $(".highprocess_card").map((index, item) => {
      animationProcess(item);
    });

    function animationProcess(item) {
      const halfCircle = $(item).find(".half_circle");
      const outerCircle = $(item).find(".outer_circle");
      const innerCircle = $(item).find(".inner_circle");
      const icon = $(item).find(".icon");
      const cardTitle = $(item).find(".card_body h5");
      const cardText = $(item).find(".card_body p");
      levelProcessAnimation
        .from(halfCircle, { scale: 0, opacity: 0, duration: 0.3, ease: "ease" })
        .from(outerCircle, {
          scale: 0.4,
          opacity: 0,
          duration: 0.3,
          ease: "ease",
        })
        .from(innerCircle, { opacity: 0, duration: 0.3, ease: "ease" })
        .from(icon, { scale: 0.4, opacity: 0, duration: 0.3, ease: "ease" })
        .from(cardTitle, { y: 10, opacity: 0, duration: 0.3, ease: "ease" })
        .from(cardText, { y: 10, opacity: 0, duration: 0.3, ease: "ease" });
    }

    levelProcessAnimation.pause();

    // Create an Intersection Observer
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // If the 'time_line' section is in the viewport, start the animation
            levelProcessAnimation.play();
            observer.unobserve(entry.target); // Stop observing once animation starts
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    var timeLineSection = document.querySelector(".level_process");
    observer.observe(timeLineSection);
  }

  AOS.init();
});

const doc = document,
  types = [
    "circle",
    "semi-circle",
    "square",
    "triangle",
    "triangle-2",
    "rectangle",
  ],
  colors = [
    "#836ee5",
    "#fe94b4",
    "#49d2f5",
    "#ff5354",
    "#00b1b4",
    "#ffe465",
    "#0071ff",
    "#03274b",
  ];

let shapes = doc.querySelectorAll(".from-left shape");
shapes.forEach((shape, index) => {
  setInterval(() => {
    let cl = shape.classList;
    shape.className = "";

    //assign styles
    cl.add(types[~~(Math.random() * types.length)]);
    let offset = Math.random() * 4 - 2;
    let opp = offset >= 0 ? "+ " : "- ";
    let styles = [
      ["left", "calc(50% " + opp + offset + "vw)"],
      ["--bounce-variance", Math.random() * 20 - 10 + "vh"],
      ["--base_scale", Math.random() * 6 + 4 + "vh"],
      ["--rotation", Math.random() * 180 - 90 + "deg"],
      ["--color", colors[~~(Math.random() * colors.length)]],
    ];
    styles.forEach((style) => shape.style.setProperty(style[0], style[1]));

    //animate
    if (!cl.contains("bounce-up")) cl.add("bounce-up");
    cl.replace("bounce-down", "bounce-up");
    setTimeout(() => cl.replace("bounce-up", "bounce-down"), 400);
  }, 740);
});

let tl = gsap.timeline({ ease: "power4.inOut" });
function animateFromLeft() {
  tl.to(".from-left .tile", {
    duration: 0.4,
    width: "100%",
    left: "0%",
    delay: 0.2,
    stagger: 0.05,
  });
  tl.to(".from-left shape", { opacity: 0,stagger:.5, ease: "ease" });
  tl.to(".from-left .tile", {
    duration: 0.4,
    width: "100%",
    left: "100%",
    delay: 0.2,
    stagger: -0.05,
  });
  tl.set(".from-left .tile", { left: "0", width: "0" });
  // tl.to(".from-left", { display: "none" });
}

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  setTimeout(() => {
    animateFromLeft();
  }, 2000);
  new Mmenu("#menu", {
    offCanvas: {
      slidingSubmenus: false,
      position: currentDir == "ltr" ? "left-front" : "right-front",
    },
    theme: "light",
    counters: {
      add: true,
    },
  });
});
