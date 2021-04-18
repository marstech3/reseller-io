$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
        $('#bottom-arrow').fadeOut();
        } else {
        $('#bottom-arrow').fadeIn();
        }
    });
    $("#feature_tour_btn").click(function(){
        $("#features").hide();
        $("#distributor_features").hide();
        $("#feature_tour").show();
      });
    $("#distributor_click").click(function(){
        $("#feature_tour").hide();
        $("#features").hide();
        $("#distributor_features").show();
      });
    $("#reseller_click").click(function(){
        $("#feature_tour").hide();
        $("#features").hide();
        $("#distributor_features").hide();
        $("#reseller_features").show();
      });
    $(".btn-1").click(function(){
        $(".div2, .div3, .div4, .div5").hide();
        $(".div1").show();
    });
    $(".btn-2").click(function(){
        $(".div1, .div3, .div4, .div5").hide();
        $(".div2").show();
    });
    $(".btn-3").click(function(){
        $(".div2, .div1, .div4, .div5").hide();
        $(".div3").show();
    });
    $(".btn-4").click(function(){
        $(".div2, .div3, .div1, .div5").hide();
        $(".div4").show();
    });
    $(".btn-5").click(function(){
        $(".div2, .div3, .div4, .div1").hide();
        $(".div5").show();
    });
    $("#accordion .card .card-link").click(function(){
        if($(this).find("i.fa").hasClass("fa-minus")){

            $(this).find("i.fa").removeClass("fa-minus");
            $(this).find("i.fa").addClass("fa-plus");
        }
        else if($(this).find("i.fa").hasClass("fa-plus")){

            $(this).find("i.fa").removeClass("fa-plus");
            $(this).find("i.fa").addClass("fa-minus");
        }

        $(this).parents(".card").siblings()
        .find(".card-header .card-link i.fa").removeClass("fa-minus");
        $(this).parents(".card").siblings()
        .find(".card-header .card-link i.fa").addClass("fa-plus");
    });
    $(".infoicon").mouseenter(function (element) {
      var el = element.target || element.srcElement;
      var data = el.nextElementSibling.innerText;
      var newWidth = data.length * 4.2;
      var newMargin = -newWidth / 2;
      $(".tooltiptext")
        .css({
          width: "" + newWidth + "px",
          "margin-left": "" + newMargin + "px",
        })
        .stop()
        .fadeIn("fast");
    });

    $(".infoicon").mouseleave(function () {
      $(".tooltiptext").fadeOut("fast");
    });
});

