$(document).ready(function() { 
    $('.js__modal-toggle').on('click', function(e) {
        e.preventDefault();
        $('.modal').toggleClass('is-visible');
        return false
    });
    //anchor
    $('a[href^="#"]').click(function() {
        var speed = 300;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
        scrollTop: position
        }, speed, "swing");
        return false;
    });

 });