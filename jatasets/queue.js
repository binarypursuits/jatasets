/**
 *  @namespace	jatasets
 *  @class		Queue
 */

/*jshint unused:false */

'use strict';

/**
 *  @namespace	jatasets
 *  @class		Queue
 */
var Queue = function() {

	/** @property	{Array} dataStore - an array of elements comprising a Queue  */
	this.dataStore = [];

	/** @property	{integer} total - total elements comprising a Queue  */
	this.total = 0;

	/** @property	{integer} ticket - current ticket number to issue  */
	this.ticket = 0;
};

/**
 * Method to Queue an element to the Queue
 *
 * @param {mixed} element being added to Queue
 *
 * @function	Queue.enqueue
 * @memberof	jatasets
 *
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
 * @function	Queue.dequeue
 * @memberof	jatasets
 *
 * @returns		{boolean}
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
 * @function	Queue.front
 * @memberof	jatasets
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
 * @function	Queue.back
 * @memberof	jatasets
 *
 */
Queue.prototype.back = function()
{
	return this.dataStore[this.dataStore.length - 1];
};

/**
 * Method to verify if Queue is empty
 *
 * @function	Queue.empty
 * @memberof	jatasets
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
 * @function	Queue.toString
 * @memberof	jatasets
 *
 * @returns		{string}
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

if (typeof exports !== "undefined")
{
	exports.create = function() {
		return new Queue();
	};
}
