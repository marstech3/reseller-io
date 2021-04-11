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
      //--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
    // initiate an animation to a certain page element:
    $('html, body').stop().animate(
      { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
      speed, // speed in milliseconds
      'swing' // easing
    ); // end animate
  } // end scrollThere function definition
  
  //--- START SCROLL EVENTS ---//
  // detect a mousewheel event (note: relies on jquery mousewheel plugin):
  $(window).on('mousewheel', function (e) {
  
    // get Y-axis value of each div:
    var div1y = $('#panel1').offset().top,
        div2y = $('#how_it_works').offset().top,
        div3y = $('#features').offset().top,
        div4y = $('#bulk_import').offset().top,
        div5y = $('#online_orders').offset().top,
        div6y = $('#pricing_panel').offset().top,
        // get window's current scroll position:
        lastScrollTop = $(this).scrollTop(),
        // for getting user's scroll direction:
        scrollDirection,
        // for determining the previous and next divs to scroll to, based on lastScrollTop:
        targetUp,
        targetDown,
        // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
        targetElement;
  
    // get scroll direction:
    if ( e.deltaY > 0 ) {
      scrollDirection = 'up';
    } else if ( e.deltaY <= 0 ) {
      scrollDirection = 'down';
    } // end if
  
    // prevent default behavior (page scroll):
    e.preventDefault();
  
    // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
    if (lastScrollTop === div1y) {
      targetUp = $('#panel1');
      targetDown = $('#features');
    } else if (lastScrollTop === div2y) {
      targetUp = $('#how_it_works');
      targetDown = $('#features');
    } else if (lastScrollTop === div3y) {
      targetUp = $('#features');
      targetDown = $('#bulk_import');
    } else if (lastScrollTop === div4y) {
      targetUp = $('#features');
      targetDown = $('#online_orders');
    } else if (lastScrollTop === div5y) {
      targetUp = $('#bulk_import');
      targetDown = $('#pricing_panel');
    } else if (lastScrollTop === div6y) {
      targetUp = $('#online_orders');
      targetDown = $('#pricing_panel');
    } else if (lastScrollTop < div2y) {
      targetUp = $('#panel1');
      targetDown = $('#features');
    } else if (lastScrollTop < div3y) {
      targetUp = $('#features');
      targetDown = $('#features');
    } else if (lastScrollTop < div4y) {
      targetUp = $('#features');
      targetDown = $('#bulk_import');
    } else if (lastScrollTop < div5y) {
      targetUp = $('#bulk_import');
      targetDown = $('#online_orders');
    } else if (lastScrollTop < div6y) {
      targetUp = $('#online_orders');
      targetDown = $('#pricing_panel');
    } else if (lastScrollTop > div6y) {
      targetUp = $('#pricing_panel');
      targetDown = $('#pricing_panel');
    } // end else if
  
    // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
    if (scrollDirection === 'down') {
      targetElement = targetDown;
    } else if (scrollDirection === 'up') {
      targetElement = targetUp;
    } // end else if
  
    // scroll smoothly to the target element:
    scrollThere(targetElement, 400);
  
  }); // end on mousewheel event
  //--- END SCROLL EVENTS ---//
});

