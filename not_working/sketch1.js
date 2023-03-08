let hit = false;
let t = 20;
let len = 10;

let total = 0;
let intersecting = 0;

let pieDiv;

function setup() {
    createCanvas(600, 600);
    background(0);
    for (let col = 0; col < width; col += t) {
        stroke(255);
        strokeWeight(1);
        line(col, 0, col, height);
    }
    pieDiv = createDiv("0.0");
    pieDiv.style("font-size", "64pt");
    pieDiv.style("font-family", "courier");
}

function draw() {
    for (let i = 0; i < 100; i++) {
        //let angle = random(0, PI);
        let x = random(width);
        let y = random(height);
        circle(x, y, len / 2);
        hit = collideLineCircle(200, 300, 100, 150, x, y, len / 2);
        if (hit) {
            stroke(0, 255, 0);
            strokeWeight(2);
            intersecting++;
        } else {
            stroke(255, 100);
            strokeWeight(1);
        }
    }

    total++;

    // Use vectors as input:
    // const p1       = createVector(200, 300);
    // const p2       = createVector(100, 150);
    // const mouse    = createVector(mouseX, mouseY);
    // const diameter = 50;
    // hit = collideLineCircleVector(p1, p2, mouse, diameter);

    let prob = intersecting / total;
  let pie = (2 * len) / (prob * t);
  // console.log(pie);

  pieDiv.html(nf(pie, 1, 5));

    // stroke(hit ? color('red') : 0);
    print('colliding?', hit);
}