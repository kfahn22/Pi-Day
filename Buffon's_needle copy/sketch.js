// Coding Train / Daniel Shiffman

let t = 50;
let len =10;
let N = 100;
let total = 0;
let intersecting = 0;

let pieDiv;

function setup() {
  createCanvas(600, 600);
  background(0);

  for (let col = 0; col < width; col += t) {
    stroke(255);
    strokeWeight(3);
    line(col, 0, col, height);
  }
  pieDiv = createDiv("0.0");
  pieDiv.style("font-size", "64pt");
  pieDiv.style("font-family", "courier");
}

function draw() {
  for (let i = 0; i < N; i++) {
    let angle = random(0, PI);
    let x = random(width);
    let y = random(height);
   // let v = createVector(x, y);
    let cl = round(x / t);
    let d = abs(cl * t - x);
  //  console.log(d, cl);
   hit = collideLineCircle(cl*t, 0, cl*t, height, x, y, len / 2);
   if (hit) {
    //if (d < (len * sin(abs(angle))) / 2) {
     console.log("hit");
      strokeWeight(1);
      stroke(0, 255, 0);
      
     
      //strokeWeight(2);
      intersecting++;
    } else {
      stroke(255, 100);
      strokeWeight(1);
    }

    total++;

    push();
    translate(x, y);
    //rotate(angle);
    //strokeWeight(1);
    noStroke();
    fill(0, int(random(255)), 0);
    circle(0, 0, len / 2);
    pop();
  }

  let prob = intersecting / total;
  let pie = (2 * len) / (prob * t);
  // console.log(pie);

  pieDiv.html(nf(pie, 1, 5));
}