var score = 0;

// DIRECTION/TIME TAKEN TO GO UP/TIME UNTIL READING NEXT NOTE
async function parseBeatmap(beatMap){
    var file = "beatmaps/"; 
    file += beatMap + ".txt";
    $.get(file,async function(txt){
        console.log(file);
        var lines = txt.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
            noteInstruction = lines[i].split('/');
            spawnNote(noteInstruction[0], noteInstruction[1]);
            const delay = ms => new Promise(res => setTimeout(res, ms));
            await delay(noteInstruction[2]*1000);
        }
    });
    return 0;
}

// PLAY SONG
function playAudio(beatMap){
    var audio = new Audio('songs/'+beatMap+'.wav');
    audio.play();
    return 0;
}

// SPAWN NOTES
function spawnNote(direction, speed){
    var arrow = document.createElement("img");
    //dictates where on screen note spawns based on direction
    if(direction == 'LEFT'){
        arrow.src = "/ProfessorFunk/images/leftArrow.png";
        arrow.setAttribute("style","margin-left:-28%;bottom:-120px;position:absolute");
    }else if(direction == 'RIGHT'){
        arrow.src = "/ProfessorFunk/images/rightArrow.png";
        arrow.setAttribute("style","margin-left:14%;bottom:-120px;position:absolute");
    }else if(direction == 'UP'){
        arrow.src = "/ProfessorFunk/images/upArrow.png";
        arrow.setAttribute("style","margin-left:0%;bottom:-120px;position:absolute");
    }else{
        arrow.src = "/ProfessorFunk/images/downArrow.png";
        arrow.setAttribute("style","margin-left:-14%;bottom:-120px;position:absolute");
    }
    var appendThis = document.getElementById("arrows");
    appendThis.appendChild(arrow);
    //make note scroll
    var kill = scrollNote(arrow, speed, direction);
}

async function scrollNote(note, scrollTime, direction){
    //inspired by https://stackoverflow.com/questions/12712592/how-to-make-a-small-image-move-from-one-side-of-the-screen-to-the-other-with-js
    note.animate({bottom: "800px"}, scrollTime*1000, scrollNote);
    var startTime = $.now();
    const delay = ms => new Promise(res => setTimeout(res, ms));

    //this timer is to prevent notes getting scored upon spawning
    await delay(100);
    scoreNote(note, direction, startTime, scrollTime);

    //deletes note once it scrolls off screen (if the player misses it)
    await delay(scrollTime*700);
    note.remove();
    return true;
}

function scoreNote(note, direction, startTime, scrollTime){
    //keypress listener
    document.addEventListener("keydown", e =>{
        let keypress = e.key;
        e.stopPropagation();
        console.log("Key is: ", keypress);
        // long if statement because we want to limit it to certain keys for certain notes without repeated code
        if ((direction == "UP" && (keypress == "w" || keypress == "up"))
        || (direction == "DOWN" && (keypress == "s" || keypress == "down"))
        || (direction == "LEFT" && (keypress == "a" || keypress == "left"))
        || (direction == "RIGHT" && (keypress == "d" || keypress == "right"))){

            //timeDiff = time taken to press note
            //this calculates the time difference for scoring
            var timeDiff = startTime - $.now();
            var difference = scrollTime*337 - timeDiff;

            //award points
            score += 100 - difference/50;
            var added = 100 - difference/50;
            //make score an integer instead of an ugly float
            score = Math.round(score);

            //avoid negative scores
            if(score < 0){
                score = 0;
            }
            //update score visibly for player
            document.getElementById("scoredisplay").innerHTML = score;
            note.remove();
        }
        return true;
    })
    return score
}

