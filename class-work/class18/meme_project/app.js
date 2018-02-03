$('.meme-form').submit(function (event) {

    event.preventDefault();

    var userInput = $('.meme-input').val();
    console.log(userInput);

    //javascript, jQuery
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + userInput + "+shiba+inu&api_key=yeB8AykbOWVk9DYNyg6OLcPMhNV8Vea0&limit=5");
    xhr.done(function (data) {
        var memes = data.data;

        memes.forEach(function (meme) {
            var memeUrl = meme.images.looping.mp4;
            $('.video-wrapper').append('<video src="' + memeUrl +'" autoplay></video>');
        })
        //console.log("success got data", data.data); });
        });

        //console.log('submitting');
    })