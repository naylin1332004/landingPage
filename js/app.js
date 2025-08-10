$(document).ready(function(){
    // Start Nav Bar
    $(window).scroll(function(){

        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 200){
            $('.navbar').addClass("navmenus");
        }else{
            $('.navbar').removeClass("navmenus");
        }
    });

    $('.navbuttons').click(function(){
        $(this).toggleClass('crossxs');
    });
    // End Nav Bar


});