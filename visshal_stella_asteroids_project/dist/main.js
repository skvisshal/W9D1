/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Asteroid(options) {\n    options = options || {};   // default params\n    options.color = 'red';\n    options.radius = 5;\n\n    options.pos = options.pos;\n    options.vel = options.vel || Util.randomVec(5);\n\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids();\n}\n\nGame.DIM_X = window.innerWidth;\nGame.DIM_Y = window.innerHeight;\nGame.NUM_ASTEROIDS = 5;\n\nGame.prototype.addAsteroids = function() {\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        // console.log(this.randomPosition());\n        const asteroid = new Asteroid({ pos: this.randomPosition() });\n        // asteroid.pos = Game.randomPosition        \n        this.asteroids.push(asteroid);\n    }\n}\n\nGame.prototype.randomPosition = function() {\n    return [Math.random()*Game.DIM_X, Math.random()*Game.DIM_Y];\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.asteroids.forEach(function(asteroid) {\n        console.log(asteroid);\n        asteroid.draw(ctx);\n    })\n}\n\nGame.prototype.moveObjects = function(time) {\n    this.asteroids.forEach(function(asteroid) {\n        asteroid.move(time);\n    })\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nwindow.MovingObject = MovingObject;\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n});\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvasEl = document.getElementById(\"game-canvas\");\n    canvasEl.height = window.innerHeight;\n    canvasEl.width = window.innerWidth;\n\n    const ctx = canvasEl.getContext(\"2d\");\n    // mo.draw(ctx);\n    // mo.move(10);\n    // mo.draw(ctx);\n\n    // const ast = new Asteroid({ pos: [300, 300] });\n    // ast.draw(ctx);\n\n    const game = new Game();\n    game.draw(ctx);\n    game.moveObjects(20);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\n\nMovingObject.prototype.draw = function (ctx) {\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n    ctx.closePath();\n    ctx.fillStyle = this.color;\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(time) {\n    distX = this.vel[0] * time;\n    distY = this.vel[1] * time;\n    this.pos = [this.pos[0] + distX, this.pos[1] + distY];\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n  inherits: function inherits(childClass, parentClass) {\n      childClass.prototype = Object.create(parentClass.prototype);\n      childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;