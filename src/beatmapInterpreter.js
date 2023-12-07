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
        arrow.src = "/images/leftArrow.png";
        arrow.setAttribute("style","margin-left:-28%;bottom:-120px;position:absolute");
    }else if(direction == 'RIGHT'){
        arrow.src = "/images/rightArrow.png";
        arrow.setAttribute("style","margin-left:14%;bottom:-120px;position:absolute");
    }else if(direction == 'UP'){
        arrow.src = "/images/upArrow.png";
        arrow.setAttribute("style","margin-left:0%;bottom:-120px;position:absolute");
    }else{
        arrow.src = "/images/downArrow.png";
        arrow.setAttribute("style","margin-left:-14%;bottom:-120px;position:absolute");
    }
    var appendThis = document.getElementById("arrows");
    appendThis.appendChild(arrow);
    //make note scroll
    var kill = scrollNote(arrow, speed, direction);
}

async function scrollNote(note, scrollTime, direction){
    //inspired by https://stackoverflow.com/questions/12712592/how-to-make-a-small-image-move-from-one-side-of-the-screen-to-the-other-with-js
    //takes in note somehow? maybe grab by element ID?
    //can we generate unique note IDs and then pass them in here?

    //screen height / scrollTime, for for loop, clear and redraw image (hide and show?)
    note.animate({bottom: "800px"}, scrollTime*1000, scrollNote);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    scoreNote(note, direction);
    await delay(scrollTime*900);
    note.remove();
    return true;
    // while(True){
    //     if(!note.is(":animated")){
    //         note.remove();
    //         break;
    //     }
    // }
}

function scoreNote(note, direction){
    console.log('I ran');
    var score = 0;
    //get gray notes
    const GUArrow = document.getElementById("GUArrow");
    const GDArrow = document.getElementById("GDArrow");
    const GRArrow = document.getElementById("GRArrow");
    const GLArrow = document.getElementById("GLArrow");
    //keypress listener
    document.addEventListener("keydown", e =>{
        input.querySelector(".key").innerText = e.key;
        let keypress = e.key;
        if ( direction == "UP" && (keypress == "w" || keypress == "up")){
            //check how far arrow is from gray arrow
            var arrow = GUArrow.getBoundingClientRect();
            var center = arrow.height + arrow.width*0.5;
            var centerPos = arrow.y - center;

            //get for note
            var noteBound = note.getBoundingClientRect();
            var noteCenter = note.height + note.width*0.5;
            var notePos = noteBound.y - noteCenter;

            console.log(center);
            console.log(noteCenter);
            var distance = centerPos - notePos;
            //award points
            score += 100 - distance*5;
            console.log("The score is: ", score);
            //avoid negative scores
            if(score < 0){
                score = 0;
            }
            console.log("The new score is: ", score);
            return score
        }
    })
    //listen for button press (WASD or arrow keys) (this is done in songs.html)
    //check distance from gray arrow center (in pixels)
    //score = 10 - 0.1*distance ?

}

