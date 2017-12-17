$('#click-me').click(function(){
    // Store your current age into a variable
    var age = $('#age').val();
    // Store a maximum age into a variable
    var maxage = $('#max-age').val();
    // Store a favorite drink (from a drop-down) into a variable
    var drink = $('#item').val();
    // Store an amount per day into a variable
    var amount = $('#num-per-day').val();
    // Calculate how much you would drink for the rest of your life!
    var result = (maxage - age) * amount;
    // Output your results to the user
    $('#solution').html(result);
    $('#drink').html(drink);
    // console.log(result);
})
