$(document).ready(function() {
    $('.about, .contact').hide();

    $('#btnAbout').click(function(){
        $('.mainContent, .contact').slideUp();
        $('.about').toggle('slow');
    });

    $('#btnContact').click(function(){
        $('.mainContent, .about').slideUp();
        $('.contact').toggle('slow');
    });
    $('#btnMain').click(function(){
        $('.about, .contact').slideUp();
        $('.mainContent').toggle('slow');
    });

    $('.nav li').hover(function(){
        $(this).addClass('navHover');
    }, function() {
        $(this).removeClass('navHover');
    
    });


});