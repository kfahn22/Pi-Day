class Polygon {
    constructor(_x, _y, _a, _b, _c, _k, _hit, _w, _h, _t) {
        this.x = _x;
        this.y = _y;
        this.a = _a;
        this.b = _b;
        this.c = _c;
        this.k = _k; // number of sides 
        this.hit = _hit;
        this.poly = [];
        this.w = _w;
        this.h = _h;
        this.t = t;
        this.divider = [];
    }
    poly() {
        // Generate a 16-sided polygon:
        const angle = TAU / this.k;
        for (let i = 0; i < this.k; ++i) {
            const a = angle * i;
            const x = cos(a) * this.a + this.b;
            const y = sin(a) * this.a + this.c;
            this.poly[i] = createVector(x, y);
        }
    }
    addDividers() {
        for (let col = 0; col < this.w; col += this.t) {
         this.divider.push(new Divider(col, this.h));
        }
    }

    colllide() {
        for (d of this.divider) {
            let p = this.poly();
        }
        this.hit = collideLinePoly(d.x, 0, d.x, d.h, p);
    }

    show() {
        if (this.hit) {
            stroke(255, 0, 0);
            strokeWeight(2);
            intersecting++;
        } else {
            stroke(255, 100);
        }
        push();
        translate(this.x, this.y);
        beginShape();
        for (const {
                x,
                y
            } of this.poly) vertex(x, y);
        endShape(CLOSE);
        pop();
    }
}