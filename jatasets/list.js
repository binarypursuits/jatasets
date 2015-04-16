/*jshint unused:false */

'use strict';

/**
 *  Creates a new List Object
 *  @class
 */
function List() {
	
	/** @property	{Integer} listSize Length of current list */
	this.listSize = 0;

	/** @property	{Integer} pos Current position in list */
	this.pos = 0;

	/** @property	{Array} dataStore An array of elements comprising a list  */
	this.dataStore = [];

	/**
	 * Private method to append an element to the list
	 *
	 * @memberof List
	 *
	 * @param {Mixed} element The element being appended to the list
	 *
	 * @returns {Boolean}
	 */
	this.append = function (element)
	{
		this.dataStore[this.listSize++] = element;
		return true;
	};

	/**
	 * Private method to find an element in the list.  Will either return
	 * element index if found and false if not found.
	 *
	 * @memberof List
	 * 
	 * @param		{Mixed} element The element being appended to the list
	 *
	 * @return		{Boolean}
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
	
}

/**
 * Method to reset list.
 *
 * @memberof List
 *
 * @returns {Boolean}
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
 * @memberof List
 *
 * @returns	{String} list as comma serperate string
 */
List.prototype.toString = function()
{
	return this.dataStore.join(',');
};

/**
 * Method to retrieve list as JSON string
 *
 * @memberof List
 *
 * @returns {String}
 */
List.prototype.toJson = function()
{
	return JSON.stringify(this.dataStore);
};

/**
 * Method to insert element after another element
 *
 * @memberof List
 *
 * @param		{Mixed} element The element you wish to place
 * @param		{Mixed} after The element you wish to place after
 *
 * @returns		{Boolean}
 */
List.prototype.insert = function(element, after)
{
	if (typeof element !== "undefined")
	{
		var position = this.find(after);
		console.log(position);
		if (position > -1)
		{
			this.dataStore.splice(position + 1, 0, element);
			++this.listSize;
			return true;
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
 * @memberof List
 *
 * @param		{Mixed} element The element to be removed
 *
 * @returns		{Boolean}
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
 * @memberof List
 *
 * @returns {Integer}
 */
List.prototype.front = function()
{
	this.pos = 0;
	return this.pos;
};

/**
 * Method to move current this.position to the end of the list
 *
 * @memberof List
 *
 * @returns {Integer}
 */
List.prototype.end = function()
{
	this.pos = this.listSize - 1;
	return this.pos;
};

/**
 * Method to move current this.position in list to previous element
 *
 * @memberof List
 * 
 * @returns {Integer|Boolean}
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
 * @memberof List
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
 * @memberof List
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
 * @memberof List
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
 * @memberof List
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
 * @memberof List
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
 * @memberof List
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

exports.create = function() {
	return new List();
};