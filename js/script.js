// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
$("document").ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    alert("hello world");
    //GLOBAL VARIABLES
    /* global $ */
    $("#shoot").click(function() {

        //stores user choice
        let userInput = $("#input").val(); 
        //makes input ower case so if else statement is easier to write
        let lowerCaseUserChoice = userInput.toLowerCase();
        $("#userChoice").text(lowerCaseUserChoice);

        let potentialResults = ["Rock", "Paper", "Scissors"]; 
        let randomNumber = Math.floor(Math.random() * 3);
        let computerResult = potentialResults[randomNumber];
        $("#computerChoice").text(computerResult);

        if(lowerCaseUserChoice===computerResult){

        }
    });
});

// DOCUMENT READY FUNCTION BELOW

