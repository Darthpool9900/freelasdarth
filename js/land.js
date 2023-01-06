$(document).ready(function () {
   $('.loading').css('display', 'none');
   

   $('.btn_hidden').click(function () {
      $('.mobile').css('display', 'block');
      $('.mobile').css('width','100%');
      setTimeout(()=>{
         $('.menu_mobile li a').css('opacity','1');
      },500)
   })

   $('.close').click(function () {
      $('.menu_mobile li a').css('opacity','0');
      $('.mobile').css('width','0%');
      $('.mobile').css('display', 'none');
   })
});