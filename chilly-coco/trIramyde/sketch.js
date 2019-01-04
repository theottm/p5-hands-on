var wdt = 800;//width
var hgt = 800;//height
// size of the form
var i = 1;
var rx = 0;
var ry = 0;
var trigger = 0;

function setup() {
    createCanvas(wdt, hgt);
};

function draw() {
    trix = mouseX;
    triy = mouseX;
    los(trix, triy);
}

function los(wd, ht) {
//    translate(random(0, wdt), random(0, hgt));
    if (trigger==1) {rx = random(0, wdt), ry = random(0, hgt);};
    trigger = 0;
    translate(rx, ry);
    background(255/2);
    fill(i/(wd+ht)/2*255);
    noStroke(255);
    triangle(0, 0, 0, i, i, 0);
    i = i + (wd+ht)/2/800*mouseY/800*40;
    fill(255-i/(wd+ht)/2*255);
    translate(-wd, -ht);
    triangle(wd, ht, wd, ht-i, wd-i, ht);
    print(i);
    if (i>(wd+ht)/2) {i=0, trigger = 1;};
    if (i<0) {i = (wd+ht)/2, trigger = 1;};
}
