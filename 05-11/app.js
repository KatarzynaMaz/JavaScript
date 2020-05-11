//Wirte a code for an app where computer is guessing the number of
//fingers held up, use a function in the code 

function takeAGuess(correctAnswer){
    let guess = Math.floor(Math.random()*6 + 1);

    if (guess == correctAnswer){
        //computer right;
        return (true);
    } else {
        return (false);
}
}
document.getElementById("myButton").onclick = function() {

    let numberEntered = document.getElementById("numberEntered").value ;
    let gotIt = false;
    let numberOfGuesses = 1;

    while (gotIt == false) {
        if (takeAGuess(numberEntered)==true) {
            gotIt = true;
            alert("got it! it was a " + numberEntered);
                numberOfGuesses++;
                alert("it took me " + numberOfGuesses +" times");
            
            }
    }
}