// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/*global $ */



// DOCUMENT READY FUNCTION BELOW
$( document ).ready(function() {
    
let randomNumber1=(Math.floor(Math.random()*10)).toString();
let randomNumber2=(Math.floor(Math.random()*10)).toString();
let randomNumber3=(Math.floor(Math.random()*10)).toString();
let randomNumber4=(Math.floor(Math.random()*10)).toString();

let numberGuess1="";
let numberGuess2="";
let numberGuess3="";
let numberGuess4="";

let numbersCorrect=0;
let numbersInPlace=0;

let guess=[];  
let tries=[randomNumber1,randomNumber2,randomNumber3,randomNumber4];

$("#verify").click(function() { 
    
    $("#userChoice").text("");
    $("#results").text("");
    
    numbersCorrect=0;
    numbersInPlace=0;
    
    numberGuess1=$("#number1").val();
    numberGuess2=$("#number2").val();
    numberGuess3=$("#number3").val();
    numberGuess4=$("#number4").val();
    
    guess=[numberGuess1, numberGuess2, numberGuess3, numberGuess4];

    plugIn();
    check();
    pass();
    
   console.log(randomNumber1);
    console.log(randomNumber2);
    console.log(randomNumber3);
    console.log(randomNumber4);

});   

function plugIn() {    
    for(let i=0; i<guess.length; i++) { 
        $("#userChoice").append(guess[i]+"&emsp;");
    }
}

function check() {
    
    $("#number1").val("");
    $("#number2").val("");
    $("#number3").val("");
    $("#number4").val("");
    
    for(let i=0; i<guess.length; i++) {
        
        if(tries[i]===guess[0] || tries[i]===guess[1] || tries[i]===guess[2] || tries[i]===guess[3]) {
            numbersCorrect++;
        }
         if(guess[i]===tries[i]) {
             numbersInPlace++;
        }
    

    }
    
    $("#results").append("Numbers Correct: " + numbersCorrect  );
    $("#results").append("<br>" + "Number in place: " + numbersInPlace + "</br>");
}

function pass() {
    for(let i=0; i<guess.length; i++) {
        if(isNaN(guess[i])) {
            alert("Enter Numbers only");
        }else if(guess[i]>=10 || guess[i]<0) {
            alert("Enter Valid Numbers");
        }
    }
    if((numbersCorrect||numbersInPlace) !== 4) {
        $("#results").append("<br> Try Again </br>");
    }else if((numbersCorrect&&numbersInPlace) === 4) {
        $("img").hide();
        $("body").css("background-image",'url(https://us.123rf.com/450wm/nexusplexus/nexusplexus1707/nexusplexus170703849/82565548-young-man-haker-wearing-hoody-on-binary-code-background-mixed-media.jpg?ver=6)');
        $("h1").text("Solve It")
        $("h2").text("It is just the beginning");
        $("div").css("border-style","solid");
        $(".row").css("color","white");
    }
}

});

