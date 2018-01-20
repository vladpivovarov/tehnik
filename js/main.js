$(window).on("load",function(){
    $(".preloader").fadeOut(1000);
    
    $(".resume").on("click", function(){
        $(".resume-block").toggleClass("active");
        $(".bomas").toggleClass("bomba");
    })
    $(".close").on("click", function(){
        $(".resume-block").removeClass("active");
        $(".bomas").removeClass("bomba");
    })
    
    $(".links").on("click", function(){
        $(".block").toggleClass("show");
    })
})

