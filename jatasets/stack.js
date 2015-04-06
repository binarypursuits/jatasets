/**
 *  @namespace	jatasets
 *  @class		Stack
 */

/*jshint unused:false */

'use strict';

/**
 *  @namespace	jatasets
 *  @class		Stack
 */
var Stack = function() {

	/** @property	{integer} top -  */
	this.top = 0;

	/** @property	{Array} dataStore - an array of elements comprising a stack  */
	this.dataStore = [];

};

/**
 * Method to reset stack.
 *
 * @function	clear
 * @memberof	stack
 *
 */
Stack.prototype.clear = function()
{
	this.top = 0;
	return true;
};

/**
 * Method to get instance of last element put on stack
 *
 * @function	peek
 * @memberof	stack
 *
 * @returns		{element}
 */
Stack.prototype.peek = function()
{
	return this.dataStore[this.top - 1];
};

/**
 * Method to remove last element put on stack
 *
 * @function	pop
 * @memberof	stack
 *
 * @returns		{element}
 */
Stack.prototype.pop = function()
{
	return this.dataStore[--this.top];
};

/**
 * Method to push new element onto stack
 *
 * @function	push
 * @memberof	stack
 *
 * @param		{mixed} element - The element to push onto stack
 *
 * @returns		{boolean}
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
 * @function	length
 * @memberof	stack
 *
 * @returns		{integer} number of elements in the stack
 */
Stack.prototype.length = function()
{
	return this.top;
};

if (typeof exports !== "undefined")
{
	exports.create = function() {
		return new Stack();
	};
}