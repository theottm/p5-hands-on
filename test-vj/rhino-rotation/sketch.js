// rhino-rotation

r = 0;

function setup() {
    // put setup code here
    createCanvas(1920, 1080);
    img = loadImage("1rhinoMarche.gif")
}

function draw() {
  // put drawing code her
    background(20, 100, 200)
    cursor(HAND);
    rotate (r)
    image(img, mouseX - img.width/2, mouseY - img.height/2);
    if (mouseIsPressed) {
        r = r + 5;
    }
}
