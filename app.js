console.log("hey denny")
var c = document.getElementById("myCanvas")
var ctx = c.getContext("2d")

//** make a line **/
//Line Starts at 0,0 is the top left cornder of the canvas
ctx.moveTo(0,0);
//This is make line 400px to right and 100px down
ctx.lineTo(400,100);
//Draws the shape by making the outline, here a line
ctx.stroke();


//** Make a triange; **/
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();