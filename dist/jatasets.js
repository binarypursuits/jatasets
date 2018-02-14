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
var Queue_1 = __webpack_require__(2);
exports.Queue = Queue_1.Queue;
var Trie_1 = __webpack_require__(3);
exports.Trie = Trie_1.Trie;


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
function getStack() {
    return new Stack();
}
exports.getStack = getStack;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWZlZThkMjVmMTI1MWIxMDY5ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9TdGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVldWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEYTs7Ozs7QUFFYixpQ0FBd0I7QUFDeEIscUNBQWdDO0FBQXZCLDZCQUFLO0FBQ2Qsb0NBQThCO0FBQXJCLDBCQUFJOzs7Ozs7OztBQ0pBOztBQUViO0lBS0k7UUFIUSxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUE2QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR3BELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQVk7UUFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIs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QUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7UUFFRCx1Q0FBdUM7UUFDdkMscUJBQXFCO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDO2dCQUNILFNBQVMsRUFBRSxFQUFFO2FBQ2hCLENBQUM7UUFDTixDQUFDO1FBRUQsd0JBQXdCO1FBQ3hCLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDdkIsQ0FBQztDQUNKO0FBL0VELG9CQStFQyIsImZpbGUiOiJqYXRhc2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFmZWU4ZDI1ZjEyNTFiMTA2OWQzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9TdGFjayc7XHJcbmV4cG9ydCB7IFF1ZXVlIH0gZnJvbSAnLi9RdWV1ZSc7XHJcbmV4cG9ydCB7IFRyaWUgfSBmcm9tICcuL1RyaWUnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBTdGFjayB7XHJcblxyXG4gICAgcHJpdmF0ZSBzS2V5OiBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgaXRlbXM6IFdlYWtNYXA8YW55LCBBcnJheTxhbnk+PiA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHVzaChlbGVtZW50OiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnNLZXkpO1xyXG5cclxuICAgICAgICBpZiAoIXN0YWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YWNrLnB1c2goZWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3AoKTogYW55IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnNLZXkpO1xyXG5cclxuICAgICAgICBpZiAoIXN0YWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGFjaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdGFjay5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVlaygpOiBhbnkgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGxldCBzdGFjayA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMuc0tleSk7XHJcblxyXG4gICAgICAgIGlmICghc3RhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zLnNldCh0aGlzLnNLZXksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBzdGFjayA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMuc0tleSk7XHJcblxyXG4gICAgICAgIGlmICghc3RhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhY2subGVuZ3RoO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YWNrKCkge1xyXG4gICAgcmV0dXJuIG5ldyBTdGFjaygpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0YWNrLnRzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXVlPFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIHFLZXk6IGFueSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBpdGVtczogV2Vha01hcDxhbnksIEFycmF5PFQ+PiA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQoZWxlbWVudDogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMucUtleSk7XHJcblxyXG4gICAgICAgIGlmICghcXVldWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcXVldWUucHVzaChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZSgpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBsZXQgcXVldWUgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnFLZXkpO1xyXG5cclxuICAgICAgICBpZiAoIXF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBxdWV1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwZWVrKCk6IFQgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMucUtleSk7XHJcblxyXG4gICAgICAgIGlmICghcXVldWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXVlW3F1ZXVlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmcm9udCgpOiAgVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5pdGVtcy5nZXQodGhpcy5xS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFxdWV1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcXVldWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcXVldWVbMF07XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zZXQodGhpcy5xS2V5LCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMucUtleSk7XHJcblxyXG4gICAgICAgIGlmICghcXVldWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcXVldWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9RdWV1ZS50cyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmllIHtcclxuXHJcbiAgICBwcml2YXRlIHRyZWU6IGFueSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGlucHV0OiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRvIHJvb3Qgb2YgdHJlZVxyXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMudHJlZTtcclxuXHJcbiAgICAgICAgLy8gaW5pdCB2YWx1ZVxyXG4gICAgICAgIGxldCBuZXh0Tm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHRha2UgMXN0IGNoYXIgYW5kIHRyaW0gaW5wdXRcclxuICAgICAgICBsZXQgY3VyQ2hhciA9IGlucHV0LnNsaWNlKDAsIDEpO1xyXG4gICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgZmlyc3QgbmV3IGNoYXJhY3RlciwgdW50aWwgdGhlbiBrZWVwIHRyaW1pbmcgaW5wdXRcclxuICAgICAgICB3aGlsZShjdXJyZW50Tm9kZVtjdXJDaGFyXSAmJiBjdXJDaGFyKXtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZVtjdXJDaGFyXTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSByZW1haW5kZXIgYXJyYXksIHRoaXMgd2lsbCBleGlzdCBhcyB3ZSBhZGRlZCB0aGUgbm9kZSBlYXJsaWVyXHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnJlbWFpbmRlci5wdXNoKGlucHV0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRyaW0gaW5wdXRcclxuICAgICAgICAgICAgY3VyQ2hhciA9IGlucHV0LnNsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3aGlsZSBuZXh0IGNoYXJhY3RlciBpcyBhdmFpbGFibGUga2VlcCBhZGRpbmcgbmV3IGJyYW5jaGVzIGFuZCBwcnVuZSB0aWxsIGVuZFxyXG4gICAgICAgIHdoaWxlIChjdXJDaGFyKSB7XHJcbiAgICAgICAgICAgIC8vIG5ldyByZWZlcmVuY2UgaW4gZWFjaCBsb29wXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSByZW1haW5kZXIgYXJyYXkgc3RhcnRpbmcgd2l0aCBjdXJyZW50IGlucHV0XHJcbiAgICAgICAgICAgIC8vIHNvIHdoZW4gYWRkaW5nIHRoZSBub2RlIGBhYCB3ZSBhZGQgdG8gdGhlIHJlbWFpbmRlciBgZGFtYCBhbmQgc28gb25cclxuICAgICAgICAgICAgbmV4dE5vZGUgPSB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXI6IFtpbnB1dF1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiB0byBjdXJyZW50IHRyZWUgbm9kZVxyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZVtjdXJDaGFyXSA9IG5leHROb2RlO1xyXG5cclxuICAgICAgICAgICAgLy8gaG9sZCByZWZlcmVuY2UgZm9yIG5leHQgbG9vcFxyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IG5leHROb2RlO1xyXG5cclxuICAgICAgICAgICAgLy8gcHJlcGFyZSBmb3IgbmV4dCBpdGVyYXRpb25cclxuICAgICAgICAgICAgY3VyQ2hhciA9IGlucHV0LnNsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBnZXQgdGhlIHdob2xlIHRyZWVcclxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnRyZWU7XHJcbiAgICAgICAgbGV0IGN1ckNoYXIgPSBpbnB1dC5zbGljZSgwLDEpO1xyXG5cclxuICAgICAgICAvLyB0YWtlIGZpcnN0IGNoYXJhY3RlclxyXG4gICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgZXh0cmFjdGluZyB0aGUgc3VidHJlZSBiYXNlZCBvbiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcclxuICAgICAgICB3aGlsZShjdXJyZW50Tm9kZVtjdXJDaGFyXSAmJiBjdXJDaGFyKXtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZVtjdXJDaGFyXTtcclxuICAgICAgICAgICAgY3VyQ2hhciA9IGlucHV0LnNsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZWFjaGVkIHRoZSBlbmQgYW5kIG5vIHN1YnRyZWUgZm91bmRcclxuICAgICAgICAvLyBpLmUuIG5vIGRhdGEgZm91bmRcclxuICAgICAgICBpZiAoY3VyQ2hhciAmJiAhY3VycmVudE5vZGVbY3VyQ2hhcl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlcjogW11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgbm9kZSBmb3VuZFxyXG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVHJpZS50cyJdLCJzb3VyY2VSb290IjoiIn0=