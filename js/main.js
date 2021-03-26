$(document).ready(function () {
    $('.sidebarCollapse').on('click', function () {
        $('.sidebar').toggleClass('active');
        $(this).toggleClass('active');
        
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

    $('.kl').on('click', function () {

        $('.kl').addClass('clicked')
        if($('.kl').hasClass('clicked')){
        $('.sidebar').removeClass('active');
        $(this).removeClass('active');
        }
        else {
            $('.sidebar').addClass('active');
            $(this).addClass('active');
        }
    

    });
    $('#bon1').on('click', function () {
        $('.con1').toggle(300);

    });
    $('#bon').on('click', function () {
        $('.con').toggle(300);

    });
    

    
});
