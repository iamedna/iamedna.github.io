$(document).ready(function () {

	var lights = 'on';

	$('#lightswitch').click(function () {

		if( lights == 'on'){
			console.log('they are on!');

			lights = 'off';
			$('#lightswitch')
			.toggleClass('switch-off')
			.html('OFF');

			// $('#lightswitch')
			// 	.addClass('switch-off')
			// 	.removeClass('switch-on')
			// 	.html('OFF');

			// $('#lightswitch').css({'background-color': 'white', 'color': 'black'});

			
			$('body').addClass('lights-off');
			// $('body').css('background', 'black');
		} else {

			lights = 'on';

			$('#lightswitch')
			.toggleClass('switch-on')
			.html('ON');

			// $('#lightswitch')
			// .addClass('switch-on')
			// .removeClass('switch-off')
			// .html('ON');

			// $('#lightswitch').css({'background-color': 'black', 'color': 'white'});
			
		
			$('body').removeClass('lights-off');
			// $('body').css('background','white');
		}
	
	})

	
})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;