function visual(beatMap){
    console.log('hiii');
    const container = document.getElementById("visual");
    const canvas = document.getElementById("canvas");
    canvas.width = 300;
    canvas.height = 300;

    let audio = new Audio();
    audio.src = "../ProfessorFunk/songs/"+beatMap+".wav";
    audio.play();

    const ctx = canvas.getContext("2d");

    //set up visualizer endpoints
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let audioSource = null;
    let analyser = null;

    audioSource = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioCtx.destination);

    //determine number of bars and bar size
    analyser.fftSize = 32;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const barWidth = canvas.width / bufferLength;

    let iterate = 0;
    function animated(){
        console.log('hi agaiiiin');
        iterate = 0;
        x = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);
        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            if(i%3 == 0){
                ctx.fillStyle = "#AB72FF";
            }else if(i%3 == 2){
                ctx.fillStyle = "#23B2FA";
            }else{
                ctx.fillStyle = "#6477F9";
            }
            
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth;
        }
    
        requestAnimationFrame(animated);
    }

    animated();
    console.log('end');

}
