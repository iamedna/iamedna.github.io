//Apply scroll reveal library

$(document).ready(function () {
    window.sr = ScrollReveal({ reset: true });
        sr.reveal('.img-001');
        sr.reveal('.img-002');
        sr.reveal('.img-003');
        sr.reveal('.img-004');
        sr.reveal('.img-005');
        sr.reveal('.img-006');
        sr.reveal('.img-007');
        sr.reveal('.img-008');
        sr.reveal('.img-009');
        sr.reveal('.img-010');
        sr.reveal('.img-011');
        sr.reveal('.img-012');
        sr.reveal('.img-013');
        sr.reveal('.img-014');
        sr.reveal('.img-015');
        sr.reveal('.img-016');
        sr.reveal('.img-017');
        sr.reveal('.img-018');
        sr.reveal('.img-019');
        sr.reveal('.img-020');
        sr.reveal('.img-021');
        sr.reveal('.img-022');
        sr.reveal('.img-023');
        sr.reveal('.img-024');
        sr.reveal('.img-025');
        sr.reveal('.img-026');
        sr.reveal('.img-027');
        sr.reveal('.img-028');
        sr.reveal('.img-029');
        sr.reveal('.img-030');
        sr.reveal('.img-031');
        sr.reveal('.img-032');
        sr.reveal('.img-033');
        sr.reveal('.img-034');
        sr.reveal('.img-035');
        sr.reveal('.img-036');
        sr.reveal('.img-037');
        sr.reveal('.img-038');
        sr.reveal('.img-039');
        sr.reveal('.img-040');
        sr.reveal('.img-041');
        sr.reveal('.img-042');
        sr.reveal('.img-043');
        sr.reveal('.img-044');
        sr.reveal('.img-045');
        sr.reveal('.img-046');
        sr.reveal('.img-047');
        sr.reveal('.img-048');
        sr.reveal('.img-049');
        sr.reveal('.img-050');
        sr.reveal('.img-051');
        sr.reveal('.img-052');
        sr.reveal('.img-053');
        sr.reveal('.img-054');
        sr.reveal('.img-055');
        sr.reveal('.img-056');
        sr.reveal('.img-057');
        sr.reveal('.img-058');
        sr.reveal('.img-059');
        sr.reveal('.img-060');
        sr.reveal('.img-061');
        sr.reveal('.img-062');
        sr.reveal('.img-063');
        sr.reveal('.img-064');
        sr.reveal('.img-065');
        sr.reveal('.img-066');
        sr.reveal('.img-067');
        sr.reveal('.img-068');
        sr.reveal('.img-069');
        sr.reveal('.img-070');
        sr.reveal('.img-071');
        sr.reveal('.img-072');
        sr.reveal('.img-073');
        sr.reveal('.img-074');
        sr.reveal('.img-075');
        sr.reveal('.img-076');
        sr.reveal('.img-077');
        sr.reveal('.img-078');
        sr.reveal('.img-079');
        sr.reveal('.img-080');
        sr.reveal('.img-081');
        sr.reveal('.img-082');
        sr.reveal('.img-083');
        sr.reveal('.img-084');
        sr.reveal('.img-085');
        sr.reveal('.img-086');
        sr.reveal('.img-087');
        sr.reveal('.img-088');
        sr.reveal('.img-089');
        sr.reveal('.img-090');
        sr.reveal('.img-091');
        sr.reveal('.img-092');
        sr.reveal('.img-093');
        sr.reveal('.img-094');
        sr.reveal('.img-095');
        sr.reveal('.img-096');
        sr.reveal('.img-097');
        sr.reveal('.img-098');
        sr.reveal('.img-099');
        sr.reveal('.img-100');


    //Smooth scrolling when clicking an anchor link

    $('a[href*="first"]').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 2200);
        event.preventDefault();
    });


    // The number on the bottom right corner updates when user scrolling (using waypoint)
    
    $('.bw-img').waypoint(function () {
        $('.number').html($(this).data('label'));
    }, { offset: '12%' });


    // Click the the bottom right corner number the black/white colors invert
   
    $('.number').click(function () {
        $('#body-index').toggleClass('invert');
        $('button').toggleClass('white-text');
        $('.logo').toggleClass('white-text');
        $('.number').toggleClass('white-text');
        $('#overlay-info').toggleClass('overlay-invert');
        $('#overlay-contact').toggleClass('overlay-invert');
        $('.info-para').toggleClass('overlay-text-invert');
        $('.email').toggleClass('overlay-text-invert');
        
    });
    
    
});



