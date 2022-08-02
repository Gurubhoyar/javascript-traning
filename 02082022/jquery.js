$(document).ready(function(){
    $('.bronco , .f150 , .mustang').click(function(){
        $('.bronco-details , .f150-details , .mustang-details').hide();
        if($(this).hasClass('f150')){
            $('.f150-details').slideToggle();
            $(this).toggleClass('active');
        }
        else if($(this).hasClass('mustang')){
            $('.mustang-details').slideToggle();
            $(this).toggleClass('active');
        }
        else { 
            $('.bronco-details').slideToggle();
            $(this).toggleClass('active');
        }
    })
})