// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$( document ).ready(function() {
    $(".verify").click(function() {
        var pw1=$("#number1").val();
        var pw2=$("#number2").val();
        var pw3=$("#number3").val();
        var pw4=$("#number4").val();
        var password=[pw1,pw2,pw3,pw4];
        for(var i=0; i<password.length; i++) {
            $("#userChoice").append(password[i]);
        }
    });
    
});