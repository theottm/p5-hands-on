function setup() {
    // put setup code here
    createCanvas(1080, 700);
    mic = new p5.AudioIn();
    mic.start();
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
  // put drawing code her
    noStroke();
    var vol = mic.getLevel();
var col = map(vol, 0, 1, 0, 10);
var h = map(vol, 0, 1, 0, 1080);
var w = map(vol, 0, 1, 0, 700);
    // var hit = 1;
    fill(0, 0, 0);
    rect(dot.x, dot.y, 10, 10);
    dot.dx = map(mouseX, 0, 1080, -1, 1);
    dot.dy = map(mouseY, 0, 700, -1, 1);
    dot.v = col;
    dot.x = dot.x + (dot.dx * dot.v);
    dot.y = dot.y + (dot.dy * dot.v);
    
    if (dot.x > 1080 || dot.y > 700 || dot.x < 0 || dot.y < 0) {
        dot.x = 500,
        dot.y = 300
       // TODO change direction or add random hit = -1 * hit
            background(20, 100, 200) // reset game
    }
}

