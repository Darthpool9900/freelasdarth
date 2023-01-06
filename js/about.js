$(document).ready(function () {
    $('.loading').css('display', 'none');
    $('.back').click(()=>{
        $('.slidemenu').css('left','-100%')
        $('.open').css('display', 'flex');
    })
    $('.open').click(()=>{
        $('.slidemenu').css('left','0%')
        $('.open').css('display', 'none');
    })

    $('.circle').click(function(){
        var atual = $(this).index();
        $('.circle').css('background-color','transparent');
        $(this).css('background-color','#F3F2F2')
        $('.skillgrid').css('display', 'none');
        $('.skillgrid').eq(atual).css('display', 'grid');
    })
    
    $('.dots').click(function(){
        var atual = $(this).index();
        $('.dots').css('background-color','transparent');
        $(this).css('background-color','#F3F2F2');
        $('.more_wrapper').css('opacity','0');
        $('.more_wrapper').css('display','none');
        $('.more_wrapper').eq(atual).css('display','flex');
        setTimeout(() => {
            $('.more_wrapper').eq(atual).css('opacity','1');
        },10);
        
    })
    if($(window).width()>1225){
        $('.more_wrapper').css('display','flex');
    }
 });