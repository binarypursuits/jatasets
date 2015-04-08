/**
 *  @namespace	jatasets
 */

/*jshint unused:false */

'use strict';

/**
 *  Creates a new Dictionary
 *  @class
 */
var List = function() {
	/** @lends List */
	
	/** @property	{integer} [listSize] length of current list */
	this.listSize = 0;

	/** @property	{integer} [pos] Current this.position in list */
	this.pos = 0;

	/** @property	{Array} [dataStore] an array of elements comprising a list  */
	this.dataStore = [];

	/**
	 * Private method to append an element to the list
	 * @private
	 * @param		{mixed} [element] - The element being appended to the list
	 *
	 */
	this.append = function (element)
	{
		this.dataStore[this.listSize++] = element;
		return true;
	};

	/**
	 * Private method to find an element in the list.  Will either return
	 * element index if found and false if not found.
	 * @private
	 * @param		{mixed} [element] The element being appended to the list
	 *
	 * @return		{boolean}
	 */
	this.find = function (element)
	{
		for (var i = 0; i < this.dataStore.length; ++i)
		{
			if (this.dataStore[i] === element)
			{
				return i;
			}
		}
	
		return -1;
	};
	
};

/**
 * Method to reset list.
 *
 * @returns {boolean}
 */
List.prototype.clear = function()
{
	this.dataStore = [];
	this.listSize = this.pos = 0;
	return true;
};

/**
 * Method to retrieve list as comma seperate string
 *
 * @returns		{string} list as comma serperate string
 */
List.prototype.toString = function()
{
	return this.dataStore.join(',');
};

/**
 * Method to retrieve list as JSON string
 *
 * @returns		{string}
 */
List.prototype.toJson = function()
{
	return JSON.stringify(this.dataStore);
};

/**
 * Method to insert element after another element
 *
 * @param		{mixed} [element] The element you wish to place
 * @param		{mixed} [after] The element you wish to place after
 *
 * @returns		{boolean}
 */
List.prototype.insert = function(element, after)
{
	if (typeof element !== "undefined")
	{
		if (typeof after !== "undefined")
		{
			var position = this.find(after);
			if (position > -1)
			{
				this.dataStore.splice(position + 1, 0, element);
				++this.listSize;
				return true;
			}
		}
		else
		{
			return this.append(element);
		}
	}

	return false;
};

/**
 * Method to remove element from list
 *
 * @param		{mixed} [element] The element to be removed
 *
 * @returns		{boolean}
 */
List.prototype.remove = function(element)
{
	var position = this.find(element);

	if (position > -1)
	{
		this.dataStore.splice(position, 1);
		--this.listSize;
		return true;
	}

	return false;
};

/**
 * Method to move current this.position to the beginning of the list
 *
 * @returns {integer}
 */
List.prototype.front = function()
{
	this.pos = 0;
	return this.pos;
};

/**
 * Method to move current this.position to the end of the list
 *
 * @returns {integer}
 */
List.prototype.end = function()
{
	this.pos = this.listSize - 1;
	return this.pos;
};

/**
 * Method to move current this.position in list to previous element
 * 
 * @returns {integer|boolean}
 */
List.prototype.prev = function()
{
	if (this.pos > 0)
	{
		--this.pos;
		return this.pos;
	}
	
	return false;
};

/**
 * Method to move current this.position in list to next element
 *
 * @returns {integer|boolean}
 */
List.prototype.next = function()
{
	if (this.pos < (this.listSize - 1))
	{
		++this.pos;
		return this.pos;
	}
	
	return false;
};

/**
 * Method to get current number of elements in the list
 *
 * @returns		{integer} number of elements in the list
 */
List.prototype.length = function()
{
	return this.listSize;
};

/**
 * Method to get current this.position in the list
 *
 * @returns		{integer} current this.possition in th elist
 */
List.prototype.current = function()
{
	return this.pos;
};

/**
 * Method to move current this.position in the list to specific this.position
 * and validating the this.position provided
 *
 * @param		{integer} this.position - The this.position to move to in the list
 *
 * @returns		{boolean}
 */
List.prototype.move = function(position)
{
	if (position > 0 && position < (this.listSize - 1))
	{
		this.pos = position;
		return true;
	}

	return false;
};

/**
 * Method to get element at current this.position in the list
 *
 * @returns		{mixed} element in the current this.position
 */
List.prototype.getElement = function()
{
	return this.dataStore[this.pos];
};

/**
 * Method to determine if list contains an element
 *
 * @param		{mixed} element - The element to verify if in list
 *
 * @returns		{boolean}
 */
List.prototype.contains = function(element)
{
	if (this.find(element) > -1)
	{
		return true;
	}

	return false;
};

/** creates and return new List Object */
exports.create = function() {
	return new List();
};