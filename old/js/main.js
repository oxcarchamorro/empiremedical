$(document).ready(function(){
    $(".toogle_menu").click(function(){
        $(".menu_movile").fadeToggle(500);
        $("body").toggleClass("body_no_scroll");
        setTimeout(function(){
            $(".sidebar_movile").toggleClass("sidebar_movile_active");
        }, 500);
    });

    $(".menu_movile").click(function(){
        $(".sidebar_movile").toggleClass("sidebar_movile_active");        
        setTimeout(function(){
            $(".menu_movile").fadeToggle(500);
            $("body").toggleClass("body_no_scroll");
        }, 500);
    });

    var $videohover = $('.videohover');
    $videohover.on('mouseenter', function () {
        $videohover.get(0).play
    });
});