$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $("#bottom-arrow").fadeOut();
    } else {
      $("#bottom-arrow").fadeIn();
    }
  });
  $(".tab").click(function () {
    $(".tab").removeClass("active");
    $(this).addClass("active");
  });

  $("#feature_tour_btn").click(function () {
    $("#features").hide();
    $("#distributor_features").hide();
    $("#feature_tour").show();
  });
  $(".end_tour_btn").click(function () {
    $("#features").show();
    $("#reseller_features").hide();
    $("#distributor_features").hide();
    $("#feature_tour").hide();
  });
  $("#distributor_click").click(function () {
    $("#feature_tour").hide();
    $("#features").hide();
    $("#distributor_features").show();
  });
  $("#reseller_click").click(function () {
    $("#feature_tour").hide();
    $("#features").hide();
    $("#distributor_features").hide();
    $("#reseller_features").show();
  });
  $(".btn-1").click(function () {
    $(".div2, .div3, .div4, .div5").hide();
    $(".div1").show();
  });
  $(".btn-2").click(function () {
    $(".div1, .div3, .div4, .div5").hide();
    $(".div2").show();
  });
  $(".btn-3").click(function () {
    $(".div2, .div1, .div4, .div5").hide();
    $(".div3").show();
  });
  $(".btn-4").click(function () {
    $(".div2, .div3, .div1, .div5").hide();
    $(".div4").show();
  });
  $(".btn-5").click(function () {
    $(".div2, .div3, .div4, .div1").hide();
    $(".div5").show();
  });
  $(".accordion .card .card-link").click(function () {
    if ($(this).find("i.fa").hasClass("fa-minus")) {
      $(this).find("i.fa").removeClass("fa-minus");
      $(this).find("i.fa").addClass("fa-plus");
    } else if ($(this).find("i.fa").hasClass("fa-plus")) {
      $(this).find("i.fa").removeClass("fa-plus");
      $(this).find("i.fa").addClass("fa-minus");
    }

    $(this)
      .parents(".card")
      .siblings()
      .find(".card-header .card-link i.fa")
      .removeClass("fa-minus");
    $(this)
      .parents(".card")
      .siblings()
      .find(".card-header .card-link i.fa")
      .addClass("fa-plus");
  });
});
