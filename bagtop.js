  
$(document).ready(function () {
    $("#btntop").click(function (e) {
        $("html,body").animate({ scrollTop:0 }, 1000);
    });
    //alert();
    $(window).scroll(function () {
        ;
        if ($(window).scrollTop() > 660) {
            $("#btntop").fadeIn(1000)
        } else {
            $("#btntop").fadeOut(1000)
        }
    });
    $("# ").click(function (e) { 
        $("html,body").animate({scrollTop:0},500);

    });
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("mynavbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >660) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



