//when you click on the second button, it will change the text of the second paragraph to the text of the first paragraph


document.getElementById("myButton2").onclick = function(){
    document.getElementById("secondText").innerHTML = document.getElementById("text").innerHTML;
}