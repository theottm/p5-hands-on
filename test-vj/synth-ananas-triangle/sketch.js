// synth ananas
// TODO fix bug : stuck on top after a random amount of time. dy changes sign in loop.
// Add brightness decrease at each hit to simulate 3D empilation

var wd = 500;//width
var ht = 3000;//height
// size of the form
var rwd = 20;
var rht = 200;

function setup() {
    createCanvas(wd, ht);
    background(20, 100, 200);
};

var dot = {
    x : wd/2,
    y : ht,
    dx : 0,
    dy : -1,
    vx : 1,
    vy : 1
};

// random position the guide will follow // counter
var xrand = 510;
var t = 0;

function draw() {
    var xdir = xrand - dot.x - 10;
// global variables inserted to use js2-refactor
    var h = ht;
// dot variables convertion to rvb
    var r = map(xdir, 0, wd, 0, 255);
    var v = map(dot.vy, 0, 10, 0, 255);
    var b = map(xrand, 0, wd, 0, 255);
    noStroke();
    // Draw subject
    fill(r, v, b);
    triangle(dot.x, dot.y, 0, 0, wd, 0);
// dy is changed if top is reached
// dx is the distance between a random number generated each 300 framesand the dot.x
    if (t > 300) {
	xrand = random(0, wd);
	t = 0;
    } else {t = t + random(300);}
    console.log(t);
    dot.dx = map(xdir, -wd, wd, -10, 10);
// dy is changes if border is reached
    if (dot.y < 1 || dot.y > ht-1) { dot.dy = -dot.dy;};
//speed rise up near the bottom
    dot.vy = map(dot.y, 0, ht, 1, ht/100);
//calculation of dot's position    
    dot.x = dot.x + (dot.dx * dot.vx);
    dot.y = dot.y + (dot.dy * dot.vy);
// game reset
   // if (dot.x > w || dot.y > height || dot.x < -10 || dot.y < 0) {
     //   dot.x = width/2,
       // dot.y = height,
       // TODO change direction or add random hit = -1 * hit
       // background(20, 100, 200); // resets the game
   // }
};

