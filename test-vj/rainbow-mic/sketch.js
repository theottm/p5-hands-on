// rainbow-mic

function setup() {
    createCanvas(1080, 700);
    mic = new p5.AudioIn();
    mic.start();
    background(20, 100, 200);
}

function draw() {
    noStroke();
    var vol = mic.getLevel();
    var r = map(vol, 0, 1, 0, 255);
    fill(r, 256 * mouseX / width, 256 * mouseY/ height);
    rect(500 - r * 2, 50, r * 4, 75);
    ellipse(500, 300 - r / height, mouseY, r * 4);
    fill(r, 256 - 256 * mouseY / height, 256 - 256 * mouseX/ width);
    rect(10, 10, 20, 20);
    // TODO if r > 0,8 do reinitialize ...
}

function mousePressed() {
    background(20, 100, 200);
}
