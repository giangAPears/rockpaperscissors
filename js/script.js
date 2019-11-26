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
        //makes input lower case so if else statement is easier to write
        let lowerCaseUserChoice = userInput.toLowerCase();
        let userFirstLetter = lowerCaseUserChoice[0];
        let userFirstLetterCapital = userFirstLetter.toUpperCase();
        let userEndOfWord = lowerCaseUserChoice.slice(0);
        let userEndLetters = userEndOfWord[1];
        let newUserChoice = userFirstLetterCapital + userEndLetters;
        console.log(newUserChoice);
        $("#userChoice").text(lowerCaseUserChoice);

        let potentialResults = ["Rock", "Paper", "Scissors"]; 
        let randomNumber = Math.floor(Math.random() * 3);
        let computerResult = potentialResults[randomNumber];
        $("#computerChoice").text(computerResult);

        if(newUserChoice===computerResult){
            $("#result").text("You Tie!");
            $("#input").val("");
        } else if((lowerCaseUserChoice==="rock" && computerResult==="Paper") || (lowerCaseUserChoice==="paper" && computerResult==="Scissors") || (lowerCaseUserChoice==="scissors" && computerResult==="Rock")) {
            $("#result").text("You Lose!");
            $("#input").val("");
        } else if((lowerCaseUserChoice==="paper" && computerResult==="Rock") || (lowerCaseUserChoice==="scissors" && computerResult==="Paper") || (lowerCaseUserChoice==="rock" && computerResult==="Scissors")) {
            $("#result").text("You Win!");
            $("#input").val("");
        } else {
            alert("Please type in a valid answer.");
            $("#input").val("");
        }
    });
});

// DOCUMENT READY FUNCTION BELOW

