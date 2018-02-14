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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTdhZWUzOWExMmJmZTY3YTkyYWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9TdGFjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVldWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEYTs7Ozs7QUFFYixpQ0FBd0I7QUFDeEIscUNBQWdDO0FBQXZCLDZCQUFLO0FBQ2Qsb0NBQThCO0FBQXJCLDBCQUFJOzs7Ozs7OztBQ0pBOztBQUViO0lBS0k7UUFIUSxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUE2QixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBR3BELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQVk7UUFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sR0FBRztRQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxJQUFJO1FBQ1AsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLElBQUk7UUFDUCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN4QixDQUFDO0NBRUo7QUF2REQsd0JBdURDOzs7Ozs7OztBQ3pEWTs7QUFFYjtJQUtJO1FBSFEsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLFVBQUssR0FBMkIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdsRCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLEdBQUcsQ0FBQyxPQUFVO1FBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLE1BQU07UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sSUFBSTtRQUNQLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLEtBQUs7UUFDUixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUM7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN4QixDQUFDO0NBRUo7QUFqRUQsc0JBaUVDOzs7Ozs7OztBQ25FWTs7QUFFYjtJQUlJO1FBRlEsU0FBSSxHQUFRLEVBQUUsQ0FBQztJQUl2QixDQUFDO0lBRU0sR0FBRyxDQUFDLEtBQWE7UUFFcEIsc0JBQXNCO1FBQ3RCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFNUIsYUFBYTtRQUNiLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUVwQiwrQkFBK0I7UUFDL0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkIsMERBQTBEO1FBQzFELE9BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sRUFBQyxDQUFDO1lBQ25DLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbkMsdUVBQXVFO1lBQ3ZFLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWxDLGFBQWE7WUFDYixPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVELGdGQUFnRjtRQUNoRixPQUFPLE9BQU8sRUFBRSxDQUFDO1lBQ2IsNkJBQTZCO1lBQzdCLHFEQUFxRDtZQUNyRCxzRUFBc0U7WUFDdEUsUUFBUSxHQUFHO2dCQUNQLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQzthQUNyQixDQUFDO1lBRUYsOEJBQThCO1lBQzlCLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUM7WUFFaEMsK0JBQStCO1lBQy9CLFdBQVcsR0FBRyxRQUFRLENBQUM7WUFFdkIsNkJBQTZCO1lBQzdCLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxLQUFhO1FBQ3ZCLHFCQUFxQjtRQUNyQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9CLHVCQUF1QjtRQUN2QixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2Qiw2REFBNkQ7UUFDN0QsT0FBTSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxFQUFDLENBQUM7WUFDbkMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVELHVDQUF1QztRQUN2QyxxQkFBcUI7UUFDckIsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUM7Z0JBQ0gsU0FBUyxFQUFFLEVBQUU7YUFDaEIsQ0FBQztRQUNOLENBQUM7UUFFRCx3QkFBd0I7UUFDeEIsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUEvRUQsb0JBK0VDIiwiZmlsZSI6ImphdGFzZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTdhZWUzOWExMmJmZTY3YTkyYWEiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL1N0YWNrJztcclxuZXhwb3J0IHsgUXVldWUgfSBmcm9tICcuL1F1ZXVlJztcclxuZXhwb3J0IHsgVHJpZSB9IGZyb20gJy4vVHJpZSc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWNrIHtcclxuXHJcbiAgICBwcml2YXRlIHNLZXk6IGFueSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBpdGVtczogV2Vha01hcDxhbnksIEFycmF5PGFueT4+ID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwdXNoKGVsZW1lbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBzdGFjayA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMuc0tleSk7XHJcblxyXG4gICAgICAgIGlmICghc3RhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhY2sucHVzaChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvcCgpOiBhbnkgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGxldCBzdGFjayA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMuc0tleSk7XHJcblxyXG4gICAgICAgIGlmICghc3RhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YWNrLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwZWVrKCk6IGFueSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5pdGVtcy5nZXQodGhpcy5zS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMuc2V0KHRoaXMuc0tleSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHN0YWNrID0gdGhpcy5pdGVtcy5nZXQodGhpcy5zS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdGFjay5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdGFjay50cyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWV1ZTxUPiB7XHJcblxyXG4gICAgcHJpdmF0ZSBxS2V5OiBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgaXRlbXM6IFdlYWtNYXA8YW55LCBBcnJheTxUPj4gPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGVsZW1lbnQ6IFQpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcXVldWUgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnFLZXkpO1xyXG5cclxuICAgICAgICBpZiAoIXF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHF1ZXVlLnB1c2goZWxlbWVudCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgbGV0IHF1ZXVlID0gdGhpcy5pdGVtcy5nZXQodGhpcy5xS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFxdWV1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcXVldWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcXVldWUuc2hpZnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVlaygpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBsZXQgcXVldWUgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnFLZXkpO1xyXG5cclxuICAgICAgICBpZiAoIXF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBxdWV1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBxdWV1ZVtxdWV1ZS5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnJvbnQoKTogIFQgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGxldCBxdWV1ZSA9IHRoaXMuaXRlbXMuZ2V0KHRoaXMucUtleSk7XHJcblxyXG4gICAgICAgIGlmICghcXVldWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXVlWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXRlbXMuc2V0KHRoaXMucUtleSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcXVldWUgPSB0aGlzLml0ZW1zLmdldCh0aGlzLnFLZXkpO1xyXG5cclxuICAgICAgICBpZiAoIXF1ZXVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXVlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUXVldWUudHMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJpZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB0cmVlOiBhbnkgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChpbnB1dDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHNldCB0byByb290IG9mIHRyZWVcclxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnRyZWU7XHJcblxyXG4gICAgICAgIC8vIGluaXQgdmFsdWVcclxuICAgICAgICBsZXQgbmV4dE5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyB0YWtlIDFzdCBjaGFyIGFuZCB0cmltIGlucHV0XHJcbiAgICAgICAgbGV0IGN1ckNoYXIgPSBpbnB1dC5zbGljZSgwLCAxKTtcclxuICAgICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xyXG5cclxuICAgICAgICAvLyBmaW5kIGZpcnN0IG5ldyBjaGFyYWN0ZXIsIHVudGlsIHRoZW4ga2VlcCB0cmltaW5nIGlucHV0XHJcbiAgICAgICAgd2hpbGUoY3VycmVudE5vZGVbY3VyQ2hhcl0gJiYgY3VyQ2hhcil7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGVbY3VyQ2hhcl07XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgcmVtYWluZGVyIGFycmF5LCB0aGlzIHdpbGwgZXhpc3QgYXMgd2UgYWRkZWQgdGhlIG5vZGUgZWFybGllclxyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5yZW1haW5kZXIucHVzaChpbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0cmltIGlucHV0XHJcbiAgICAgICAgICAgIGN1ckNoYXIgPSBpbnB1dC5zbGljZSgwLDEpO1xyXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gd2hpbGUgbmV4dCBjaGFyYWN0ZXIgaXMgYXZhaWxhYmxlIGtlZXAgYWRkaW5nIG5ldyBicmFuY2hlcyBhbmQgcHJ1bmUgdGlsbCBlbmRcclxuICAgICAgICB3aGlsZSAoY3VyQ2hhcikge1xyXG4gICAgICAgICAgICAvLyBuZXcgcmVmZXJlbmNlIGluIGVhY2ggbG9vcFxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgcmVtYWluZGVyIGFycmF5IHN0YXJ0aW5nIHdpdGggY3VycmVudCBpbnB1dFxyXG4gICAgICAgICAgICAvLyBzbyB3aGVuIGFkZGluZyB0aGUgbm9kZSBgYWAgd2UgYWRkIHRvIHRoZSByZW1haW5kZXIgYGRhbWAgYW5kIHNvIG9uXHJcbiAgICAgICAgICAgIG5leHROb2RlID0ge1xyXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyOiBbaW5wdXRdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBhc3NpZ24gdG8gY3VycmVudCB0cmVlIG5vZGVcclxuICAgICAgICAgICAgY3VycmVudE5vZGVbY3VyQ2hhcl0gPSBuZXh0Tm9kZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGhvbGQgcmVmZXJlbmNlIGZvciBuZXh0IGxvb3BcclxuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBuZXh0Tm9kZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHByZXBhcmUgZm9yIG5leHQgaXRlcmF0aW9uXHJcbiAgICAgICAgICAgIGN1ckNoYXIgPSBpbnB1dC5zbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZSgxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlYXJjaChpbnB1dDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSB3aG9sZSB0cmVlXHJcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy50cmVlO1xyXG4gICAgICAgIGxldCBjdXJDaGFyID0gaW5wdXQuc2xpY2UoMCwxKTtcclxuXHJcbiAgICAgICAgLy8gdGFrZSBmaXJzdCBjaGFyYWN0ZXJcclxuICAgICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xyXG5cclxuICAgICAgICAvLyBrZWVwIGV4dHJhY3RpbmcgdGhlIHN1YnRyZWUgYmFzZWQgb24gdGhlIGN1cnJlbnQgY2hhcmFjdGVyXHJcbiAgICAgICAgd2hpbGUoY3VycmVudE5vZGVbY3VyQ2hhcl0gJiYgY3VyQ2hhcil7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGVbY3VyQ2hhcl07XHJcbiAgICAgICAgICAgIGN1ckNoYXIgPSBpbnB1dC5zbGljZSgwLDEpO1xyXG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVhY2hlZCB0aGUgZW5kIGFuZCBubyBzdWJ0cmVlIGZvdW5kXHJcbiAgICAgICAgLy8gaS5lLiBubyBkYXRhIGZvdW5kXHJcbiAgICAgICAgaWYgKGN1ckNoYXIgJiYgIWN1cnJlbnROb2RlW2N1ckNoYXJdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXI6IFtdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXR1cm4gdGhlIG5vZGUgZm91bmRcclxuICAgICAgICByZXR1cm4gY3VycmVudE5vZGU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1RyaWUudHMiXSwic291cmNlUm9vdCI6IiJ9