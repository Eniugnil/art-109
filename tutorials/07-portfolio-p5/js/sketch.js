let canvas;
let xPos = 0;
let yPos = 0;
let easing = 1;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index",-2)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}




function draw() {
    clear();
    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);
    drawThing(xPos, yPos)
}

function drawThing(_x, _y) {
    background(220);
    for (let i=0; i<6; i++) {
        strokeWeight(0);
        fill(255*(i/5));
        ellipse(_x, _y, 50-(i*50), 50-(i*7));
    }
}  

