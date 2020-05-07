
/*The challenge was to write the code for How Many Fingers game;
First you need to create a basic structure of a page with a question 
and a field to enter a number and a button to click to submit the number.
You also need to generate a random number. Now if the number entered is equal the random number
you get an alrert that you guessed, otherwise the alert is Try again - the number was .. (random number generted for the exersise)*/

document.getElementById("myButton").onclick = function(){

    let numberOfFingers;

    numberOfFingers = Math.floor(Math.random()*6)+1;
    
    let numberEntered ;
    document.getElementById("numberEntered").value = numberEntered;
    
    if (numberEntered == numberOfFingers) {
        alert("You guessed");
    } else {
      alert("Try again - the number was " + numberOfFingers);
    }

}

