const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");

function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.DIM_X = window.innerWidth;
Game.DIM_Y = window.innerHeight;
Game.NUM_ASTEROIDS = 5;

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        // console.log(this.randomPosition());
        const asteroid = new Asteroid({ pos: this.randomPosition() });
        // asteroid.pos = Game.randomPosition        
        this.asteroids.push(asteroid);
    }
}

Game.prototype.randomPosition = function() {
    return [Math.random()*Game.DIM_X, Math.random()*Game.DIM_Y];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function(asteroid) {
        console.log(asteroid);
        asteroid.draw(ctx);
    })
}

Game.prototype.moveObjects = function(time) {
    this.asteroids.forEach(function(asteroid) {
        asteroid.move(time);
    })
}

module.exports = Game;