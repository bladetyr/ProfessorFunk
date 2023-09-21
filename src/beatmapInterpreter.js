var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js');
document.head.appendChild(jQueryScript);

// DIRECTION/TIME TAKEN TO GO UP/TIME UNTIL READING NEXT NOTE
var file = "../beatmaps/exampleBeatmap.txt";
function parseBeatmap(){
    $.get(file,function(txt){
        var lines = txt.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
            console.log(lines[i]);
        }
    }); 
    return 0;
}