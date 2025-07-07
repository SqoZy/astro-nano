function startScreen() {
    background(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    noStroke()
    fill(255);
    text("press any key to start", width / 2, height / 2);
    if (keyIsPressed) return screen = 'gamescreen';
}

function gameScreen() {
  background(0);
  drawMap();
  player.show();
  player.move();
  player.checkCollision();
  food.forEach(f => f.show());
  walls.forEach(f => f.show());

  // Draw timer
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  let elapsed = (millis() - startTime) / 1000;
  text("Time: " + elapsed.toFixed(2) + "s", width / 3, height / 7);
}

function endScreen() {
    background(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    noStroke();
    fill(255);
    text("Game Over", width / 2, height / 2 - 20);
    text("Press enter to restart", width / 2, height / 2 + 20);
    text("Time survived: " + (finalTime.toFixed(2)) + " seconds", width / 2, height / 2 + 80);

    if (keyCode === ENTER) {
        screen = 'startscreen';
        setup();
    }
}