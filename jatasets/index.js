'use strict';

var dictionary = require('./dictionary');
var queue = require('./queue');
var list = require('./list');
var set = require('./set');
var stack = require('./stack');

exports.dictionary = function() {
	return dictionary.create();
};

exports.queue = function() {
	return queue.create();
};

exports.list = function() {
	return list.create();
};

exports.set = function() {
	return set.create();
};

exports.stack = function() {
	return stack.create();
}; 
