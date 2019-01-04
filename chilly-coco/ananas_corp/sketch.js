var wdt = 800;//width
var hgt = 800;//height
// size of the form
var i = 1;
var rx = 0;
var ry = 0;
var trigger = 0;
var x = 0;
var y = 0;
var tx = 0;
var ty = 0;
var tg = 0;
var c = 0;

function setup() {
    createCanvas(wdt, hgt);
    background(150);
};

function draw() {
    trix = mouseX;
    triy = mouseX;
   // los(trix, triy);
    gen(20);
   // feuil();
   // translate(500, 500);
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

function gen(n) {
    if (i < n) {
	if (tg==0) {
	    translate(tx, ty);
	    nas(40,60);
	};
	if (tg==1) {
	    tg = 0;
	    i++;
	    print(tx, ty, i);
	    tx = random(0, 800);
	    ty = random(0, 800);
	};
    };
}

function nas(lrg, lng) {
    noStroke();
    translate(x,y);
    triangle(0, 0, -10, 10, 10, 10);
    x = x + 20;
    if (x > lrg) {x = 0;};
    if (x==0) {y = y + 10;
	       if (trigger==0) {x = 10, trigger = 1;}
	       else {trigger = 0;};
	      };
    if (y > lng) {tg = 1; y = 0;};
}

function feuil() {
    if (c < 3) {
	rotate (45);
	fill(0, 200, 0);
	c = c + 1;
	triangle(0, 0, -10, 10, 10, 10);
    };
    if (c > 3) {
	tg = 1;
    };
}

function mat(mx, my) {
}
