//start the timer immediately after the page loads

let start = new Date().getTime();

function makeShapeAppear(){
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    let width = Math.random() * 400;
    let height = Math.random() * 400;
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

