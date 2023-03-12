// PI Day challenge

let hit = false;
let w = 400;
let h = 400;
let t = 50;
let n = 4;
//let r = 10;
let s = 10;
const poly = Array(16).fill(); // stores the vertices for our polygon.
let columns = []; // create an array of lines to check for intersections
let polygons = []; // create an array of polygons

// parameters to keep track of intersections
let total = 0;
let intersecting = 0;

let pieDiv;

function setup() {
    createCanvas(w, h);
    background(0);
    rectMode(CENTER);
    collideDebug(true); // enable debug mode

    // Add lines
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
    // let side;
    // add a polygon
    
    for (let i=0; i< 2; i++) {
        let angle = random(0, PI);
        let x = random(width);
        let y = random(height);
        
        
        //console.log(s);

        let closest = round(x / t);
        let d = abs(closest * t - x);

        let r = s/(2*sin(180/n));
        let a = r * (cos(PI / n)); //apothem of polygon
        let len = min(r, a); 
        // console.log(r)
        // console.log(a);
       
        console.log(d);
        console.log(len);
        if (d < r) {
            stroke(0, 255, 0, 50);
            fill(0, 255, 0,150);
            strokeWeight(0.1);
            intersecting++;
        } else {
            stroke(255, 100);
            strokeWeight(1);
        }

        total++;

        push();
        translate(x, y);
        // stroke(255,0,0);
        rect(x,y,10,10);
        //polygon(x,y,r,n);
        pop();
    }
  
    // let prob = intersecting / total;
    // let pie = (2 * len) / (prob * t);

    // pieDiv.html(nf(pie, 1, 5));
    noLoop();
}

function createPolygon(u, v, k) {
    // Generate a 16-sided polygon:
    let s;
    let b = 10;
    let c = 0;
    let d = 0;
    push();
    translate(u, v);
    const angle = TAU / k;
    for (let i = 0; i < TWO_PI; i++) {
        //for (let i = 0; i < k; i++) {
        const a = i;
        //const a = angle * i;
        const x = cos(a) * b + 0;
        const y = sin(a) * b + 0;
        poly[i] = createVector(x, y);
        s = poly[0].mag();
      
    }
    pop();
    return s;
}
function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

class Divider {
    constructor(_x, _h) {
        this.x = _x;
        this.h = _h;
    }
    addLine() {
        stroke(255);
        strokeWeight(1);
        line(this.x, 0, this.x, this.h);
    }

}