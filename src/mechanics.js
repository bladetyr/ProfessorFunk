//setting up the character with deminsions
var character = $('#canvas');
ctx = character.getContext('2d');
let position = {
    x: 10,
    y: 10
};
let size = {
    width: 20,
    height: 20
};
//drawing the character with the x and y
function drawRect(){
    ctx.fillStyle = '#666';
    ctx.fillRect(position.x, position.y, size.width, size.height);
}
drawRect();
//moving the character
window.addEventListener("keydown", function(event)){};