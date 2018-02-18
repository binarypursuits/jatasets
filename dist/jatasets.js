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
var Stack = /** @class */ (function () {
    function Stack() {
        this.sKey = {};
        this.items = new WeakMap();
        this.clear();
    }
    Stack.prototype.push = function (element) {
        var stack = this.items.get(this.sKey);
        if (!stack || !element) {
            return false;
        }
        stack.push(element);
        return true;
    };
    Stack.prototype.pop = function () {
        var stack = this.items.get(this.sKey);
        if (!stack) {
            return stack;
        }
        return stack.pop();
    };
    Stack.prototype.peek = function () {
        if (this.size() === 0) {
            return false;
        }
        var stack = this.items.get(this.sKey);
        if (!stack) {
            return false;
        }
        return stack[stack.length - 1];
    };
    Stack.prototype.clear = function () {
        this.items.set(this.sKey, []);
        return true;
    };
    Stack.prototype.size = function () {
        var stack = this.items.get(this.sKey);
        if (!stack) {
            return 0;
        }
        return stack.length;
    };
    return Stack;
}());
exports.Stack = Stack;
exports.hello = function () {
    return 'Hello World';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.qKey = {};
        this.items = new WeakMap();
        this.clear();
    }
    Queue.prototype.add = function (element) {
        if (!element) {
            return false;
        }
        var queue = this.items.get(this.qKey);
        if (!queue) {
            return false;
        }
        queue.push(element);
        return true;
    };
    Queue.prototype.remove = function () {
        var queue = this.items.get(this.qKey);
        if (!queue || this.size() === 0) {
            return false;
        }
        return queue.shift();
    };
    Queue.prototype.peek = function () {
        var queue = this.items.get(this.qKey);
        if (!queue) {
            return queue;
        }
        return queue[queue.length - 1];
    };
    Queue.prototype.front = function () {
        var queue = this.items.get(this.qKey);
        if (!queue || this.size() === 0) {
            return false;
        }
        return queue[0];
    };
    Queue.prototype.back = function () {
        var queue = this.items.get(this.qKey);
        if (!queue) {
            return queue;
        }
        return queue[queue.length - 1];
    };
    Queue.prototype.clear = function () {
        this.items.set(this.qKey, []);
    };
    Queue.prototype.size = function () {
        var queue = this.items.get(this.qKey);
        if (!queue) {
            return 0;
        }
        return queue.length;
    };
    return Queue;
}());
exports.Queue = Queue;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Trie = /** @class */ (function () {
    function Trie() {
        this.tree = {};
    }
    Trie.prototype.add = function (input) {
        // set to root of tree
        var currentNode = this.tree;
        var nextNode = null;
        // take 1st char and trim input
        var currentChar = input.slice(0, 1);
        input = input.slice(1);
        // find first new character, until then keep triming input
        while (currentNode[currentChar] && currentChar) {
            currentNode = currentNode[currentChar];
            // update remainder array, this will exist as we added the node earlier
            currentNode.remainder.push(input);
            currentChar = input.slice(0, 1);
            input = input.slice(1);
        }
        // while next character is available keep adding new branches and prune till end
        while (currentChar) {
            // new reference in each loop
            // create remainder array starting with current input
            // so when adding the node `a` we add to the remainder `dam` and so on
            nextNode = {
                remainder: [input]
            };
            // assign to current tree node
            currentNode[currentChar] = nextNode;
            // hold reference for next loop
            currentNode = nextNode;
            // prepare for next iteration
            currentChar = input.slice(0, 1);
            input = input.slice(1);
        }
    };
    Trie.prototype.search = function (input) {
        // get the whole tree
        var currentNode = this.tree;
        var curChar = input.slice(0, 1);
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
    };
    return Trie;
}());
exports.Trie = Trie;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDdhZDE5NzliYTQxYjQ5Yzg0ZjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9TdGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVldWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEYTs7Ozs7QUFFYixpQ0FBd0I7QUFDeEIsaUNBQXdCO0FBQ3hCLGlDQUF1Qjs7Ozs7Ozs7QUNKVjs7QUFFYjtJQUtJO1FBSFEsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLFVBQUssR0FBNkIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdwRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLG9CQUFJLEdBQVgsVUFBWSxPQUFZO1FBQ3BCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixD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O0lBQ3ZCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQTNFWSxvQkFBSSIsImZpbGUiOiJqYXRhc2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA3YWQxOTc5YmE0MWI0OWM4NGY3IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgKiBmcm9tICcuL1N0YWNrJztcbmV4cG9ydCAqIGZyb20gJy4vUXVldWUnO1xuZXhwb3J0ICogZnJvbSAnLi9UcmllJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNsYXNzIFN0YWNrIHtcblxuICAgIHByaXZhdGUgc0tleTogYW55ID0ge307XG4gICAgcHJpdmF0ZSBpdGVtczogV2Vha01hcDxhbnksIEFycmF5PGFueT4+ID0gbmV3IFdlYWtNYXAoKTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXNoKGVsZW1lbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnNLZXkpO1xuXG4gICAgICAgIGlmICghc3RhY2sgfHwgIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YWNrLnB1c2goZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIHBvcCgpOiBhbnkgfCB1bmRlZmluZWQge1xuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnNLZXkpO1xuXG4gICAgICAgIGlmICghc3RhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFjay5wb3AoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVlaygpOiBhbnkgfCBmYWxzZSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc2l6ZSgpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnNLZXkpO1xuXG4gICAgICAgIGlmICghc3RhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuaXRlbXMuc2V0KHRoaXMuc0tleSwgW10pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2l6ZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgc3RhY2sgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnNLZXkpO1xuXG4gICAgICAgIGlmICghc3RhY2spIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGhlbGxvID0gKCkgPT4ge1xuICAgIHJldHVybiAnSGVsbG8gV29ybGQnO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RhY2sudHMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVldWUge1xyXG5cclxuICAgIHByaXZhdGUgcUtleTogYW55ID0ge307XHJcbiAgICBwcml2YXRlIGl0ZW1zOiBXZWFrTWFwPGFueSwgQXJyYXk8YW55Pj4gPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGVsZW1lbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMucUtleSk7XHJcblxyXG4gICAgICAgIGlmICghcXVldWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcXVldWUucHVzaChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZSgpOiBhbnkge1xyXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMucUtleSk7XHJcblxyXG4gICAgICAgIGlmICghcXVldWUgfHwgdGhpcy5zaXplKCkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXVlLnNoaWZ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBlZWsoKTogYW55IHtcclxuICAgICAgICBsZXQgcXVldWUgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnFLZXkpO1xyXG5cclxuICAgICAgICBpZiAoIXF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBxdWV1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBxdWV1ZVtxdWV1ZS5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnJvbnQoKTogIGFueSB7XHJcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5pdGVtcy5nZXQodGhpcy5xS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFxdWV1ZSB8fCB0aGlzLnNpemUoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcXVldWVbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhY2soKTogIGFueSB7XHJcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5pdGVtcy5nZXQodGhpcy5xS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFxdWV1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcXVldWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcXVldWVbcXVldWUubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zZXQodGhpcy5xS2V5LCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMucUtleSk7XHJcblxyXG4gICAgICAgIGlmICghcXVldWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcXVldWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9RdWV1ZS50cyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmllIHtcclxuXHJcbiAgICBwcml2YXRlIHRyZWU6IGFueSA9IHt9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGlucHV0OiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRvIHJvb3Qgb2YgdHJlZVxyXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMudHJlZTtcclxuICAgICAgICBsZXQgbmV4dE5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyB0YWtlIDFzdCBjaGFyIGFuZCB0cmltIGlucHV0XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDaGFyID0gaW5wdXQuc2xpY2UoMCwgMSk7XHJcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgLy8gZmluZCBmaXJzdCBuZXcgY2hhcmFjdGVyLCB1bnRpbCB0aGVuIGtlZXAgdHJpbWluZyBpbnB1dFxyXG4gICAgICAgIHdoaWxlKGN1cnJlbnROb2RlW2N1cnJlbnRDaGFyXSAmJiBjdXJyZW50Q2hhcil7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGVbY3VycmVudENoYXJdO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIHJlbWFpbmRlciBhcnJheSwgdGhpcyB3aWxsIGV4aXN0IGFzIHdlIGFkZGVkIHRoZSBub2RlIGVhcmxpZXJcclxuICAgICAgICAgICAgY3VycmVudE5vZGUucmVtYWluZGVyLnB1c2goaW5wdXQpO1xyXG4gICAgICAgICAgICBjdXJyZW50Q2hhciA9IGlucHV0LnNsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB3aGlsZSBuZXh0IGNoYXJhY3RlciBpcyBhdmFpbGFibGUga2VlcCBhZGRpbmcgbmV3IGJyYW5jaGVzIGFuZCBwcnVuZSB0aWxsIGVuZFxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50Q2hhcikge1xyXG4gICAgICAgICAgICAvLyBuZXcgcmVmZXJlbmNlIGluIGVhY2ggbG9vcFxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgcmVtYWluZGVyIGFycmF5IHN0YXJ0aW5nIHdpdGggY3VycmVudCBpbnB1dFxyXG4gICAgICAgICAgICAvLyBzbyB3aGVuIGFkZGluZyB0aGUgbm9kZSBgYWAgd2UgYWRkIHRvIHRoZSByZW1haW5kZXIgYGRhbWAgYW5kIHNvIG9uXHJcbiAgICAgICAgICAgIG5leHROb2RlID0ge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyOiBbaW5wdXRdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBhc3NpZ24gdG8gY3VycmVudCB0cmVlIG5vZGVcclxuICAgICAgICAgICAgY3VycmVudE5vZGVbY3VycmVudENoYXJdID0gbmV4dE5vZGU7XHJcblxyXG4gICAgICAgICAgICAvLyBob2xkIHJlZmVyZW5jZSBmb3IgbmV4dCBsb29wXHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gbmV4dE5vZGU7XHJcblxyXG4gICAgICAgICAgICAvLyBwcmVwYXJlIGZvciBuZXh0IGl0ZXJhdGlvblxyXG4gICAgICAgICAgICBjdXJyZW50Q2hhciA9IGlucHV0LnNsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBnZXQgdGhlIHdob2xlIHRyZWVcclxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnRyZWU7XHJcbiAgICAgICAgbGV0IGN1ckNoYXIgPSBpbnB1dC5zbGljZSgwLDEpO1xyXG5cclxuICAgICAgICAvLyB0YWtlIGZpcnN0IGNoYXJhY3RlclxyXG4gICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XHJcblxyXG4gICAgICAgIC8vIGtlZXAgZXh0cmFjdGluZyB0aGUgc3VidHJlZSBiYXNlZCBvbiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcclxuICAgICAgICB3aGlsZShjdXJyZW50Tm9kZVtjdXJDaGFyXSAmJiBjdXJDaGFyKXtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZVtjdXJDaGFyXTtcclxuICAgICAgICAgICAgY3VyQ2hhciA9IGlucHV0LnNsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZWFjaGVkIHRoZSBlbmQgYW5kIG5vIHN1YnRyZWUgZm91bmRcclxuICAgICAgICAvLyBpLmUuIG5vIGRhdGEgZm91bmRcclxuICAgICAgICBpZiAoY3VyQ2hhciAmJiAhY3VycmVudE5vZGVbY3VyQ2hhcl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlcjogW11cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgbm9kZSBmb3VuZFxyXG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVHJpZS50cyJdLCJzb3VyY2VSb290IjoiIn0=