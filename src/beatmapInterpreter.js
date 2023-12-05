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
    var audio = new Audio('ProfessorFunk/songs/'+beatMap+'.wav');
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
    var kill = scrollNote(arrow, speed);
}

async function scrollNote(note, scrollTime){
    //inspired by https://stackoverflow.com/questions/12712592/how-to-make-a-small-image-move-from-one-side-of-the-screen-to-the-other-with-js
    //takes in note somehow? maybe grab by element ID?
    //can we generate unique note IDs and then pass them in here?

    //screen height / scrollTime, for for loop, clear and redraw image (hide and show?)
    note.animate({bottom: "800px"}, scrollTime*1000, scrollNote);
    const delay = ms => new Promise(res => setTimeout(res, ms));
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

