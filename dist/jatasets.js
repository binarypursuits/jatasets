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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
__export(__webpack_require__(2));
__export(__webpack_require__(3));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.sKey = {};
        this.items = new WeakMap();
        this.clear();
    }
    push(element) {
        let stack = this.items.get(this.sKey);
        if (!stack) {
            return false;
        }
        stack.push(element);
        return true;
    }
    pop() {
        let stack = this.items.get(this.sKey);
        if (!stack) {
            return stack;
        }
        return stack.pop();
    }
    peek() {
        let stack = this.items.get(this.sKey);
        if (!stack) {
            return stack;
        }
        return stack[stack.length - 1];
    }
    clear() {
        this.items.set(this.sKey, []);
    }
    size() {
        let stack = this.items.get(this.sKey);
        if (!stack) {
            return 0;
        }
        return stack.length;
    }
}
exports.Stack = Stack;
exports.default = Stack;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.qKey = {};
        this.items = new WeakMap();
        this.clear();
    }
    add(element) {
        let queue = this.items.get(this.qKey);
        if (!queue) {
            return false;
        }
        queue.push(element);
        return true;
    }
    remove() {
        let queue = this.items.get(this.qKey);
        if (!queue) {
            return queue;
        }
        return queue.shift();
    }
    peek() {
        let queue = this.items.get(this.qKey);
        if (!queue) {
            return queue;
        }
        return queue[queue.length - 1];
    }
    front() {
        let queue = this.items.get(this.qKey);
        if (!queue) {
            return queue;
        }
        return queue[0];
    }
    clear() {
        this.items.set(this.qKey, []);
    }
    size() {
        let queue = this.items.get(this.qKey);
        if (!queue) {
            return 0;
        }
        return queue.length;
    }
}
exports.Queue = Queue;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Trie {
    constructor() {
        this.tree = {};
    }
    add(input) {
        // set to root of tree
        let currentNode = this.tree;
        // init value
        let nextNode = null;
        // take 1st char and trim input
        let curChar = input.slice(0, 1);
        input = input.slice(1);
        // find first new character, until then keep triming input
        while (currentNode[curChar] && curChar) {
            currentNode = currentNode[curChar];
            // update remainder array, this will exist as we added the node earlier
            currentNode.remainder.push(input);
            // trim input
            curChar = input.slice(0, 1);
            input = input.slice(1);
        }
        // while next character is available keep adding new branches and prune till end
        while (curChar) {
            // new reference in each loop
            // create remainder array starting with current input
            // so when adding the node `a` we add to the remainder `dam` and so on
            nextNode = {
                remainder: [input]
            };
            // assign to current tree node
            currentNode[curChar] = nextNode;
            // hold reference for next loop
            currentNode = nextNode;
            // prepare for next iteration
            curChar = input.slice(0, 1);
            input = input.slice(1);
        }
    }
    search(input) {
        // get the whole tree
        let currentNode = this.tree;
        let curChar = input.slice(0, 1);
        // take first character
        input = input.slice(1);
        // keep extracting the subtree based on the current character
        while (currentNode[curChar] && curChar) {
            currentNode = currentNode[curChar];
            curChar = input.slice(0, 1);
            input = input.slice(1);
        }
        // reached the end and no subtree found
        // i.e. no data found
        if (curChar && !currentNode[curChar]) {
            return {
                remainder: []
            };
        }
        // return the node found
        return currentNode;
    }
}
exports.Trie = Trie;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzkxMWFiN2JiNzg0MDJkZjhhY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9TdGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVldWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEYTs7Ozs7QUFFYixpQ0FBd0I7QUFDeEIsaUNBQXdCO0FBQ3hCLGlDQUF1Qjs7Ozs7Ozs7QUNKVjs7QUFFYjtJQUtJO1FBSFEsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLFVBQUssR0FBNkIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdwRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFZO1FBQ3BCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxLQUFLLENBQUMsSUFB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QUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFFRCx1Q0FBdUM7UUFDdkMscUJBQXFCO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDO2dCQUNILFNBQVMsRUFBRSxFQUFFO2FBQ2hCLENBQUM7UUFDTixDQUFDO1FBRUQsd0JBQXdCO1FBQ3hCLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDdkIsQ0FBQztDQUNKO0FBL0VELG9CQStFQyIsImZpbGUiOiJqYXRhc2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc5MTFhYjdiYjc4NDAyZGY4YWNjIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9TdGFjayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUXVldWUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1RyaWUnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhY2sge1xyXG5cclxuICAgIHByaXZhdGUgc0tleTogYW55ID0ge307XHJcbiAgICBwcml2YXRlIGl0ZW1zOiBXZWFrTWFwPGFueSwgQXJyYXk8YW55Pj4gPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHB1c2goZWxlbWVudDogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5pdGVtcy5nZXQodGhpcy5zS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFjay5wdXNoKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9wKCk6IGFueSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5pdGVtcy5nZXQodGhpcy5zS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhY2sucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBlZWsoKTogYW55IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnNLZXkpO1xyXG5cclxuICAgICAgICBpZiAoIXN0YWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zZXQodGhpcy5zS2V5LCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnNLZXkpO1xyXG5cclxuICAgICAgICBpZiAoIXN0YWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YWNrO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RhY2sudHMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVldWU8VD4ge1xyXG5cclxuICAgIHByaXZhdGUgcUtleTogYW55ID0ge307XHJcbiAgICBwcml2YXRlIGl0ZW1zOiBXZWFrTWFwPGFueSwgQXJyYXk8VD4+ID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChlbGVtZW50OiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5pdGVtcy5nZXQodGhpcy5xS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFxdWV1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxdWV1ZS5wdXNoKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlKCk6IFQgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMucUtleSk7XHJcblxyXG4gICAgICAgIGlmICghcXVldWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXVlLnNoaWZ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBlZWsoKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5pdGVtcy5nZXQodGhpcy5xS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFxdWV1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcXVldWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcXVldWVbcXVldWUubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZyb250KCk6ICBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBsZXQgcXVldWUgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnFLZXkpO1xyXG5cclxuICAgICAgICBpZiAoIXF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBxdWV1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBxdWV1ZVswXTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zLnNldCh0aGlzLnFLZXksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5pdGVtcy5nZXQodGhpcy5xS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFxdWV1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBxdWV1ZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1F1ZXVlLnRzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWUge1xyXG5cclxuICAgIHByaXZhdGUgdHJlZTogYW55ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoaW5wdXQ6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBzZXQgdG8gcm9vdCBvZiB0cmVlXHJcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy50cmVlO1xyXG5cclxuICAgICAgICAvLyBpbml0IHZhbHVlXHJcbiAgICAgICAgbGV0IG5leHROb2RlID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gdGFrZSAxc3QgY2hhciBhbmQgdHJpbSBpbnB1dFxyXG4gICAgICAgIGxldCBjdXJDaGFyID0gaW5wdXQuc2xpY2UoMCwgMSk7XHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgLy8gZmluZCBmaXJzdCBuZXcgY2hhcmFjdGVyLCB1bnRpbCB0aGVuIGtlZXAgdHJpbWluZyBpbnB1dFxyXG4gICAgICAgIHdoaWxlKGN1cnJlbnROb2RlW2N1ckNoYXJdICYmIGN1ckNoYXIpe1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlW2N1ckNoYXJdO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIHJlbWFpbmRlciBhcnJheSwgdGhpcyB3aWxsIGV4aXN0IGFzIHdlIGFkZGVkIHRoZSBub2RlIGVhcmxpZXJcclxuICAgICAgICAgICAgY3VycmVudE5vZGUucmVtYWluZGVyLnB1c2goaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gdHJpbSBpbnB1dFxyXG4gICAgICAgICAgICBjdXJDaGFyID0gaW5wdXQuc2xpY2UoMCwxKTtcclxuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZSgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHdoaWxlIG5leHQgY2hhcmFjdGVyIGlzIGF2YWlsYWJsZSBrZWVwIGFkZGluZyBuZXcgYnJhbmNoZXMgYW5kIHBydW5lIHRpbGwgZW5kXHJcbiAgICAgICAgd2hpbGUgKGN1ckNoYXIpIHtcclxuICAgICAgICAgICAgLy8gbmV3IHJlZmVyZW5jZSBpbiBlYWNoIGxvb3BcclxuICAgICAgICAgICAgLy8gY3JlYXRlIHJlbWFpbmRlciBhcnJheSBzdGFydGluZyB3aXRoIGN1cnJlbnQgaW5wdXRcclxuICAgICAgICAgICAgLy8gc28gd2hlbiBhZGRpbmcgdGhlIG5vZGUgYGFgIHdlIGFkZCB0byB0aGUgcmVtYWluZGVyIGBkYW1gIGFuZCBzbyBvblxyXG4gICAgICAgICAgICBuZXh0Tm9kZSA9IHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlcjogW2lucHV0XVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gYXNzaWduIHRvIGN1cnJlbnQgdHJlZSBub2RlXHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlW2N1ckNoYXJdID0gbmV4dE5vZGU7XHJcblxyXG4gICAgICAgICAgICAvLyBob2xkIHJlZmVyZW5jZSBmb3IgbmV4dCBsb29wXHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gbmV4dE5vZGU7XHJcblxyXG4gICAgICAgICAgICAvLyBwcmVwYXJlIGZvciBuZXh0IGl0ZXJhdGlvblxyXG4gICAgICAgICAgICBjdXJDaGFyID0gaW5wdXQuc2xpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWFyY2goaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGdldCB0aGUgd2hvbGUgdHJlZVxyXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMudHJlZTtcclxuICAgICAgICBsZXQgY3VyQ2hhciA9IGlucHV0LnNsaWNlKDAsMSk7XHJcblxyXG4gICAgICAgIC8vIHRha2UgZmlyc3QgY2hhcmFjdGVyXHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgLy8ga2VlcCBleHRyYWN0aW5nIHRoZSBzdWJ0cmVlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNoYXJhY3RlclxyXG4gICAgICAgIHdoaWxlKGN1cnJlbnROb2RlW2N1ckNoYXJdICYmIGN1ckNoYXIpe1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlW2N1ckNoYXJdO1xyXG4gICAgICAgICAgICBjdXJDaGFyID0gaW5wdXQuc2xpY2UoMCwxKTtcclxuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZSgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlYWNoZWQgdGhlIGVuZCBhbmQgbm8gc3VidHJlZSBmb3VuZFxyXG4gICAgICAgIC8vIGkuZS4gbm8gZGF0YSBmb3VuZFxyXG4gICAgICAgIGlmIChjdXJDaGFyICYmICFjdXJyZW50Tm9kZVtjdXJDaGFyXSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBub2RlIGZvdW5kXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9UcmllLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==