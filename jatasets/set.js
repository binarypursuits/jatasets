/*jshint unused:false */

'use strict';

/**
 *  Creates a new Set
 *  @class
 */
var Set = function(){

	/** @property	{Array} items - an object values comprising a set  */
	this.items = {};

	/**
	 * Private utility method to determine if value exists in the set
	 *
	 * @param {mixed} element The element being appended to the set
	 * @returns {mixed}
	 */
	this.exists = function (value)
	{
		return this.items.hasOwnProperty(value);
	};

};

/**
 * Method to add value to set
 *
 * @param		{mixed} value value being added to the set
 *
 * @return		{boolean}
 *
 */
Set.prototype.add = function(value)
{
	if (!this.exists(value))
	{
		this.items[value] = value;
		return true;
	}

	return false;
};

/**
 * Method to remove value from set
 *
 * @param {mixed} value value being removed from the set
 *
 * @returns	{boolean}
 */
Set.prototype.remove = function(value)
{
	if (this.exists(value))
	{
		delete this.items[value];
		return true;
	}

	return false;
};

/**
 * Method to verify if a value is in the set
 *
 * @param {mixed} value value to test if exists in set
 *
 * @returns	{boolean}
 */
Set.prototype.has = function(value)
{
	return this.exists(value);
};

/**
 * Method to clear all values from the set
 *
 * @returns	{boolean}
 */
Set.prototype.clear = function()
{
	this.items = {};
	return true;
};

/**
 * Method to get current size of set
 *
 * @returns	{integer} number of values in set
 */
Set.prototype.size = function()
{
	var count = 0;

	for (var prop in this.items)
	{
		if (this.items.hasOwnProperty(prop))
		{
			++count;
		}
	}

	return count;
};

/**
 * Method to retrieve all values in the set
 *
 * @returns	{object} values from the set
 *
 */
Set.prototype.values = function()
{
	var keys = [];

	for (var key in this.items)
	{
		keys.push(key);
	}

	return keys;
};

/**
 * Method to retrieve all values in the set
 *
 * @returns		{object} values from the set
 *
 */
Set.prototype.union = function(compareSet)
{
	var unionSet = new Set();

	var values = this.values();
	var length = values.length;

	for (var i = 0; i < length; i++)
	{
		unionSet.add(values[i]);
	}

	values = compareSet.values();
	length = compareSet.length;

	for (i = 0; i < length; i++)
	{
		unionSet.add(values[i]);
	}

	return unionSet;
};

/**
 * Method to retrieve all values in the set
 *
 * @returns		{object} values from the set
 *
 */
Set.prototype.intersection = function(compareSet)
{
	var intersectionSet = new Set();

	var values = this.values();
	var length = values.length;

	for (var i = 0; i < length; i++)
	{
		if (compareSet.has(values[i]))
		{
			intersectionSet.add(values[i]);
		}
	}

	return intersectionSet;
};

/**
 * Method to retrieve all values in the set
 *
 * @returns	{object} values from the set
 *
 */
Set.prototype.difference = function(compareSet)
{
	var differenceSet = new Set();

	var values = this.values();
	var length = values.length;

	for (var i = 0; i < length; i++)
	{
		if (!compareSet.has(values[i]))
		{
			differenceSet.add(values[i]);
		}
	}

	return differenceSet;
};

/**
 * Method to retrieve all values in the set
 *
 * @returns	{object} values from the set
 *
 */
Set.prototype.subset = function(compareSet)
{
	if (this.size() > compareSet.size())
	{
		return false;
	}
	else
	{
		var values = this.values();
		var length = values.length;

		for (var i = 0; i < length; i++)
		{
			if (!compareSet.has(values[i]))
			{
				return false;
			}
		}

		return true;
	}
};

exports.create = function() {
	return new Set();
};