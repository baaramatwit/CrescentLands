// Using Jquery with link in head section

// When document index.html is ready this function has to perform
$(document).ready(function () {
    const nav = $("#navigation"); // calling navigation id 
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        let body = $("body");

        if ($(window).scrollTop() >= navTop) { // if window is scrolling is greater then navtop then the body is going to add fixNaved class else the body going to removeClass fixed navclass
            body.addClass("fixedNav");
        }

        else {
            body.removeClass("fixedNav")
        }
    }


});