// DIRECTION/TIME TAKEN TO GO UP/TIME UNTIL READING NEXT NOTE
var file = "../beatmaps/";
function parseBeatmap(beatMap){
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

// HANDLE NOTES
function spawnNote(direction){
    //dictates where on screen note spawns based on direction
    if(direction == 'LEFT'){
        //pass
    }else if(direction == 'RIGHT'){
        //pass
    }else if(direction == 'UP'){
        //pass
    }else{
        //pass
    }
}

function scrollNote(note, scrollTime){
    //takes in note somehow? maybe grab by element ID?
    //can we generate unique note IDs and then pass them in here?

    //insert code and math to raise spawned note along Y axis over the course of X seconds (scrollTime provided by beatmap.txt file)

}

