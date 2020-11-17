class Game {
    constructor() {        
        this.res = 20;
        this.screen_h = floor(height/this.res);
        this.screen_w = floor(width/this.res);
        
        let x = floor(this.screen_w/2) - 1;
        let y = floor(this.screen_h/2) - 1;
        this.snake = new Snake(x, y);
        this.food = this.pickFoodLocation();
    }

    // Function that sets a new location for the food
    pickFoodLocation() {
        let x = floor(random(this.screen_w));
        let y = floor(random(this.screen_h));
        return createVector(x, y);
    }

    // Check's for game over
    checkGameOver() {
        let head = this.snake.body[this.snake.body.length-1];
        
        // Off the screen
        if (head.x < 0 || head.x > this.screen_w || head.y < 0 || head.y > this.screen_h)
            return true;

        // Checking body parts
        for (var i = 0; i < this.snake.body.length-1; i++) {
            let part = this.snake.body[i];
            if (part.x == head.x && part.y == head.y)
                return true;
        }

        return false;
    }

    keyPressed() {
        if (keyCode === UP_ARROW)
            this.snake.changeDir(0, -1);
        else if (keyCode === RIGHT_ARROW)
            this.snake.changeDir(1, 0);
        else if (keyCode === DOWN_ARROW)
            this.snake.changeDir(0, 1);
        else if (keyCode === LEFT_ARROW)
            this.snake.changeDir(-1, 0);
    }

    update() {
        if (this.snake.eat(this.food)) {
            this.snake.grow();
            this.food = this.pickFoodLocation();
        }

        this.snake.update();
    }
    
    show() {
        scale(this.res);

        // Drawing food
        noStroke();
        fill(255, 0, 0);
        rect(this.food.x, this.food.y, 1, 1);
        
        // Drawing snake
        this.snake.show();
    }
}