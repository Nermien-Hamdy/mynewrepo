
let aboutOffset =$(".devfolio").offset().top;


$(window).scroll(function (){

   let wscroll= $(window).scrollTop();

   if(wscroll > aboutOffset-30)

   {
       $("nav").addClass("bg-black")
   }
   else
   {
       $("nav").removeClass("bg-black")
   }
})