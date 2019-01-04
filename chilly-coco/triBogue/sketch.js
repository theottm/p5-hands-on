var wdt = 1920;//width
var hgt = 1080;//height
// size of the form
var i = 1;
var rx = 0;
var ry = 0;
var trigger = 0;
var x = 0;
var y = 0;

function setup() {
    createCanvas(wdt, hgt);
    background(150);
};

function draw() {
    trix = mouseX;
    triy = mouseX;
    los(trix, triy);
    dot();
}

function los(wd, ht) {
    //    translate(random(0, wdt), random(0, hgt));
    if (trigger==1) {rx = random(0, wdt), ry = random(0, hgt);};
    trigger = 0;
    translate(rx, ry);
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

function dot() {
    noStroke();
    translate(x,y);
    triangle(0, 0, -10, 10, 10, 10);
    x = x + 20;
    if (x > mouseX) {x = 0;};
    if (x==0) {y = y + 10;
	       if (trigger==0) {x = 10, trigger = 1;}
	       else {trigger = 0;};
	      };
    if (y > 800) {y = 0;};
}

function mat(mx, my) {
}
