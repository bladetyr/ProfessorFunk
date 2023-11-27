// DIRECTION/TIME TAKEN TO GO UP/TIME UNTIL READING NEXT NOTE
function parseBeatmap(beatMap){
    spawnNote("DOWN");
    spawnNote("UP");
    spawnNote("LEFT");
    spawnNote("RIGHT");
    var file = "../beatmaps/"; 
    file += beatMap;
    $.get(file,function(txt){
        var lines = txt.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
            console.log(lines[i]);
        }
    });
    return 0;
}

// PLAY SONG
function playAudio(beatMap){
    var audio = new Audio('../songs/'+beatMap+'.wav');
    audio.play();
    return 0;
}

// TEMP VARIABLES FOR ARROW MOVEMENT TESTING
var dir = "LEFT";
var speed = 2;
var wait = 1;

// SPAWN NOTES
function spawnNote(direction){
    console.log("here");
    var arrow = document.createElement("img");
    //dictates where on screen note spawns based on direction
    if(direction == 'LEFT'){
        arrow.src = "images/leftArrow.png";
        arrow.setAttribute("style","margin-left:-28%;bottom:-120px;position:absolute");
    }else if(direction == 'RIGHT'){
        arrow.src = "images/rightArrow.png";
        arrow.setAttribute("style","margin-left:14%;bottom:-120px;position:absolute");
    }else if(direction == 'UP'){
        arrow.src = "images/upArrow.png";
        arrow.setAttribute("style","margin-left:0%;bottom:-120px;position:absolute");
    }else{
        arrow.src = "images/downArrow.png";
        arrow.setAttribute("style","margin-left:-14%;bottom:-120px;position:absolute");
    }
    var appendThis = document.getElementById("arrows");
    appendThis.appendChild(arrow);
    //make note scroll
    scrollNote(arrow, speed);
}

function scrollNote(note, scrollTime){
    //inspired by https://stackoverflow.com/questions/12712592/how-to-make-a-small-image-move-from-one-side-of-the-screen-to-the-other-with-js
    //takes in note somehow? maybe grab by element ID?
    //can we generate unique note IDs and then pass them in here?

    //screen height / scrollTime, for for loop, clear and redraw image (hide and show?)
    note.animate({bottom: "800px"}, scrollTime*1000, scrollNote);
}

