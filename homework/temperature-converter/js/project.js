$('#clickCelsius').click( function (){
    var celsius = $('#celsiusOne').val();
    var resultFahrenheit = (celsius * 9) / 5 +32;
    $('#fahrenheitOne').val(resultFahrenheit);
    
    console.log (resultFahrenheit);
})

$('#clickFahrenheit').click( function (){
    var fahrenheit = $('#fahrenheitTwo').val();
    var resultCelsius = ((fahrenheit -32) * 5) / 9;
    $('#celsiusTwo').val(resultCelsius);
    
    console.log (resultCelsius);
})

// $('#click').click( function (){
//     var celsius = $('#celsius').val();
//     var fahrenheit = $('#fahrenheit').val();

//     var resultFahrenheit = (celsius * 9) / 5 +32;
//     var resultCelsius = ((fahrenheit -32) * 5) / 9;
//     $('#celsius').val(resultCelsius);
//     $('#fahrenheit').val(resultFahrenheit);

//     console.log (resultCelsius);
// })