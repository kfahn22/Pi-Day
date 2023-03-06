let t = 50;
let len = 10;

// parameters for polygon
let a = 10;
let b = 30;
let c = 20;

// parameters for counting intersections
let total = 0;
let intersecting = 0;

let pieDiv;

let hit = false;
const poly = Array(16).fill(); // stores the vertices for our polygon.

function setup() {
    createCanvas(500, 500);
    collideDebug(true); // enable debug mode

    // Draw lines
    for (let col = 0; col < width; col += t) {
        stroke(255);
        strokeWeight(1);
        line(col, 0, col, height);
      }

    // Generate a 16-sided polygon:
    const angle = TAU / poly.length;
    for (var i = 0; i < poly.length; ++i) {
        const a = angle * i;
        const x = cos(a) * a + b;
        const y = sin(a) * a + c;
        poly[i] = createVector(x, y);
    }
}

function draw() {
    background(255);

    // Draw the polygon from the 16 created vectors{x, y} stored in poly[]:
    beginShape();
    for (const { x, y } of poly)  vertex(x, y);
    endShape(CLOSE);

    line(20, 20, mouseX, mouseY);

    hit = collideLinePoly(mouseX, mouseY, 45, 100, poly);

    // Use vectors as input:
    // const mouse = createVector(mouseX, mouseY);
    // const p2    = createVector(45, 100);
    // hit = collideLinePolyVector(mouse, p2, poly);

    stroke(hit ? color('red') : 0);
    print('colliding?', hit);
}