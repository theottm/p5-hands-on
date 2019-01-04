var wd = 800;//width
var ht = 800;//height
// size of the form
var i = 1;
var x = 1;
var y = 1;

function setup() {
    createCanvas(wd, ht);
};

function draw() {
    background(255/2);
    fill(i/800*255);
    noStroke(255);
    translate(i, i);
    triangle(0, 0, 0, i, i, 0);
    i = i + mouseX/800*40-20;
    fill(255-i/800*255);
    triangle(800, 800, 800, 800-i, 800-i, 800);
    print(i);
    if (i>800) {i=0;};
    if (i<0) {i=800};
}
