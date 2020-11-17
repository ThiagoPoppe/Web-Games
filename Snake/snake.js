class Snake {
    constructor(size) {
        this.body = [];
        this.body[0] = createVector(floor(screen_w/2), floor(screen_h/2));

        this.xdir = 1;
        this.ydir = 0;
    }

    changeDir(xdir, ydir) {
        this.xdir = xdir;
        this.ydir = ydir;
    }

    endGame() {
        let head = this.body[this.body.length-1];
        
        // Off the screen
        if (head.x < 0 || head.x > screen_w || head.y < 0 || head.y > screen_h)
            return true;

        // Checking body parts
        for (var i = 0; i < this.body.length-1; i++)
            if (this.body[i].x == head.x && this.body[i].y == head.y)
                return true;

        return false;
    }

    eat(food) {
        let head = this.body[this.body.length-1];
        return head.x == food.x && head.y == food.y;
    }

    grow() {
        let head = this.body[this.body.length-1].copy();
        this.body.push(head);
    }

    update() {
        let head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }

    show() {
        noStroke();
        fill(255);
        for (var i = 0; i < this.body.length; i++)
            rect(this.body[i].x, this.body[i].y, 1, 1);
    }
}