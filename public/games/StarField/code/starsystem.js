let starcount = 1000
let stars = new Array(starcount);
let speed = 10;
let startx = null;
let paused = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    for (let i = 0; i < stars.length; i++) {
        stars[i] = new Star(color(255, 255, 255));
    }
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }

    if (paused) return drawPauseMenu();

    if (!paused && mouseIsPressed) {
        if (startx === null) {
            startx = mouseX;
        }
        let speedup = startx + 500;
        let slowdown = startx - 500;
        speed = map (mouseX, slowdown, speedup, 0, 100);
        speed = constrain(speed, 0, 100);
    } else startx = null;
}

function keyPressed() {
    if (keyCode === ESCAPE) return paused = !paused;
}