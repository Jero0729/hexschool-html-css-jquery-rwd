$(".backtotop").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
});
$(".favorite").click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('far fa-heart fas fa-heart');
    
});
$(document).ready(function(){
    $('.menu-bars').on('click', function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
});
