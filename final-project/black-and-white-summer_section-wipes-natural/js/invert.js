// Click the the bottom right corner number the black/white colors invert

$('.number').click(function(){
    $('#body-index').toggleClass('invert');
    $('button').toggleClass('white-text');
    $('.logo').toggleClass('white-text');
    $('.number').toggleClass('white-text');
    });