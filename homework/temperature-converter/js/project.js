$(document).ready(function(){
    
    $('#convert').click(function(){

        var celInput = $('#c-input').val();
        var farInput = $('#f-input').val();
        
        var farOutput = celInput * 9 / 5 +32;
        var celOutput = (farInput - 32) *5 /9;

        if( isNaN(celInput || farInput)){
            alert('Please type a number!');
            
        } else if ( !isNaN(celInput || farInput)) {
            
            $('#f-input').val(farOutput);
            $('#c-input').val(celOutput);
        } 
          
    })
    
    
     //clear input elements
    //  $('#c-input').val('');
    //  $('#f-input').val(''); 
});

