// The number on the bottom right corner updates when user scrolling

$('.bw-img').waypoint(function() {
    $('.number').html($(this).data('label'));
}, { offset: '10%' });

