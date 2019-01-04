var canvas;

function setup() {
    // We are still calling createCanvas like in the past, but now 
    // we are storing the result as a variable. This way we can 
    // call methods of the element, to set the position for instance.
    canvas = createCanvas(600, 400);

    // Here we call methods of each element to set the position 
    // and id, try changing these values.
    // Use the inspector to look at the HTML generated from this 
    // code when you load the sketch in your browser.
    canvas.class("lemon");
}

function draw() {
    // These commands are applied to the graphics canvas as normal.
    background(220, 180, 200);
    canvas.position(300, 100);
    ellipse(width/2, height/2, mouseX, mouseY);
    ellipse(width/4, height/2, 50, 50);
}
