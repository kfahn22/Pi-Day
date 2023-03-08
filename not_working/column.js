class Divider {
  constructor(_x, _h) {
    this.x = _x;
    this.h = _h;
  }

  show() {
    stroke(255,0,255);
    strokeWeight(3);
    line(this.x, 0, this.x, this.h);
  }

}