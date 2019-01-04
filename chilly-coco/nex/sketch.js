var dot = {
    x: 0,
    y: 0
};

var dot3 = {
    x: 100,
    y: 100
};

var dot2 = {
    x: 0,
    y: 100
};

var cib = {
    x: 10,
    y: 10
};

var i = 0;

function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(100);
    draw_dot3(1,50,10);
    draw_dot2(1,50,20);
    draw_dot(1,50,30);
    print(dot, dot2, dot3);
    i = i + 1;
    print (i);
    if (i == 200) {
	dot.x = random(200);
	dot.y = random(200);
	dot2.x = random(200);
	dot2.y = random(200);
	dot3.x = random(200);
	dot3.y = random(200);
	i = 0;
    };
}

function draw_dot(id, col, taille) {
    rect(dot.x, dot.y, taille, taille);
    
    var mv = {
	x: 1,
	y: 1};
    if (dot.x - dot2.x > 0){
	mv.x = -1;
    } else {mv.x = 1;};
    if (dot.y - dot2.y > 0){
	mv.y = -1;
    } else {mv.y = 1;};
    
    dot.x = dot.x + mv.x;
    dot.y = dot.y + mv.y;

    if (dot.x == dot2.x && dot.y == dot2.y) {
	dot.x = random(200);
	dot.y = random(200);
	dot2.x = random(200);
	dot2.y = random (200);
    };    
}

function draw_dot2(id, col, taille) {
    rect(dot2.x, dot2.y, taille, taille);
    
    var mv = {
	x: 1,
	y: 1};
    if (dot2.x - dot3.x > 0){
	mv.x = -1;
    } else {mv.x = 1;};
    if (dot2.y - dot3.y > 0){
	mv.y = -1;
    } else {mv.y = 1;};
    
    dot2.x = dot2.x + mv.x;
    dot2.y = dot2.y + mv.y;
}

function draw_dot3(id, col, taille) {
    rect(dot3.x, dot3.y, taille, taille);
    
    var mv = {
	x: 1,
	y: 1};
    if (dot3.x - dot.x > 0){
	mv.x = -1;
    } else {mv.x = 1;};
    if (dot3.y - dot.y > 0){
	mv.y = -1;
    } else {mv.y = 1;};
    
    dot3.x = dot3.x + mv.x;
    dot3.y = dot3.y + mv.y;
}

function draw_cib() {
    rect(cib.x, cib.y, 2, 2);
    cib.x = mouseX;
    cib.y = mouseY;
}
