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
        $("#feature_tour").show();
      });
});

