/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/funcionalidades.js":
/*!****************************************!*\
  !*** ./src/modules/funcionalidades.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navegation": () => (/* binding */ navegation),
/* harmony export */   "mobileNavegation": () => (/* binding */ mobileNavegation),
/* harmony export */   "mobielToggle": () => (/* binding */ mobielToggle)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Função navegação das paginas desk
 * 
 */
function navegation() {
  var home = document.querySelector('#home');
  var cardapio = document.querySelector('#cardapio');
  var historia = document.querySelector('#historia');
  var btnHome = document.querySelector('#btn-home');
  var btnCardapio = document.querySelector('#btn-cardapio');
  var btnHistoria = document.querySelector('#btn-historia');
  var pages = [home, cardapio, historia];
  btnHome.addEventListener('click', function () {
    var _iterator = _createForOfIteratorHelper(pages),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var el = _step.value;

        if (el.classList.contains('hidden') === false) {
          el.classList.toggle('hidden');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    ;
    home.classList.toggle('hidden');
  });
  btnCardapio.addEventListener('click', function () {
    var _iterator2 = _createForOfIteratorHelper(pages),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var el = _step2.value;

        if (el.classList.contains('hidden') === false) {
          el.classList.toggle('hidden');
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    ;
    cardapio.classList.toggle('hidden');
  });
  btnHistoria.addEventListener('click', function () {
    var _iterator3 = _createForOfIteratorHelper(pages),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var el = _step3.value;

        if (el.classList.contains('hidden') === false) {
          el.classList.toggle('hidden');
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    ;
    historia.classList.toggle('hidden');
  });
}
function mobileNavegation() {
  var home = document.querySelector('#home');
  var cardapio = document.querySelector('#cardapio');
  var historia = document.querySelector('#historia');
  var btnHome = document.querySelector('#btn-mobhome');
  var btnCardapio = document.querySelector('#btn-mobcardapio');
  var btnHistoria = document.querySelector('#btn-mobhistoria');
  var pages = [home, cardapio, historia];
  btnHome.addEventListener('click', function () {
    var _iterator4 = _createForOfIteratorHelper(pages),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var el = _step4.value;

        if (el.classList.contains('hidden') === false) {
          el.classList.toggle('hidden');
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    ;
    home.classList.toggle('hidden');
  });
  btnCardapio.addEventListener('click', function () {
    var _iterator5 = _createForOfIteratorHelper(pages),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var el = _step5.value;

        if (el.classList.contains('hidden') === false) {
          el.classList.toggle('hidden');
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    ;
    cardapio.classList.toggle('hidden');
  });
  btnHistoria.addEventListener('click', function () {
    var _iterator6 = _createForOfIteratorHelper(pages),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var el = _step6.value;

        if (el.classList.contains('hidden') === false) {
          el.classList.toggle('hidden');
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }

    ;
    historia.classList.toggle('hidden');
  });
}
/**
 * toggle menu
 */

function mobielToggle() {
  var btnMobile = document.querySelector('#btn-toggle');
  var menuMobile = document.querySelector('#menu-mobile');
  btnMobile.addEventListener('click', function () {
    menuMobile.classList.toggle('hidden');
  });
}

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_funcionalidades__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/funcionalidades */ "./src/modules/funcionalidades.js");

(0,_modules_funcionalidades__WEBPACK_IMPORTED_MODULE_0__.navegation)();
(0,_modules_funcionalidades__WEBPACK_IMPORTED_MODULE_0__.mobielToggle)();
(0,_modules_funcionalidades__WEBPACK_IMPORTED_MODULE_0__.mobileNavegation)();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map