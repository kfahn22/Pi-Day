// https://editor.p5js.org/kfahn/sketches/TFAnV1e_B

class Polygon {
    constructor(_x, _y, _a, _b, _c, _k, _hit, _w, _h, _t) {
        this.x = _x;
        this.y = _y;
        this.a = _a;
        this.b = _b;
        this.c = _c;
        this.poly = []; // stores the vertices for our polygon.
        this.k = 32; // number of sides 
        this.hit = _hit;
        //this.poly = [];
        this.w = _w;
        this.h = _h;
        this.t = t;
        this.columns = [];
    }
    createPolygon() {
        // Generate a 16-sided polygon:
       
        push();
        //translate(this.x,this.y);
        const angle = TAU/ this.k;
        console.log(angle);
        for (let i = 0; i < this.k; i++) {
            const a = angle * i;
            const x = cos(a) * 100 + 0;
            const y = sin(a) * 100 + 0;
           
            // const x = cos(a)*50;// * 25;
            // const y = sin(a)*50;// * 25 ;
            this.poly[i] = createVector(x, y);
        }
        pop();
    }

    calcSide() {
        let s = this.poly[1].sub(this.poly[0]);
        return s.mag();
    }

    addcolumns() {
        for (let col = 0; col < this.w; col += this.t) {
            this.columns.push(new Divider(col, this.h));
        }
    }

    colllide() {
        for (d of this.columns) {
            let p = this.poly;
            line(d.x, 0, d.x, d.h);
            this.hit = collideLinePoly(d.x, d.h, this.x, this.y, p);
        }
    }

    show() {
        strokeWeight(0.1);
        if (this.hit) {
            stroke(255, 0, 0);
            intersecting++;
        } else {
            stroke(255, 100);
        }
        push();
        translate(this.x, this.y);
        noFill();
        beginShape();
        for (const {
                x,
                y
            } of this.poly) vertex(x, y);
        endShape();
        pop();
    }
}