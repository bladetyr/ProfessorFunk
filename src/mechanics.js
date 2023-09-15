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
let hit_box = {
    hit_x: position.x + size.width,
    hit_y: position.y + size.height
};
//drawing the character with the x and y
function drawRect(){
    ctx.fillStyle = '#666';
    ctx.fillRect(position.x, position.y, size.width, size.height);
}
drawRect();
/** 
 * 
add a event listener for the movements 

update the position fields (you could use a useState)

just check to make sure the object and the character hit boxes are equal
for perfect hit

or add a range for a ok hit. like within a certain amount of pixels

remember to change the positions and the width and the height of the boxes when
you implement the actual character or arrow sheets in. 

on button click, you have to check the name of the character aka which arrow button
and then it's posiiton

*/