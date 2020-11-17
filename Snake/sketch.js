let game;
let mode = 0; // 0 -> title screen, 1 -> in-game

function setup() {
    createCanvas(400, 400);
    frameRate(5);

    game = new Game();
}

function draw() {
    background(51);
    if (mode == 0) {
        textSize(64);
        fill(255);
        textAlign(CENTER);
        text("SNAKE", 0, 128, width);

        textSize(32);
        fill(255);
        text("Press enter to play!", 0, height-164, width)
    }
    else {
        if (!game.checkGameOver()) {
            game.update();
            game.show();
        }
        else {
            textSize(64);
            fill(255);
            textAlign(CENTER);
            text("GAME OVER", 0, 128, width);
        }  
    }
}

// Changes snake direction
function keyPressed() {
    if (mode == 0) {
        if (keyCode === ENTER)
            mode = 1;
    }
    else {
        game.keyPressed();
    }
}