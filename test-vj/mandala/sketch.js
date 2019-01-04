// mandala

function setup() {
    createCanvas(1080, 700);
    background(20, 100, 200);
}

var dot = {
    x : 500,
    y : 300,
    dx : 1,
    dy : 1,
    v : 1
}

function draw() {
    
    noStroke();
//var h = map(volume, 0, 1, 0, 1080);
//var w = map(volume, 0, 1, 0, 700);
// var hit = 1;
// Draw subject
    fill(0, 0, 0);
    rect(dot.x, dot.y, 10, 10);
    fill(0, 0, 255);
    rect(1080-dot.x, dot.y, 10, 10);
    fill(0, 255, 0);
    rect(dot.x, 700-dot.y, 10, 10);
    fill(255, 0, 0);
    rect(1080-dot.x, 700-dot.y, 10, 10);
//direction is driven by mouse position on screen
    dot.dx = map(mouseX, 0, 1080, -1, 1);
    dot.dy = map(mouseY, 0, 700, -1, 1);
//speed fixed
    dot.v = 10;
//calculation of dot's position    
    dot.x = dot.x + (dot.dx * dot.v);
    dot.y = dot.y + (dot.dy * dot.v);
// game reset
    if (dot.x > 1080 || dot.y > 700 || dot.x < 0 || dot.y < 0) {
//	saveFrames("screenshot-collection", "jpg", 1, 1, fonction(Array) that will save the image on the server or draw it in some way in client's brower;
	dot.x = 500,
        dot.y = 300,
       // TODO change direction or add random hit = -1 * hit
        background(20, 100, 200); // resets the game
    }
}

