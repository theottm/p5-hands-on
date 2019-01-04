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
    fill(i/(wd+ht)/2*255);
    noStroke(255);
    triangle(0, 0, 0, i, i, 0);
    i = i + mouseX/800*40-20;
    fill(255-i/(wd+ht)/2*255);
    triangle(wd, ht, wd, ht-i, wd-i, ht);
    print(i);
    if (i>(wd+ht)/2) {i=0;};
    if (i<0) {i = (wd+ht)/2;};
}
