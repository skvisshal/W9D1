function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}


MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
}

MovingObject.prototype.move = function(time) {
    distX = this.vel[0] * time;
    distY = this.vel[1] * time;
    this.pos = [this.pos[0] + distX, this.pos[1] + distY];
}

module.exports = MovingObject;
