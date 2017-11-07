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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WORLD_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WORLD_HEIGHT; });
var WORLD_WIDTH = 25;
var WORLD_HEIGHT = 25;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Starter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Randomizer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__size__ = __webpack_require__(0);



var Starter = function () {
    var randomizer = new __WEBPACK_IMPORTED_MODULE_0__Randomizer__["a" /* Randomizer */]();
    class Starter {
        setInitPopulation(mas) {
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__size__["a" /* WORLD_HEIGHT */]; j++) {
                var vector_of_numbers = randomizer.generate(0, __WEBPACK_IMPORTED_MODULE_1__size__["b" /* WORLD_WIDTH */] - 1, Math.floor(__WEBPACK_IMPORTED_MODULE_1__size__["b" /* WORLD_WIDTH */] / 2));
                vector_of_numbers.forEach(function (item, i, arr) {
                    //console.log(item);
                    mas[item][j].is_live = 1;
                });
            }
        }
    }

    return new Starter();
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_world_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_Starter__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_size__ = __webpack_require__(0);




var wr = new __WEBPACK_IMPORTED_MODULE_0__js_world_js__["a" /* World */]();
wr.setField(__WEBPACK_IMPORTED_MODULE_2__js_size__["b" /* WORLD_WIDTH */], __WEBPACK_IMPORTED_MODULE_2__js_size__["a" /* WORLD_HEIGHT */]);
wr.setInitPopulation();
wr.paintField();
wr.start();



var starter = new __WEBPACK_IMPORTED_MODULE_1__js_Starter__["a" /* Starter */]();
starter.setInitPopulation(wr.getField());

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return World; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__worldPainter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Configurator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Starter__ = __webpack_require__(1);





var World = function () {
    var mas = new Array(); //private
    var painter = new __WEBPACK_IMPORTED_MODULE_1__worldPainter__["a" /* WorldPainter */]();

    class World {
        setField(width, height) {
            for (var i = 0; i < width; i++) {
                mas[i] = new Array();
                for (var j = 0; j < height; j++) {
                    mas[i][j] = Object.create(__WEBPACK_IMPORTED_MODULE_0__object_js__["a" /* Piece */]);
                }
            }
        }

        setInitPopulation() {
            var starter = new __WEBPACK_IMPORTED_MODULE_3__Starter__["a" /* Starter */]();
            starter.setInitPopulation(mas);
        }

        getField() {
            return mas;
        }

        paintField() {
            painter.paintField();
            painter.indicate(mas);
        }

        start() {
            var configurator = new __WEBPACK_IMPORTED_MODULE_2__Configurator__["a" /* Configurator */](mas);

            var startTimer = function () {
                configurator.update(); //update mas
                painter.indicate(mas);
            };

            var time = setInterval(startTimer, 1000);
        }
    }

    return new World();
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Piece; });
var Piece = {
    is_live: 0,
    neighbor_count: 0
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldPainter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__size__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addStyle__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Iterator__ = __webpack_require__(7);




var WorldPainter = function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__addStyle__["a" /* addStyle */])('css/main.css');
    var iter = new __WEBPACK_IMPORTED_MODULE_2__Iterator__["a" /* Iterator */]();

    class WorldPainter {
        paintField() {
            iter.setInit();
        }

        indicate(mas) {
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__size__["b" /* WORLD_WIDTH */]; i++) {
                for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__size__["a" /* WORLD_HEIGHT */]; j++) {
                    var elem = iter.getElem(i, j);
                    if (mas[i][j].is_live === 1) elem.style.backgroundColor = "#4B0082";else elem.style.backgroundColor = "white";
                }
            }
        }
    }

    return new WorldPainter();
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addStyle; });
var addStyle = function (path) {
    var tag_css = document.createElement('link');
    tag_css.rel = 'stylesheet';
    tag_css.href = path; // здесь указывается URL стилевого файла
    tag_css.type = 'text/css';
    var tag_head = document.getElementsByTagName('head');
    tag_head[0].appendChild(tag_css);
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iterator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__size__ = __webpack_require__(0);


var Iterator = function () {
    var cur = 0;
    var table = document.querySelector('#game_field');
    var elems = document.getElementsByTagName('tr');

    var setRows = function () {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__size__["b" /* WORLD_WIDTH */]; i++) {
            table.insertAdjacentHTML('beforeend', '<tr></tr>');
            elems[i].id = String(i);
            //console.log(elems[i]);
        }
    };

    var setColumns = function () {
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__size__["b" /* WORLD_WIDTH */]; i++) {
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__size__["a" /* WORLD_HEIGHT */]; j++) {
                elems[i].insertAdjacentHTML('beforeend', '<td></td>');
                var childs = elems[i].childNodes;
                childs[j].id = String(j);
            }
        }
    };
    class Iterator {
        setInit() {
            setRows();
            setColumns();
        }

        getElem(cur_x, cur_y) {
            var childs = elems[cur_x].childNodes;
            return childs[cur_y];
        }
    }

    return new Iterator();
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configurator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__size__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NeighborCounter__ = __webpack_require__(9);



