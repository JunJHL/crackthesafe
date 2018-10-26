// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/*global $ */



// DOCUMENT READY FUNCTION BELOW
$( document ).ready(function() {
    
let pw1;
let pw2;
let pw3;
let pw4;
let password=[pw1,pw2,pw3,pw4];

$(".verify").click(function() {
    pw1=$("#number1").val();
    pw2=$("#number2").val();
    pw3=$("#number3").val();
    pw4=$("#number4").val();
        
    for(let i=0; i<password.length; i++) {
        $("#userChoice").append(password[i]);
    }
});
    
let randomNumber1=Math.floor(Math.random()*10);
let randomNumber2=Math.floor(Math.random()*10);
let randomNumber3=Math.floor(Math.random()*10);
let randomNumber4=Math.floor(Math.random()*10);

$("")

    
});