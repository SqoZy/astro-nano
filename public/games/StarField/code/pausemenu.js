let colorButtons = null;
let starButtons = null;
let randomColors = false;

function drawPauseMenu() {
    resetMatrix();
    fill(0, 180);
    rectMode(CORNER);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    noStroke()
    text("Paused\nPress ESC to resume\n\nPress and swipe out of\nthe pause menu to change speed\n\nChoose total stars\n\n\n\n\n\n\nChoose star colors", width / 2, 300);
    rectMode(CORNER);
    
    if (!starButtons) {
        const buttonLabels = [
            { label: "<", color: color(255,255,255), btnW: 50, stroke: true,
                callback: () => {
                    let currentColor = (stars.length > 0 && stars[0]) ? stars[0].color : color(255,255,255);
                    starcount = max(100, starcount - 100);
                    stars = new Array(starcount);
                    for (let i = 0; i < stars.length; i++) {
                        stars[i] = new Star(currentColor);
                    }
                    if(randomColors) return setStarsColorRandom();
                }
            },
            { label: starcount, color: color(255,255,255), btnW: 100, stroke: true },
            { label: ">", color: color(255,255,255), btnW: 50, stroke: true,
                callback: () => {
                    let currentColor = (stars.length > 0 && stars[0]) ? stars[0].color : color(255,255,255);
                    starcount = min(5000, starcount + 100);
                    stars = new Array(starcount);
                    for (let i = 0; i < stars.length; i++) {
                        stars[i] = new Star(currentColor);
                    }
                    if(randomColors) return setStarsColorRandom();
                }
            },
        ];
        const btnH = 100;
        const btnY = height / 2.5;
        const btnWs = buttonLabels.map(b => b.btnW);
        const totalWidth = btnWs.reduce((a, b) => a + b, 0);
        const startX = (width - totalWidth) / 2;
        let x = startX;
        starButtons = [];
        for (let i = 0; i < buttonLabels.length; i++) {
            let w = btnWs[i];
            starButtons.push(
                new Button(
                    buttonLabels[i].label,
                    x + w / 2,
                    btnY,
                    w,
                    btnH,
                    buttonLabels[i].color,
                    buttonLabels[i].callback,
                    buttonLabels[i].stroke
                )
            );
            x += w;
        }
    }    
    for (let btn of starButtons) {
        btn.show();
    }
    starButtons[1].text = starcount;

    if (!colorButtons) {
        const buttonLabels = [
            { label: "Red",    color: color(255, 0, 0),     callback: () => setStarsColor(color(255, 0, 0)) },
            { label: "Green",  color: color(0, 255, 0),     callback: () => setStarsColor(color(0, 255, 0)) },
            { label: "White",  color: color(255, 255, 255), callback: () => setStarsColor(color(255, 255, 255)) },
            { label: "Random", color: color(255, 165, 0),   callback: () => setStarsColorRandom() },
            { label: "Purple", color: color(128, 0, 128),   callback: () => setStarsColor(color(128, 0, 128)) },
            { label: "Blue",   color: color(0, 0, 255),     callback: () => setStarsColor(color(0, 0, 255)) }
        ];
        const btnW = 200;
        const btnH = 100;
        const btnY = height / 1.4;
        const totalbuttons = buttonLabels.length;
        colorButtons = [];
        for (let i = 0; i < totalbuttons; i++) {
            let x = ((i + 0.5) * width) / totalbuttons;
            colorButtons.push(
                new Button(
                    buttonLabels[i].label,
                    x,
                    btnY,
                    btnW,
                    btnH,
                    buttonLabels[i].color,
                    buttonLabels[i].callback
                )
            );
        }
    }
    for (let btn of colorButtons) {
        btn.show();
    }
}

function setStarsColor(col) {
    for (let i = 0; i < stars.length; i++) {
        stars[i].color = col;
    }
    randomColors = false;
}
function setStarsColorRandom() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].color = color(random(255), random(255), random(255));
    }
    randomColors = true;
}

function mousePressed() {
    if (paused) {
        for (let btn of starButtons) {
            if (
                mouseX > btn.left &&
                mouseX < btn.right &&
                mouseY > btn.top &&
                mouseY < btn.bottom
            ) {
                btn.callback();
                btn.active = true;
            }
        }

        for (let btn of colorButtons) {
            if (
                mouseX > btn.left &&
                mouseX < btn.right &&
                mouseY > btn.top &&
                mouseY < btn.bottom
            ) {
                btn.callback();
                btn.active = true;
            }
        }
    }
}