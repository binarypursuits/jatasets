/**
 * Creates a new Stack Data object
 *
 * @class Stack
 * @main jatasets
 */

/*jshint unused:false */

'use strict';

/**
 *  Creates a new Stack Object
 *  @constructor
 */
var Stack = function() {

	/** @property	{Integer} top last item placed in stack and current first for removal  */
	this.top = 0;

	/** @property	{Array} dataStore an array of elements comprising a stack  */
	this.dataStore = [];

};

/**
 * Method to reset stack.
 *
 * @return {Boolean}
 */
Stack.prototype.clear = function()
{
	this.top = 0;
	return true;
};

/**
 * Method to get instance of last element put on stack
 *
 * @return	{Mixed} last item placed on stack
 */
Stack.prototype.peek = function()
{
	if (this.top > 0)
	{
		return this.dataStore[this.top - 1];
	}

	return false;
};

/**
 * Method to remove last element put on stack
 *
 * @return	{Mixed} removed item from top of stack
 */
Stack.prototype.pop = function()
{
	return this.dataStore[--this.top];
};

/**
 * Method to push new element onto stack
 *
 * @param		{Mixed} element The element to push onto stack
 *
 * @return		{Boolean}
 */
Stack.prototype.push = function(element)
{
	if (typeof element !== "undefined")
	{
		this.dataStore[this.top++] = element;
		return true;
	}

	return false;
};

/**
 * Method to get current number of elements in the stack
 *
 * @return		{integer} number of elements in the stack
 */
Stack.prototype.length = function()
{
	return this.top;
};

exports.create = function() {
	return new Stack();
};