/*We were to create an application here to test our reactions
Write a code for randomly apprearing circles or squares. When page is loaded, timer starts.
A shape apprears, user clicks on the shape and timer counts the user's time.
Shapes need to be of a random color and they need to randomly apprear
on the page
*/


//start the timer immediately after the page loads

let start = new Date().getTime();
//creating a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split("");
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear(){
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    //adding min width to width, so the shape is not too small to see
    let width = (Math.random() * 300) + 100;
    let height = Math.random() * 400;

    //making the shape to apprear as circle at least 50% of the time
        if(Math.random()>0.5) {
            document.getElementById("shape").style.borderRadius = "50%"; 
        } else {
            document.getElementById("shape").style.borderRadius = "0";
        }

        //changing a background color of a shape
        document.getElementById("shape").style.backgroundColor = getRandomColor();
        //making shape appear randomly vertically and horizonally by adding margins
        document.getElementById("shape").style.top = top + "px";
        document.getElementById("shape").style.left = left + "px";
        document.getElementById("shape").style.width = width + "px";
        document.getElementById("shape").style.height = height + "px";

    document.getElementById("shape").style.display ="block";
        // update the time when the shape appears, we can use it because the start variable
        //was defined outside the funtion
        start = new Date().getTime();

}
function appearAfterDelay(){
    setTimeout(makeShapeAppear, Math.random()*2000);
}
   appearAfterDelay();

   document.getElementById("shape").onclick = function(){
        document.getElementById("shape").style.display="none";

        let end = new Date().getTime();
        let timeTaken = (end - start)/1000;
        
        document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    appearAfterDelay();
}