var Configurator = function (field) {
    var game_field;
    var counter;
    class Configurator {
        constructor(field) {
            game_field = field;
            counter = new __WEBPACK_IMPORTED_MODULE_1__NeighborCounter__["a" /* NeighborCounter */](field);
        }

        update() {

            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__size__["b" /* WORLD_WIDTH */]; i++) {
                for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__size__["a" /* WORLD_HEIGHT */]; j++) {
                    var p = game_field[i][j];
                    counter.count(i, j);

                    if (p.is_live === 0) {
                        if (p.neighbor_count === 3) {
                            game_field[i][j].is_live = 1;
                        }
                    } else {
                        if (p.neighbor_count < 2 || p.neighbor_count > 3) {
                            game_field[i][j].is_live = 0;
                        }
                    }
                }
            }
        }
    }

    return new Configurator(field);
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeighborCounter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BordersAdapter__ = __webpack_require__(10);


var NeighborCounter = function (field) {
    var game_field; //private
    var adapter = new __WEBPACK_IMPORTED_MODULE_0__BordersAdapter__["a" /* BordersAdapter */](); //private


    class NeighborCounter {
        constructor(field) {
            game_field = field;
        }

        count(pos_x, pos_y) {
            var count = 0;
            adapter.adapt(pos_x, pos_y);
            var borders = adapter.getBorders();
            //alert([borders.left_border, borders.right_border, borders.bot_border, borders.top_border]);

            for (var i = borders.left_border; i <= borders.right_border; i++) {
                for (var j = borders.bot_border; j <= borders.top_border; j++) {
                    var obj = game_field[i][j];

                    if (i === pos_x && j === pos_y) continue;
                    if (obj.is_live === 1) count++;
                }
            }
            game_field[pos_x][pos_y].neighbor_count = count; //result
        }
    }

    return new NeighborCounter(field);
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BordersAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__size_js__ = __webpack_require__(0);


var BordersAdapter = function () {
    var left_border; //private
    var right_border; //private
    var top_border; //private
    var bot_border; //private

    class BordersAdapter {
        setInitBorders(pos_x, pos_y) {
            left_border = pos_x - 1;
            right_border = pos_x + 1;
            top_border = pos_y + 1;
            bot_border = pos_y - 1;
        }

        adapt(pos_x, pos_y) {
            this.setInitBorders(pos_x, pos_y);
            if (pos_x === 0 && pos_y === 0) {
                left_border = 0;
                bot_border = 0;
                //alert("1");
            } else if (pos_x === 0 && pos_y === __WEBPACK_IMPORTED_MODULE_0__size_js__["a" /* WORLD_HEIGHT */] - 1) {
                top_border = __WEBPACK_IMPORTED_MODULE_0__size_js__["a" /* WORLD_HEIGHT */] - 1;
                left_border = 0;
                //alert("2");
            } else if (pos_x === __WEBPACK_IMPORTED_MODULE_0__size_js__["b" /* WORLD_WIDTH */] - 1 && pos_y === 0) {
                right_border = __WEBPACK_IMPORTED_MODULE_0__size_js__["b" /* WORLD_WIDTH */] - 1;
                bot_border = 0;
                //alert("3");
            } else if (pos_x === __WEBPACK_IMPORTED_MODULE_0__size_js__["a" /* WORLD_HEIGHT */] - 1 && pos_y === __WEBPACK_IMPORTED_MODULE_0__size_js__["b" /* WORLD_WIDTH */] - 1) {
                right_border = __WEBPACK_IMPORTED_MODULE_0__size_js__["b" /* WORLD_WIDTH */] - 1;
                top_border = __WEBPACK_IMPORTED_MODULE_0__size_js__["a" /* WORLD_HEIGHT */] - 1;
                //alert("4");
            } else if (pos_x === 0) {
                left_border = 0;
                //alert("5");
            } else if (pos_x === __WEBPACK_IMPORTED_MODULE_0__size_js__["b" /* WORLD_WIDTH */] - 1) {
                right_border = __WEBPACK_IMPORTED_MODULE_0__size_js__["b" /* WORLD_WIDTH */] - 1;
                //alert("6");
            } else if (pos_y === 0) {
                bot_border = 0;
                //alert("7");
            } else if (pos_y === __WEBPACK_IMPORTED_MODULE_0__size_js__["a" /* WORLD_HEIGHT */] - 1) {
                top_border = __WEBPACK_IMPORTED_MODULE_0__size_js__["a" /* WORLD_HEIGHT */] - 1;
                //alert("8");
            }
        }

        getBorders() {
            return { left_border, right_border, top_border, bot_border };
        }
    }

    return new BordersAdapter();
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Randomizer; });
var Randomizer = function () {
    var storage = new Array();
    class Randomizer {
        generate(min, max, lenhth) {
            storage = [];
            while (lenhth > 0) {
                var number = Math.floor(Math.random() * (max - min + 1)) + min;

                if (storage.indexOf(number) === -1) {
                    storage.push(number);
                    lenhth--;
                }
            }

            return storage;
        }
    }

    return new Randomizer();
};

/***/ })
/******/ ]);