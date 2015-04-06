<<<<<<< HEAD
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./jatasets');
},{"./jatasets":3}],2:[function(require,module,exports){
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


},{}],3:[function(require,module,exports){
'use strict';

var dictionary = require('./dictionary');
var queue = require('./queue');
var list = require('./list');
var set = require('./set');
var stack = require('./stack');

exports.dictionary = function() {
	return dictionary.create();
};

exports.queue = function() {
	return queue.create();
};

exports.list = function() {
	return list.create();
};

exports.set = function() {
	return set.create();
};

exports.stack = function() {
	return stack.create();
}; 

},{"./dictionary":2,"./list":4,"./queue":5,"./set":6,"./stack":7}],4:[function(require,module,exports){
/**
 *  @namespace	jatasets
 *  @class		List
 */

/*jshint unused:false */

'use strict';

/**
 *  @namespace	jatasets
 *  @class		List
 */
var List = function() {

	/** @property	{integer} this.listSize - length of current list */
	this.listSize = 0;

	/** @property	{integer} this.pos - Current this.position in list */
	this.pos = 0;

	/** @property	{Array} this.dataStore - an array of elements comprising a list  */
	this.dataStore = [];

	/**
	 * Private method to append an element to the list
	 *
	 * @function	List.append
	 * @memberof	jatasets
	 *
	 * @param		{mixed} element - The element being appended to the list
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
	 *
	 * @function	List.find
	 * @memberof	jatasets
	 *
	 * @param		{mixed} element - The element being appended to the list
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
 * @function	List.clear
 * @memberof	jatasets
 *
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
 * @function	List.toString
 * @memberof	jatasets
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
 * @function	List.toJson
 * @memberof	jatasets
 *
 * @returns		{string} list as JSON string
 */
List.prototype.toJson = function()
{
	return JSON.stringify(this.dataStore);
};

/**
 * Method to insert element after another element
 *
 * @function	List.insert
 * @memberof	jatasets	
 *
 * @param		{mixed} element - The element you wish to place
 * @param		{mixed} after - The element you wish to place after
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
 * @function	List.remove
 * @memberof	jatasets
 *
 * @param		{mixed} element - The element to be removed
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
 * @function	List.front
 * @memberof	jatasets
 *
 */
List.prototype.front = function()
{
	this.pos = 0;
	return this.pos;
};

/**
 * Method to move current this.position to the end of the list
 *
 * @function	List.end
 * @memberof	jatasets
 *
 */
List.prototype.end = function()
{
	this.pos = this.listSize - 1;
	return this.pos;
};

/**
 * Method to move current this.position in list to previous element
 *
 * @function	List.prev
 * @memberof	jatasets
 *
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
 * @function	List.next
 * @memberof	jatasets
 *
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
 * @function	List.length
 * @memberof	jatasets
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
 * @function	List.current
 * @memberof	jatasets.
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
 * @function	List.move
 * @memberof	jatasets
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
 * @function	List.getElement
 * @memberof	jatasets
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
 * @function	List.contains
 * @memberof	jatasets
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
},{}],5:[function(require,module,exports){
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

exports.create = function() {
	return new Queue();
};

},{}],6:[function(require,module,exports){
/**
 *  @namespace	jatasets
 *  @class		Set
 */

/*jshint unused:false */

'use strict';

/**
 *  @namespace	jatasets
 *  @class		Set
 */
var Set = function(){

	/** @property	{Array} items - an object values comprising a set  */
	this.items = {};

	/**
	 * Private utility method to determine if value exists in the set
	 *
	 * @function	Set.exists
	 * @memberof	jatasets
	 *
	 * @param		{mixed} element - The element being appended to the set
	 *
	 */
	this.exists = function (value)
	{
		return this.items.hasOwnProperty(value);
	};

};

/**
 * Method to add value to set
 *
 * @function	Set.add
 * @memberof	jatasets
 *
 * @param		{mixed} value - value being added to the set
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
 * @function	Set.remove
 * @memberof	jatasets
 *
 * @param		{mixed} value - value being removed from the set
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
 * @function	Set.has
 * @memberof	jatasets
 *
 * @param		{mixed} value - value to test if exists in set
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
 * @function	Set.clear
 * @memberof	jatasets
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
 * @function	Set.size
 * @memberof	jatasets
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
 * @function	Set.values
 * @memberof	jatasets
 *
 * @returns	{object} values from the set
 *
 */
Set.prototype.values = function()
{
	var keys = {};

	for (var key in this.items)
	{
		keys.push(key);
	}

	return keys;
};

/**
 * Method to retrieve all values in the set
 *
 * @function	Set.union
 * @memberof	jatasets
 *
 * @returns		{object} values from the set
 *
 */
Set.prototype.union = function()
{

};

/**
 * Method to retrieve all values in the set
 *
 * @function	Set.intersection
 * @memberof	jatasets
 *
 * @returns		{object} values from the set
 *
 */
Set.prototype.intersection = function()
{

};

/**
 * Method to retrieve all values in the set
 *
 * @function	Set.difference
 * @memberof	jatasets
 *
 * @returns		{object} values from the set
 *
 */
Set.prototype.difference = function()
{

};

/**
 * Method to retrieve all values in the set
 *
 * @function	Set.subset
 * @memberof	jatasets
 *
 * @returns	{object} values from the set
 *
 */
Set.prototype.subset = function()
{

};

exports.create = function() {
	return new Set();
};
},{}],7:[function(require,module,exports){
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
},{}]},{},[1]);
=======
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({},{},[]);
>>>>>>> branch 'master' of https://github.com/brian-bolli/jatasets.git
