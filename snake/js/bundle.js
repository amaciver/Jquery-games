/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Coord = __webpack_require__(3);

class Snake {
  constructor() {
    this.direction = "N";
    this.segments = [new Coord([100,200], "N"), new Coord([105,200], "N"), new Coord([110,200], "N")];
  }

  move() {
    let evendir;
    let odddir;
    for (var i = 0; i < this.segments.length; i++) {
      if (i === 0) {
        evendir = this.segments[0].dir;
        // console.log(this.segments[0].dir);
        this.segments[0].plus(this.direction);
      } else if (i%2 === 1){
        // console.log(evendir);
        // console.log(odddir);
        odddir = this.segments[i].dir;
        this.segments[i].plus(evendir);
      } else {
        evendir = this.segments[i].dir;
        this.segments[i].plus(odddir);

      }
    }
    this.segments.forEach ((seg) => {
        // console.log(seg.pos);
        seg = seg.plus(this.direction);
    });
  }

  turn(dir) {
    this.direction = dir;
  }
}

module.exports = Snake;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(2);

class View {
  constructor($display) {
    this.$display = $display;
    this.board = new Board();
    $(window).on('keydown', (e) => this.handleKeyEvent(e));
    setInterval(() => this.step(), 500);
  }

  handleKeyEvent(e) {
    if (e.keyCode === 87) {
      this.board.snake.direction = 'N';
    }
    //key 'd' --> east
    if (e.keyCode === 68) {
      this.board.snake.direction = 'E';
    }
    //key 's' --> south
    if (e.keyCode === 83) {
      this.board.snake.direction = 'S';
    }
    //key 'a' --> west
    if (e.keyCode === 65) {
      this.board.snake.direction = 'W';
    }
    console.log(this.board.snake.direction);
  }

  step() {
    $('ul').remove();
    this.board.snake.move();
    this.draw();
  }

  draw() {
    let $ul = $("<ul class='board'></ul>");
    this.board.snake.segments.forEach((segment) => {
      let $li = $('<li class="segment"></li>');
      $ul.append($li);
      $li.position(segment.pos[0], segment.pos[1]);
    });
    this.$display.append($ul);
  }
}

module.exports = View;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Snake = __webpack_require__(0);

class Board {
  constructor() {
    this.snake = new Snake();
    this.apples = [];
  }
}

module.exports = Board;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Coord {
  constructor (pos, dir){
    this.pos = pos;
    this.dir = dir;
  }

  plus(direction){
    switch(direction) {
      case 'N':
        this.pos[1] -= 5;
        break;
      case 'E':
        this.pos[0] += 5;
        break;
      case 'S':
        this.pos[1] += 5;
        break;
      case 'W':
        this.pos[0] -= 5;
        break;
    }
    this.dir = direction;
  }
}

module.exports = Coord;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Snake = __webpack_require__(0);
const View = __webpack_require__(1);

$(() => {
  const gameDiv = $('.game-view');
  let v = new View(gameDiv);
});


/***/ })
/******/ ]);