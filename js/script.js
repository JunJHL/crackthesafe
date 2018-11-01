// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/*global $ */



// DOCUMENT READY FUNCTION BELOW
$( document ).ready(function() {
    
let randomNumber1=(Math.floor(Math.random()*10)).toString();
let randomNumber2=(Math.floor(Math.random()*10)).toString;
let randomNumber3=(Math.floor(Math.random()*10)).toString();
let randomNumber4=(Math.floor(Math.random()*10)).toString();

let numberGuess1="";
let numberGuess2="";
let numberGuess3="";
let numberGuess4="";

let numbersCorrect=0;
let numbersInPlace=0;

let guess=[numberGuess1, numberGuess2, numberGuess3, numberGuess4];  
let tries=[randomNumber1,randomNumber2,randomNumber3,randomNumber4];

$("#verify").click(function() { 
    numberGuess1=$("#number1").val();
    numberGuess2=$("#number2").val();
    numberGuess3=$("#number3").val();
    numberGuess4=$("#number4").val();
    
    plugIn();
    check();
});   

function plugIn() {   
    for(let i=0; i<guess.length; i++) {
        $("#userChoice").append(guess[i]);
    }
}

function check() {
    for(let i=0; i<tries.length; i++) {
         if(guess[i]===tries[i]) {
             numbersInPlace++;
         }
        if(tries.includes(guess[i])) {
            numbersCorrect++;
        }
    }
    
    $("#result").append("Numbers Correct: "+numbersCorrect + "\n");
    $("#result").append("Number in place: "+numbersCorrect + "\n");
}
    
});