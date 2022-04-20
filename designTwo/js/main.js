


$(document).ready(function(){
    $('.menu-bar').click(function (e) {

        // Used to stop the event bubbling..
        e.stopPropagation()
        $('.menu-list').toggle();
    });
    
    // Hide the "info_image_click" by clicking outside container
    $(document).click(function () {
        $('.menu-list').hide();
    });
    $('.menu-bar').hover(function (e) {

        // Used to stop the event bubbling..
        e.stopPropagation()
        $('.menu-list').toggle();
    });
    
    // Hide the "info_image_click" by clicking outside container
    $(document).hover(function () {
        $('.menu-list').hide();
    });
  });