(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Creates a new Dictionary Data object
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


},{}],2:[function(require,module,exports){
/**
 * JataSets module.
 * @module jatasets
 */

'use strict';

var dictionary = require('./dictionary');
var queue = require('./queue');
var list = require('./list');
var set = require('./set');
var stack = require('./stack');

/**
 * Create new Dictionary dataset object and return.
 *
 * @module jatasets
 * @submodule dictionary
 */
exports.dictionary = function() {
	return dictionary.create();
};

/** Create new Queue dataset object and return.
 *
 * @module jatasets
 * @submodule queue
 */
exports.queue = function() {
	return queue.create();
};

/** Create new List dataset object and return.
 *
 * @module jatasets
 * @submodule list
 */
exports.list = function() {
	return list.create();
};

/** Create new Set dataset object and return.
 *
 * @module jatasets
 * @submodule set
 */
exports.set = function() {
	return set.create();
};

/** Create new Stack dataset object and return.
 *
 * @module jatasets
 * @submodule stack
 */
exports.stack = function() {
	return stack.create();
};

},{"./dictionary":1,"./list":3,"./queue":4,"./set":5,"./stack":6}],3:[function(require,module,exports){
/**
 * Creates a new List Data object
 *
 * @class List
 * @main jatasets
 */

/*jshint unused:false */

'use strict';

/**
 *  Creates a new List Object
 *  @constructor
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
	 * @private
	 * @method	append
	 *
	 * @param {Mixed} element The element being appended to the list
	 *
	 * @return {Boolean}
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
	 * @private
	 * @method	find
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
 * @method	clear
 *
 * @return {Boolean}
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
 * @method	toString
 *
 * @return	{String} list as comma serperate string
 */
List.prototype.toString = function()
{
	return this.dataStore.join(',');
};

/**
 * Method to retrieve list as JSON string
 *
 * @memberof toJson
 *
 * @return {String}
 */
List.prototype.toJson = function()
{
	return JSON.stringify(this.dataStore);
};

/**
 * Method to add element to list
 *
 * @method	add
 *
 * @param	{Mixed} element The element you wish to place
 *
 * @return	{Boolean}
 */
List.prototype.add = function(element)
{
	if (typeof element !== "undefined")
	{
		this.append(element);
		return true;
	}

	return false;
};

/**
 * Method to insert element after another element
 *
 * @method	insert
 *
 * @param		{Mixed} element The element you wish to place
 * @param		{Mixed} after The element you wish to place after
 *
 * @return		{Boolean}
 */
List.prototype.insert = function(element, after)
{
	var position = this.find(after);
	if (typeof element !== "undefined" && position > -1)
	{
		this.dataStore.splice(position + 1, 0, element);
		++this.listSize;
		return true;
	}

	return false;
};

/**
 * Method to remove element from list
 *
 * @method	remove
 *
 * @param		{Mixed} element The element to be removed
 *
 * @return		{Boolean}
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
 * @method	front
 *
 * @return {Integer}
 */
List.prototype.front = function()
{
	this.pos = 0;
	return this.pos;
};

/**
 * Method to move current this.position to the end of the list
 *
 * @method	end
 *
 * @return {Integer}
 */
List.prototype.end = function()
{
	this.pos = this.listSize - 1;
	return this.pos;
};

/**
 * Method to move current this.position in list to previous element
 *
 * @method	prev
 *
 * @return {Integer|Boolean}
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
 * @method	next
 *
 * @return {integer|boolean}
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
 * @method	length
 *
 * @return		{integer} number of elements in the list
 */
List.prototype.length = function()
{
	return this.listSize;
};

/**
 * Method to get current this.position in the list
 *
 * @method	current
 *
 * @return		{integer} current this.possition in th elist
 */
List.prototype.current = function()
{
	return this.pos;
};

/**
 * Method to move current this.position in the list to specific this.position
 * and validating the this.position provided
 *
 * @method	move
 *
 * @param		{integer} this.position - The this.position to move to in the list
 *
 * @return		{boolean}
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
 * @method	getElement
 *
 * @memberof List
 *
 * @return		{mixed} element in the current this.position
 */
List.prototype.getElement = function()
{
	return this.dataStore[this.pos];
};

/**
 * Method to determine if list contains an element
 *
 * @method	contains
 *
 * @param		{mixed} element - The element to verify if in list
 *
 * @return		{boolean}
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
/**
 * Creates a new Set Data object
 *
 * @class Set
 * @main jatasets
 */

/*jshint unused:false */

'use strict';

if (!Object.keys)
{
	Object.keys = function(items)
	{
		var keys = [];

		for (var key in items)
		{
			keys.push(key);
		}

		return keys;
	};
}

/**
 *  Creates a new Set Object
 *  @constructor
 */
var Set = function(){

	/** @property	{Array} items - an object values comprising a set  */
	this.items = {};

	/**
	 * Private utility method to determine if value exists in the set
	 *
	 * @private
	 * @method	exists
	 *
	 * @param {Mixed} element The element being appended to the set
	 * @return {Mixed}
	 */
	this.exists = function (value)
	{
		return this.items.hasOwnProperty(value);
	};

};

/**
 * Method to add value to set
 *
 * @method	add
 *
 * @param {Mixed} value value being added to the set
 *
 * @return {Boolean}
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
 * @method	remove
 *
 * @param {Mixed} value Value being removed from the set
 *
 * @return	{Boolean}
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
 * @method	has
 *
 * @param {Mixed} value value to test if exists in set
 *
 * @return	{Boolean}
 */
Set.prototype.has = function(value)
{
	return this.exists(value);
};

/**
 * Method to clear all values from the set
 *
 * @method	clear
 *
 * @return	{Boolean}
 */
Set.prototype.clear = function()
{
	this.items = {};
	return true;
};

/**
 * Method to get current size of set
 *
 * @method	size
 *
 * @return	{integer} number of values in set
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
 * @method	values
 *
 * @return	{object} values from the set
 *
 */
Set.prototype.values = function()
{
	return Object.keys(this.items);
	//return JSON.stringify(this.items);

	//var keys = [];

	//for (var key in this.items)
	//{
		//keys.push(key);
	//}

	//return keys;
};

/**
 * Method to retrieve all values in the set
 *
 * @method	union
 *
 * @return	{object} values from the set
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
 * @method	intersection
 *
 * @return	{object} values from the set
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
 * @method	difference
 *
 * @return	{object} values from the set
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
 * @method	subset
 *
 * @return	{object} values from the set
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
},{}],6:[function(require,module,exports){
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
 * @method	clear
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
 * @method	peek
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
 * @method	pop
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
 * @method	push
 *
 * @param	{Mixed} element The element to push onto stack
 *
 * @return	{Boolean}
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
 * @method	length
 *
 * @return	{integer} number of elements in the stack
 */
Stack.prototype.length = function()
{
	return this.top;
};

exports.create = function() {
	return new Stack();
};
},{}]},{},[2]);
