class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.tailLength = 4;
        this.tail = new Tail();
        this.direction = 'right';
        this.directionQueue = [];
        this.walking = false;
        this.lastMoveTime = 0;
        this.moveInterval = 80;
        this.queueTimeout = 350;
        this.foodEaten = 0;
    }

    move() {
        if (millis() - this.lastMoveTime >= this.moveInterval) {
            let oldX = this.x;
            let oldY = this.y;

            this.cleanExpiredDirections();

            if (this.directionQueue.length > 0) {
                let nextDirection = this.directionQueue.shift().direction;
                if (this.isValidDirection(nextDirection)) this.direction = nextDirection;
            }

            switch (this.direction) {
                case 'up':
                    this.y -= cellSize;
                    break;
                case 'down':
                    this.y += cellSize;
                    break;
                case 'left':
                    this.x -= cellSize;
                    break;
                case 'right':
                    this.x += cellSize;
                    break;
            }

            this.tail.addSegment(oldX, oldY);
            if (this.tail.tail.length > this.tailLength) this.tail.tail.shift();

            this.lastMoveTime = millis();
        }
    }

    cleanExpiredDirections() {
        const currentTime = millis();
        this.directionQueue = this.directionQueue.filter(item =>
            currentTime - item.timestamp < this.queueTimeout
        );
    }

    isValidDirection(direction) {
        if (direction === 'up' && this.direction !== 'down') return true;
        if (direction === 'down' && this.direction !== 'up') return true;
        if (direction === 'left' && this.direction !== 'right') return true;
        if (direction === 'right' && this.direction !== 'left') return true;
        else return false;
    }

    setDirection(direction) {
        this.cleanExpiredDirections();

        if (this.directionQueue.length < 2 && this.isValidDirection(direction)) {
            if (this.directionQueue.length === 0 ||
                this.directionQueue[this.directionQueue.length - 1].direction !== direction) {
                this.directionQueue.push({
                    direction: direction,
                    timestamp: millis()
                });
            }
        }
    }

    show() {
        fill(0, 150, 0);
        rect(this.x, this.y, this.width, this.height);
        this.tail.show();
    }

    checkCollision() {
        if (this.x < mapOffsetX + cellSize ||
            this.x >= mapOffsetX + (map[0].length - 1) * cellSize ||
            this.y < mapOffsetY + cellSize ||
            this.y >= mapOffsetY + (map.length - 1) * cellSize) {
            return this.returnToEndScreen();
        }

        for (let i = 0; i < food.length; i++) {
            if (this.x === food[i].x && this.y === food[i].y) {
                if (food[i].typefood === 1) {
                    this.tailLength++;
                }
                food.splice(i, 1);
                this.tailLength++;
                this.foodEaten++;
                food.push(Food.generateRandomPosition(map[0].length, map.length, cellSize));
                this.checkFoodInTail();
                break;
            }
        }

        for (let i = 0; i < this.tail.tail.length; i++) {
            if (this.x === this.tail.tail[i].x && this.y === this.tail.tail[i].y) return this.returnToEndScreen();
        }
    }

    returnToEndScreen(){
        finalTime = (millis() - startTime) / 1000;
        screen = 'endscreen';
    }

    checkFoodInTail() {
        for (let i = 0; i < food.length; i++) {
            for (let j = 0; j < this.tail.tail.length; j++) {
                if (food[i].x === this.tail.tail[j].x && food[i].y === this.tail.tail[j].y) {
                    food.splice(i, 1);
                    food.push(Food.generateRandomPosition(map[0].length, map.length));
                }
            }
        }
    }
}