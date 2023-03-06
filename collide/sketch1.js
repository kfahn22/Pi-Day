// Return an object containing the x,y position of the intersection
// using the optional calcIntersection boolean:
var hit = false;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(255);
    line(200, 300, 100, 150);
    line(mouseX, mouseY, 350, 50);

    hit = collideLineLine(200, 300, 100, 150, mouseX, mouseY, 350, 50, true);

    // Use vectors as input:
    // const p1    = createVector(200, 300);
    // const p2    = createVector(100, 150);
    // const mouse = createVector(mouseX, mouseY);
    // const p4    = createVector(350, 50);
    // hit = collideLineLineVector(p1, p2, mouse, p4, true);

    stroke(hit ? color('red') : 0);
    print('X-intersection:', hit.x);
    print('Y-intersection:', hit.y);
}