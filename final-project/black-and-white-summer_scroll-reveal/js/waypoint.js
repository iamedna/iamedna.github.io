// The number on the bottom right corner updates when user scrolling
$(document).ready(function () {
    $('.bw-img').waypoint(function () {
        $('.number').html($(this).data('label'));
    }, { offset: '12%' });

})