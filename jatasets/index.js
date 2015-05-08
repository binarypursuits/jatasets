/**
 * JataSets module.
 * @module jatasets
 */

'use strict';

var dictionary = require('./dictionary');
var queue = require('./queue');
var list = require('./list');
var set = require('./set');
var stack = require('./stack');

/**
 * Create new Dictionary dataset object and return.
 *
 * @module jatasets
 * @submodule dictionary
 */
exports.dictionary = function() {
	return dictionary.create();
};

/** Create new Queue dataset object and return.
 *
 * @module jatasets
 * @submodule queue
 */
exports.queue = function() {
	return queue.create();
};

/** Create new List dataset object and return.
 *
 * @module jatasets
 * @submodule list
 */
exports.list = function() {
	return list.create();
};

/** Create new Set dataset object and return.
 *
 * @module jatasets
 * @submodule set
 */
exports.set = function() {
	return set.create();
};

/** Create new Stack dataset object and return.
 *
 * @module jatasets
 * @submodule stack
 */
exports.stack = function() {
	return stack.create();
};
