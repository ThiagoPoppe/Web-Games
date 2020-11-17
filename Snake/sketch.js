let snake, food;
let screen_h, screen_w;
let res = 20;

function setup() {
    createCanvas(400, 400);
    frameRate(5);

    screen_h = floor(height/res);
    screen_w = floor(width/res);

    snake = new Snake();
    pickFoodLocation();
}

function draw() {
    scale(res);
    background(51);

    // Drawing food
    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);

    // Drawing snake
    if (snake.eat(food)) {
        snake.grow();
        pickFoodLocation();
    }

    snake.update();
    snake.show();

    if (snake.endGame()) {
        print("*END GAME*")
        background(255,0,0);
        noLoop();
    }
}   

// Changes snake direction
function keyPressed() {
    if (keyCode === UP_ARROW)
        snake.changeDir(0, -1);
    else if (keyCode === RIGHT_ARROW)
        snake.changeDir(1, 0);
    else if (keyCode === DOWN_ARROW)
        snake.changeDir(0, 1);
    else if (keyCode === LEFT_ARROW)
        snake.changeDir(-1, 0);
}

// Function that sets a new location for the food
function pickFoodLocation() {
    let x = floor(random(screen_w));
    let y = floor(random(screen_h));

    food = createVector(x, y);
}