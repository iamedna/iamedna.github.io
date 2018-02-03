// Click the the bottom right corner number the black/white colors invert
$(document).ready(function () {
    $('.number').click(function () {
        $('#body-index').toggleClass('invert');
        $('button').toggleClass('white-text');
        $('.logo').toggleClass('white-text');
        $('.number').toggleClass('white-text');
    });
})