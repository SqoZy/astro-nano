class Button{
    constructor(text, x, y, w, h, color, callback, stroke) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color || color(0);
        this.callback = callback;
        this.stroke = stroke || false;
        this.left = x - w / 2;
        this.right = x + w / 2;
        this.top = y - h / 2;
        this.bottom = y + h / 2;
        this.active = false;
    }

    show() {
        if (this.stroke) {
            stroke(0);
            strokeWeight(2);
        } else noStroke();
        if (this.active) {
            fill(this.color.levels[0] * 0.8, this.color.levels[1] * 0.8, this.color.levels[2] * 0.8);
            setTimeout(() => { this.active = false; }, 200);
        }
        else fill(this.color);

        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h, 7);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(20);
        text(this.text, this.x, this.y);
    }
}