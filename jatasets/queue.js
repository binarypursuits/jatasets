/**
 * Creates a new Queue Data object
 *
 * @class Queue
 * @main jatasets
 */

/*jshint unused:false */

'use strict';

/**
 *  Creates a new Queue
 *  @constructor
 */
var Queue = function() {

	/** @property	{Array} dataStore An array of elements comprising a Queue  */
	this.dataStore = [];

	/** @property	{integer} total Total elements comprising a Queue  */
	this.total = 0;

	/** @property	{integer} ticket Current ticket number to issue  */
	this.ticket = 0;
};

/**
 * Method to Queue an element to the Queue
 *
 * @method	enqueue
 *
 * @param	{Mixed} element being added to Queue
 *
 * @return	{Mixed}
 */
Queue.prototype.enqueue = function(element)
{
	if (typeof element !== "undefined")
	{
		this.dataStore.push(element);
		this.total++;
		this.ticket++;
		return this.ticket;
	}

	return false;
};


/**
 * Method to remove an element from the Queue
 *
 * @method	dequeue
 *
 * @return	{Boolean}
 */
Queue.prototype.dequeue = function()
{
	if (this.dataStore.length > 0)
	{
		this.total--;
		return this.dataStore.shift();
	}

	return false;
};

/**
 * Method to retrieve element in front of Queue
 *
 * @method	front
 *
 */
Queue.prototype.front = function()
{
	if (this.dataStore.length >= 1)
	{
		return this.dataStore[0];
	}
	else
	{
		return 0;
	}
};

/**
 * Method to retrieve element in back of Queue
 *
 * @method	back
 *
 */
Queue.prototype.back = function()
{
	return this.dataStore[this.dataStore.length - 1];
};

/**
 * Method to verify if Queue is empty
 *
 * @method	empty
 *
 */
Queue.prototype.empty = function()
{
	if (this.dataStore.length === 0)
	{
		return true;
	}

	return false;
};

/**
 * Method to retrieve Queue as string with line breaks
 *
 * @method	toString
 *
 * @return	{string}
 */
Queue.prototype.toString = function()
{
	var string = "";

	for (var i = 0; i < this.dataStore.length; ++i)
	{
		string += this.dataStore[i] + "\n";
	}

	return string;
};

exports.create = function() {
	return new Queue();
};
