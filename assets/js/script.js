$(document).ready(function(){
    $(".links .mail .fa").click(function(e){
        $(".links .mail-box").toggle();
        e.stopPropagation();
    });
    $(".links .mail-box").click(function(e) {
        e.stopPropagation(); 
        return false; 
    });
    $('body, html').click(function () {
        $('.links .mail-box').fadeOut();
    });
    new WOW().init();
});