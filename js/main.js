$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
        $('#bottom-arrow').fadeOut();
        } else {
        $('#bottom-arrow').fadeIn();
        }
    });
    function showFeatureTour() {
        show('feature_tour');
    }
    function show(divId) {
        $("#" + divId).show();
    }
    
});

