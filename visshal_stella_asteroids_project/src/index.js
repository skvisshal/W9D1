const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.height = 700;
    canvasEl.width = 800;

    const ctx = canvasEl.getContext("2d");
    mo.draw(ctx);
    mo.move(10);
    mo.draw(ctx);
});