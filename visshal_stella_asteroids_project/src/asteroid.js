const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

function Asteroid(options) {
    options = options || {};   // default params
    options.color = 'red';
    options.radius = 5;

    options.pos = options.pos;
    options.vel = options.vel || Util.randomVec(5);

    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;