// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
$("document").ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    //GLOBAL VARIABLES
    /* global $ */
    $("#shoot").click(function() {
        //stores user choice
        let userInput = $("#input").val(); 
        //makes input lower case so if else statement is easier to write
        let lowerCaseUserChoice = userInput.toLowerCase();
        let upperCaseUserChoice = userInput.toUpperCase();

        $("#userChoice").text(upperCaseUserChoice);

        let potentialResults = ["Rock", "Paper", "Scissors"]; 
        let randomNumber = Math.floor(Math.random() * 3);
        let computerResult = potentialResults[randomNumber];
        let lowerCaseComputerResult = computerResult.toLowerCase();
        let upperCaseComputerResult = computerResult.toUpperCase();
        $("#computerChoice").text(upperCaseComputerResult);

        if((lowerCaseUserChoice==="rock" && computerResult==="Rock") || (lowerCaseUserChoice==="paper" && computerResult==="Paper") || (lowerCaseUserChoice==="scissors" && computerResult==="Scissors")){
            $("#result").text("You Tie!");
            $("#input").val("");
            $("#history").append("<li>" + "You Tied!" + "</li>");
        } else if((lowerCaseUserChoice==="rock" && computerResult==="Paper") || (lowerCaseUserChoice==="paper" && computerResult==="Scissors") || (lowerCaseUserChoice==="scissors" && computerResult==="Rock")) {
            $("#result").text("You Lose!");
            $("#input").val("");
            $("#history").append("<li>" + "You Lost!" + "</li>");
        } else if((lowerCaseUserChoice==="paper" && computerResult==="Rock") || (lowerCaseUserChoice==="scissors" && computerResult==="Paper") || (lowerCaseUserChoice==="rock" && computerResult==="Scissors")) {
            $("#result").text("You Win!");
            $("#input").val("");
            $("#history").append("<li>" + "You Won!" + "</li>");
        } else {
            alert("Please type in a valid answer.");
            $("#computerChoice").text(" ");
            $("#userChoice").text(" ");
            $("#result").text(" ");
            $("#input").val("");
            $("#history").append("<li>" + "Error" + "</li>");
        }
    });
});

// DOCUMENT READY FUNCTION BELOW

