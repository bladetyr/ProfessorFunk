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

