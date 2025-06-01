class Star{
    constructor(color) {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
        this.color = color;
        this.pz = this.z;
        this.sx = 0;
        this.sy = 0;
    }

    update() {
        this.z = this.z - speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;
        }
    }

    show() {
        this.sx = map(this.x / this.z, 0, 1, 0, width);
        this.sy = map(this.y / this.z, 0, 1, 0, height);

        fill(this.color);
        this.drawStar();
        this.drawSpeedLine();
    }

    drawStar() {
        let r = map(this.z, 0, width, 16, 0);
        noStroke();
        ellipse(this.sx, this.sy, r, r);
    }

    drawSpeedLine() {
        let px = map(this.x / this.pz, 0, 1, 0, width);
        let py = map(this.y / this.pz, 0, 1, 0, height);

        this.pz = this.z;
        stroke(this.color);
        line(px, py, this.sx, this.sy);
    }
}