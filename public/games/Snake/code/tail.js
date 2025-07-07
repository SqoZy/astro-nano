class Tail {
    constructor() {
        this.tail = [];
    }

    addSegment(x, y) {
        this.tail.push({ x: x, y: y });
    }
    
    show() {
        for (let i = 0; i < this.tail.length; i++) {
            fill(100, 255, 100);
            rect(this.tail[i].x, this.tail[i].y, cellSize, cellSize);
        }
    }
}