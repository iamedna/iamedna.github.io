$(document).ready(function () {
    $(function () { // wait for document ready
        // init
        var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave'
            }
        });

        // get all slides
        var slides = document.querySelectorAll("section.panel");

        // create scene for every slide
        for (var i = 0; i < slides.length; i++) {
            new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
                .setPin(slides[i])
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        }
    });

});

    // Create parallax scrolling to reveal 100 images





    //give each image scroll position,
    //if $(“img”) is in the viewpoint (once img is in the view point)
    // addClassstick to img (append it to the background)
    // $(“img”).addClass(‘stick’);
    // var img = $(“img”)
    // var addStick = function(
    //     if (img  is in viewpoint) {
    //         img.addClass(‘stick’);
    //     }
    // )

    // addStick()   

    // make images sticky in the container 




    // Click logo to see thumbnails of 100 photos

    // Click INFO to see info page slides in from the right


    // $(".info").click(function () {
    //     $("#info-page").animate({ right: '+=1440px' }, 25000, 'easeInOutSine');

    // });

    // Click CONTACT to see contact page slides in from the left

    // When in INFO and CONTACT page, the cursor becomes X that allows user to click anywhere on the screen to go back to index page
    




