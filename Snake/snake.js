class Snake {
    constructor(x, y) {
        this.body = [];
        this.body[0] = createVector(x, y);

        this.xdir = 1;
        this.ydir = 0;
    }

    changeDir(xdir, ydir) {
        this.xdir = xdir;
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
        noStroke();
        fill(255);
        for (var i = 0; i < this.body.length; i++)
            rect(this.body[i].x, this.body[i].y, 1, 1);
    }
}