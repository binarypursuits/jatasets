/**
 * JataSets module.
 * @module jatasets
 */

'use strict';

const dictionary = require('./src/dictionary');
const queue = require('./src/queue');
const list = require('./src/list');
const jataset = require('./src/jataset');
const stack = require('./src/stack');
const hash = require('./src/hash');

/**
 * Create new Dictionary dataset object and return.
 *
 * @module jatasets
 * @submodule dictionary
 */
exports.dictionary = function() {
	return dictionary.create();
};

/**
 * Create new Queue dataset object and return.
 *
 * @module jatasets
 * @submodule queue
 */
exports.queue = function() {
	return queue.create();
};

/**
 * Create new List dataset object and return.
 *
 * @module jatasets
 * @submodule list
 */
exports.list = function() {
	return list.create();
};

/**
 * Create new Set dataset object and return.
 *
 * @module jatasets
 * @submodule set
 */
exports.jataset = function() {
	return jataset.create();
};

/**
 * Create new Stack dataset object and return.
 *
 * @module jatasets
 * @submodule stack
 */
exports.stack = function() {
	return stack.create();
};

/**
 * Create new hash object and return.
 *
 * @module jatasets
 * @submodule hash
 */
exports.hash = function() {
	return hash.create();
};
