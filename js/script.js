$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");
    $(".login-form-container").removeClass("active");

    if ($(window).scrollTop() > 68) {
      $("header .header-2").addClass("header-active");
    } else {
      $("header .header-2").removeClass("header-active");
    }

    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top >= offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".small-image img").click(function () {
    $(this).addClass("image-active").siblings().removeClass("image-active");
    let image = $(this).attr("src");
    $(".big-image img").attr("src", image);
  });

  $(".gallery .btn").click(function () {
    let filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".gallery .box").show(400);
    } else {
      $(".gallery .box")
        .not("." + filter)
        .hide(200);
      $(".gallery .box")
        .filter("." + filter)
        .show(400);
    }

    $(this).addClass("button-active").siblings().removeClass("button-active");
  });
});

$(document).ready(function () {
  let formhBtn = $("#login-btn");
  let loginForm = $(".login-form-container");
  let formClose = $("#form-close");

  formhBtn.on("click", function () {
    loginForm.addClass("active");
  });

  formClose.on("click", function () {
    loginForm.removeClass("active");
  });
});

$(document).ready(function () {
  let cartBtn = $(".fa-shopping-cart");
  let cartContainer = $(".cart-container");
  let closeBtn = $(".close-btn");

  cartBtn.click(function () {
    cartContainer.css("right", "0");
  });

  closeBtn.click(function () {
    cartContainer.css("right", "-300px");
  });

  $(window).scroll(function () {
    cartContainer.css("right", "-300px");
  });
});

$(".view-product-button").on("click", function () {
  var productItem = $(this).closest(".image-container .box");
  var productName = productItem.find("h3").text();
  var productImageSrc = productItem.find(".product-image").attr("src");
  var productPrice = productItem.find(".product-price").text().replace("$", "");

  $(".product-info-name").text(productName);
  $(".product-info-image").attr("src", productImageSrc);
  $(".product-info-price").text("$" + productPrice);

  $(".product-info").show();
});

$(".product-info-add-to-cart-button").on("click", function () {
  alert("Product added to cart!");
});

$(".product-info-close-button").on("click", function () {
  $(".product-info").hide();
});