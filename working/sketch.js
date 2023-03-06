// PI Day challenge

// parameters for polygon
let a = 10;
let b = 30;
let c = 20;
let k = 16;
let hit = false;
let w = 600;
let h = 600;
let t = 50;

let shapes = [];
let n = 100;

// parameters to keep track of intersections
let total = 0;
let intersecting = 0;

let pieDiv;

function setup() {
    createCanvas(600, 600);
    collideDebug(true); // enable debug mode

    // Add polygons
    for (let i = 0; i < n; i++) {
        let x = random(width);
        let y = random(height);
        shapes.push(new Polygon(x, y, a, b, c, k, hit, w, h, t));
    }
    pieDiv = createDiv("0.0");
    pieDiv.style("font-size", "64pt");
    pieDiv.style("font-family", "courier");
}

function draw() {
    background(255);
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].poly();
        shapes[i].show();
    }
    total++;
    let prob = intersecting / total;
    let pie = (2 * len) / (prob * t);

    pieDiv.html(nf(pie, 1, 5));
    noLoop();
}