
let aboutOffset =$(".devfolio").offset().top;


$(window).scroll(function (){

   let wscroll= $(window).scrollTop();

   if(wscroll > aboutOffset-30)

   {
       $("nav").addClass("bg-black");
       $("#btnUp").fadeIn(500)
   }
   else
   {
       $("nav").removeClass("bg-black");
       $("#btnUp").fadeOut(500)

   }
})

$("#btnUp").click(function () {
  $("body,html").animate({scrollTop:'0'} , 2000)
})