var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
document.head.appendChild(jQueryScript);

//DIRECTION/TIME TAKEN TO GO UP/TIME UNTIL READING NEXT NOTE
var file = "../beatmaps/exampleBeatmap.txt";
function parseBeatmap(){
    $.get(file,function(txt){
        var lines = txt.responseText.split("\n");
        for (var i = 0, len = lines.length; i < len; i++) {
            save(lines[i]);
            console.log(lines[i]);
        }
    }); 
}