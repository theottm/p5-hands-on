var wdt = 800;//width
var hgt = 800;//height
// size of the form
var i = 1;
var x = 1;
var y = 1;

function setup() {
    createCanvas(wdt, hgt);
};

function draw() {
    trix = mouseX;
    triy = mouseY;
    translate(random(0, wdt), random(0, hgt));
    trig(trix, triy);
}

function trig(wd, ht) {
    background(255/2);
    fill(i/(wd+ht)/2*255);
    noStroke(255);
    triangle(0, 0, 0, i, i, 0);
    i = i + (wd+ht)/2/800*mouseY;
    fill(255-i/(wd+ht)/2*255);
    translate(-wd, -ht);
    triangle(wd, ht, wd, ht-i, wd-i, ht);
    print(i);
    if (i>(wd+ht)/2) {i=0;};
    if (i<0) {i = (wd+ht)/2;};
}
