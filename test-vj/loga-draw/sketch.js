// loga draw

function setup() {
    createCanvas(1080, 700);
    background(20, 100, 200);
}

var dot = {
    x : 500,
    y : 700,
    dx : 0,
    dy : -1,
    v : 1
}

function draw() {
    
    noStroke();
//var h = map(volume, 0, 1, 0, 1080);
//var w = map(volume, 0, 1, 0, 700);
// var hit = 1;
// Draw subject
    fill(0, 0, 0);
    rect(dot.x, dot.y, 20, 20);
//direction is changed if top is reached / dx is the distance between mouse and dot on the x-axis
    var xdir = mouseX - dot.x - 10;
    console.log(xdir);
    dot.dx = map(xdir, -1080, 1080, -10, 10);
    if (dot.y < 1 || dot.y > 699) { dot.dy = -dot.dy;};
   //dot.dx = 0;
    //dot.dy = -1;
//speed fixed
    dot.v = 1;
//calculation of dot's position    
    dot.x = dot.x + (dot.dx * dot.v);
    dot.y = dot.y + (dot.dy * dot.v);
// game reset
    if (dot.x > 1080 || dot.y > 700 || dot.x < -10 || dot.y < 0) {
        dot.x = 500,
        dot.y = 700,
       // TODO change direction or add random hit = -1 * hit
        background(20, 100, 200); // resets the game
    }
}

