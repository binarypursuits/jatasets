/**
 * JavaScript data structure object use to store key, value
 * pairs, where as the key is used to store and retrieve a
 * particular element.
 *
 * @class Dictionary
 * @main jatasets
 */

/*jshint unused:false */

'use strict';

/**
 *  Creates a new Dictionary
 *
 *  @constructor
 */
function Dictionary()
{
	/** @property	{Object} [dataStore] array comprising the dictionary */
	this.dataStore = {};

	/** @property	{integer} [total] current total number of items in the dictionary */
	this.total = 0;
}

/**
 * Method to get instance of last element put on stack
 *
 * @method	add
 *
 * @param   {string}  [key] index value to store value under
 * @param   {mixed}   [value] item being stored
 *
 * @return {boolean}
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
 * @method	remove
 *
 * @param   {string}  [key] index of item to be removed
 *
 * @return  {boolean}
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
 * @method	find
 *
 * @param   {string}  [key] index search for in dictionary
 *
 * @return  {mixed}   return item if successful and false if key is not valid
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
 * Method to get current number of items in dictionary
 *
 * @method	count
 *
 * @return		{integer}
 */
Dictionary.prototype.count = function()
{
	return this.total;
};

/**
 * Method to clear all values from dictionary
 *
 * @method	clear
 *
 * @return		{boolean}
 */
Dictionary.prototype.clear = function()
{
	this.dataStore = [];
	this.total = 0;
	return true;
};

exports.create = function() {
	return new Dictionary();
};

