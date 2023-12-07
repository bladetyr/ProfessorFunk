$(document).ready( function() {
    parseBeatmap(beatValue);
    playAudio(beatValue);
});
let totalscore = 0;

const input = document.querySelector(".input");
    document.addEventListener("keydown", e =>{
        input.querySelector(".key").innerText = e.key;
        let keypress = e.key;
        if (keypress == "w"){
            totalscore = totalscore + 1;
            console.log(totalscore);
        }
        document.getElementById("scoredisplay").innerHTML = totalscore;
    });