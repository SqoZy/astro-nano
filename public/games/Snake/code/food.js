class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = cellSize;
    this.height = cellSize;
    this.typefood = Math.floor(random(1, 3));
    this.color = this.typefood === 1 ? color(0, 0, 255) : color(255, 0, 0);
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  static generateRandomPosition(mapWidth, mapHeight) {
    const x = (Math.floor(Math.random() * (mapWidth - 2)) + 1) * cellSize + mapOffsetX;
    const y = (Math.floor(Math.random() * (mapHeight - 2)) + 1) * cellSize + mapOffsetY;

    return new Food(x, y);
  }
}