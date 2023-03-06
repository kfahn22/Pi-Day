class Divider {
    constructor(_x, _h) {
    this.h = _h;
    this.x = _x;
    }

    show() {
            stroke(255);
            strokeWeight(1);
            line(_x, 0, _x, this.h);
          }
}