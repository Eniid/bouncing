/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Circle.js":
/*!***********************!*\
  !*** ./src/Circle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle =
/*#__PURE__*/
function () {
  function Circle(canvas, colors, ctx) {
    _classCallCheck(this, Circle);

    this.ctx = ctx;
    this.raduis = 10 + Math.round(Math.random() * 30);
    this.possiblepixelsW = canvas.width - 2 * this.raduis;
    this.possiblepixelsH = canvas.height - 2 * this.raduis;
    this.poseX = this.raduis + Math.floor(Math.random() * this.possiblepixelsW);
    this.poseY = -this.raduis;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.velocityX = 5 + Math.random() * 2;
    this.velocityY = 5 + Math.random() * 2;
    this.canvas = canvas;
    this.gravity = 0.5;
  }

  _createClass(Circle, [{
    key: "updateCoordinates",
    value: function updateCoordinates() {
      /* if(this.poseX >= this.canvas.width - this.raduis || this.poseX <= this.raduis){
          this.velocityX = this.velocityX * -1
      }
      if(this.poseY >= this.canvas.height - this.raduis || this.poseY <= this.raduis){
         this.velocityY = this.velocityY * -1
      } */
      this.velocityY += this.gravity;
      this.poseY += this.velocityY;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.updateCoordinates();
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.poseX, this.poseY, this.raduis, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }]);

  return Circle;
}();



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ "./src/Circle.js");

var animation = {
  canvasElt: null,
  ctx: null,
  circles: [],
  nbCircle: 20,
  colors: ['#A5CBCE', '#DA6A74', '#3C3A5D'],
  init: function init() {
    var _this = this;

    this.canvasElt = document.createElement("canvas");
    document.body.insertAdjacentElement("afterbegin", this.canvasElt);
    this.resize();
    window.addEventListener('resize', function (e) {
      _this.resize();
    }, false);
    this.ctx = this.canvasElt.getContext("2d");

    for (var i = 0; i < 20; i++) {
      this.circles.push(new _Circle__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvasElt, this.colors, this.ctx));
    }

    this.draw();
    this.animate();
  },
  draw: function draw() {
    for (var i = 0; i < this.nbCircle; i++) {
      this.circles[i].draw();
    }
  },
  animate: function animate() {
    var _this2 = this;

    this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
    this.draw();
    window.requestAnimationFrame(function () {
      _this2.animate(); // les arrow function permettes que le this reste le bon. 

    });
  },
  resize: function resize() {
    console.log(this);
    this.canvasElt.height = window.innerHeight;
    this.canvasElt.width = window.innerWidth;
  }
};
animation.init();

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/main.js ./src/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/enid/Documents/cours/Multimedia_js/teste/src/main.js */"./src/main.js");
module.exports = __webpack_require__(/*! /Users/enid/Documents/cours/Multimedia_js/teste/src/style.scss */"./src/style.scss");


/***/ })

/******/ });