/*

let image = document.querySelector('img');
let moveBy = 10;

window.addEventListener('keydown', e => {
    const top = image.style.top ? image.style.top : 0
    const left = image.style.left ? image.style.left : 0
    switch(e.key) {
        case 'ArrowLeft':
            image.style.left = (parseInt(left) - moveBy) + 'px';
            break;
        case 'ArrowRight': 
            image.style.left = (parseInt(left) + moveBy) + 'px';
            break;
        case 'ArrowUp':
            image.style.top = (parseInt(top) - moveBy) + 'px';
            break;
        case 'ArrowDown':
            image.style.top = (parseInt(top) + moveBy ) + 'px';
            break;

    }
})

*/

/*const board = document.getElementById('board');
const generator = document.getElementById('new-line');

const createRow = ()=>{

    const newRow = board.cloneNode(true);

generator.append(newRow);

}

*/

//making it so it reads index.html?

function loadHTML(){
    fetch('index.html')
}

/* 
    javascript timing to make it dissapear, have to make it so 
    that it goes up and matches the corresponding arrow later 
*/

function changeArrows() {
    var canvas = document.getElementById("arrows");
    canvas.src = arrows[x];
    x++;
    if(x>=arrows.length){
        x = 0;
    }
    fadeCanvas(canvas, 100, true);
     setTimeout("changeArrows()", 3000);
}

function fadeCanvas(i, e, fade) {
    if(fade === true ) {
        e--;
    } else {
        e++;
    }
    if(e > 0 && e <100) {
        i.style.opacity = e / 100;
        setTimeout(function() { fadeCanvas(i, e, fade); }, 10);
    }
}

var arrows = [], x = 0;
arrows[0] = "images/leftArrow.png";
setTimeout("changeArrows()", 3000);
