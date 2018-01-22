// Create parallax scrolling to reveal 100 images

// The number on the bottom right corner updates when user scrolling

// Click the the bottom right corner number the black/white colors invert

// Click logo to see thumbnails of 100 photos

// Click INFO to see info page slides in from the right

$(document).ready(function(){
    $(".info").click(function(){
        $("#info-page").animate({ right: '+=1440px' }, 25000, 'easeInOutSine');
  
    });
  
});

// Click CONTACT to see contact page slides in from the left

// When in INFO and CONTACT page, the cursor becomes X that allows user to click anywhere on the screen to go back to index page


