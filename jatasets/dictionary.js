/**
 *  @namespace	jatasets
 *  @class		Dictionary
 */

/*jshint unused:false */

'use strict';

/**
 *  @namespace	jatasets
 *  @class		Dictionary
 */
var Dictionary = function()
{
	/** @property	{Array} dataStore - array comprising the dictionary  */
	this.dataStore = [];
	
	/** @property	{integer} total - current total number of items in the dictionary  */
	this.total = 0;
};

/**
 * Method to get instance of last element put on stack
 *
 * @function	Dictionary.add
 * @memberof	jatasets
 *
 * @param		{string}	key - index value to store value under
 * @param		{mixed}		value - item being stored
 *
 * @returns		{boolean}
 */
Dictionary.prototype.add = function(key, value)
{
	if (typeof value !== "undefined")
	{
		this.dataStore[key] = value;
		this.total++;
		return true;
	}

	return false;
};

/**
 * Method to remove item from the dictionary
 *
 * @function	Dictionary.remove
 * @memberof	jatasets
 *
 * @param		{string}	key - index of item to be removed
 *
 * @returns		{boolean}
 */
Dictionary.prototype.remove = function(key)
{
	if (typeof this.dataStore[key] !== "undefined")
	{
		delete this.dataStore[key];
		this.total--;
		return true;
	}

	return false;
};

/**
 * Method to retrieve value from dictionary using the key
 *
 * @function	Dictionary.find
 * @memberof	jatasets
 *
 * @param		{string}	key - index search for in dictionary
 *
 * @returns		{mixed} return item if successful and false if key is not valid
 */
Dictionary.prototype.find = function(key)
{
	if (typeof this.dataStore[key] !== "undefined")
	{
		return this.dataStore[key];
	}

	return false;
};

/**
 * Method to get string representation of values
 * in dictionary
 *
 * @function	Dictionary.showAll
 * @memberof	jatasets
 *
 * @returns		{string}
 */
Dictionary.prototype.showAll = function()
{
	var string = "";

	if (this.total === 0)
	{
		string = "There are currently no items in the dictionary.";
	}
	else
	{
		for (var key in Object.keys(this.dataStore).sort())
		{
			string += key + " -> " + this.dataStore[key];
		}
	}

	return string;
};

/**
 * Method to get current number of items in dictionary
 *
 * @function	Dictionary.count
 * @memberof	jatasets
 *
 * @returns		{integer}
 */
Dictionary.prototype.count = function()
{
	return this.count;
};

/**
 * Method to clear all values from dictionary
 *
 * @function	Dictionary.clear
 * @memberof	jatasets
 *
 * @returns		{boolean}
 */
Dictionary.prototype.clear = function()
{
	if (this.total > 0)
	{
		this.dataStore = [];
		return true;
	}

	return false;
};

exports.create = function() {
	return new Dictionary();
};
