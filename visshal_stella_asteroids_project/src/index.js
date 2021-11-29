const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
const Game = require("./game.js");

window.MovingObject = MovingObject;

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.height = window.innerHeight;
    canvasEl.width = window.innerWidth;

    const ctx = canvasEl.getContext("2d");
    // mo.draw(ctx);
    // mo.move(10);
    // mo.draw(ctx);

    // const ast = new Asteroid({ pos: [300, 300] });
    // ast.draw(ctx);

    const game = new Game();
    game.draw(ctx);
    game.moveObjects(20);
});