//This challenge was to create a basic web structure with a question
//and an input field and a button to submit the input. The computer is 
//to guess a number of fingers a user had input. 


document.getElementById("myButton").onclick = function() {
        let myNumber = document.getElementById("myNumber").value;
        let gotIt = false;
        let numberOfGuesses =1;

    while (gotIt == false){
        let guess= Math.floor(Math.random()*6 +1);

        if (guess == myNumber){
                //computer right;
                gotIt = true;
                alert("got it");
            }else {
                //computer is wrong;
          numberOfGuesses++;
          alert("it took me" + " " + numberOfGuesses + " times");

    }
        }

}