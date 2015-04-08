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
 */
exports.dictionary = function() {
	return dictionary.create();
};

/** Create new Queue dataset object and return. */
exports.queue = function() {
	return queue.create();
};

/** Create new List dataset object and return. */
exports.list = function() {
	return list.create();
};

/** Create new Set dataset object and return. */
exports.set = function() {
	return set.create();
};

/** Create new Stack dataset object and return. */
exports.stack = function() {
	return stack.create();
}; 
