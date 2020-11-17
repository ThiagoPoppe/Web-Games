class Snake {
    constructor(x, y) {
        this.body = [];
        this.body[0] = createVector(x, y);

        this.xdir = 1;
        this.ydir = 0;
    }

    changeDir(xdir, ydir) {
        if (this.xdir != xdir * -1) // not allowing backward moves
            this.xdir = xdir;
        if (this.ydir != ydir * -1) // not allowing backward moves
            this.ydir = ydir;
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
        fill(255);
        for (var i = 0; i < this.body.length-1; i++)
            rect(this.body[i].x, this.body[i].y, 1, 1);

        let head = this.body[this.body.length-1];
        fill(0, 255, 0);
        rect(head.x, head.y, 1, 1);
    }
}