var hit = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
    background(0, 255, 0);
    stroke(0);
    line(200, 300, 100, 150);
    circle(mouseX, mouseY, 50);

    hit = collideLineCircle(200, 300, 100, 150, mouseX, mouseY, 50);

    // Use vectors as input:
    // const p1       = createVector(200, 300);
    // const p2       = createVector(100, 150);
    // const mouse    = createVector(mouseX, mouseY);
    // const diameter = 50;
    // hit = collideLineCircleVector(p1, p2, mouse, diameter);
    if (hit) {
        stroke(255, 0, 0);
    } else {
        stroke(0);
    }
  
    print('colliding?', hit);
}
