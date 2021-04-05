$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
        $('#bottom-arrow').fadeOut();
        } else {
        $('#bottom-arrow').fadeIn();
        }
    });

    $("#get_connected").mouseenter(
        function() {
            $("#inventory_management,#transactions, #store, #dashboard, #orders").hide();
        });
    $("#get_connected").mouseleave(
        function() {
            $("#inventory_management,#transactions, #store, #dashboard, #orders").show();
        });
    $("#inventory_management").mouseenter(
        function() {
            $("#get_connected,#transactions, #store, #dashboard, #orders").hide();
        });
    $("#inventory_management").mouseleave(
        function() {
            $("#get_connected,#transactions, #store, #dashboard, #orders").show();
        });
    $("#transactions").mouseenter(
        function() {
            $("#get_connected,#inventory_management, #store, #dashboard, #orders").hide();
        });
    $("#transactions").mouseleave(
        function() {
            $("#get_connected,#inventory_management, #store, #dashboard, #orders").show();
        });
    $("#store").mouseenter(
        function() {
            $("#get_connected,#transactions, #inventory_management, #dashboard, #orders").hide();
        });
    $("#store").mouseleave(
        function() {
            $("#get_connected,#transactions, #inventory_management, #dashboard, #orders").show();
        });
    $("#dashboard").mouseenter(
        function() {
            $("#get_connected,#transactions, #store, #inventory_management, #orders").hide();
        });
    $("#dashboard").mouseleave(
        function() {
            $("#get_connected,#transactions, #store, #inventory_management, #orders").show();
        });
    $("#orders").mouseenter(
        function() {
            $("#get_connected,#transactions, #store, #inventory_management, #dashboard").hide();
        });
    $("#orders").mouseleave(
        function() {
            $("#get_connected,#transactions, #store, #inventory_management, #dashboard").show();
        });

    function show(divId) {
        $("#" + divId).show();
    }
    function showFeatureTour() {
        show('feature_tour');
    }
});

