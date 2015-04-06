require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"jatasets":[function(require,module,exports){
'use strict';
// Source: ./src/dictionary.js
/**
 *  @namespace	dictionary
 */

/*jshint unused:false */

var dictionary = (function(){

	/** @property	{Array} dataStore - an array of elements comprising a dictionary  */
	var dataStore = [],

		total = 0;

	return {

		/**
		 * Method to add an element to the dictionary
		 *
		 * @param {mixed} key - a string or integer index
		 * @param {mixed} value - the element to add to dictionary
		 *
		 * @function	add
		 * @memberof	dictionary
		 *
		 */
		add: function(key, value)
		{
			if (typeof value !== "undefined")
			{
				dataStore[key] = value;
				total++;
				return true;
			}

			return false;
		},


		/**
		 * Method to remove an element from the dictionary
		 *
		 * @param {mixed} key - index for element to remvoe from dictionary
		 *
		 * @function	remove
		 * @memberof	dictionary
		 *
		 * @returns		{mixed} element if found and false if not found
		 */
		remove: function(key)
		{
			if (typeof dataStore[key] !== "undefined")
			{
				delete dataStore[key];
				total--;
				return true;
			}

			return false;
		},

		/**
		 * Method to  element in front of dictionary
		 *
		 * @function	find
		 * @memberof	dictionary
		 *
		 */
		find: function(key)
		{
			if (typeof dataStore[key] !== "undefined")
			{
				return dataStore[key];
			}

			return false;
		},

		/**
		 * Method to show all elements in dictionary
		 *
		 * @function	back
		 * @memberof	dictionary
		 *
		 */
		showAll: function()
		{
			var string = "";

			for (var key in Object.keys(dataStore).sort())
			{
				string += key + " -> " + dataStore[key];
			}

			return string;
		},

		/**
		 * Method to determine number of elements in dictionary
		 *
		 * @function	count
		 * @memberof	dictionary
		 *
		 */
		count: function()
		{
			return total;
		},

		/**
		 * Method to clear dictionary
		 *
		 * @function	clear
		 * @memberof	dictionary
		 *
		 * @returns		{string}
		 */
		clear: function()
		{
			if (total > 0)
			{
				dataStore = [];
				return true;
			}

			return false;
		},
	};
}());
// Source: ./src/list.js
/**
 *  @namespace	list
 */

/*jshint unused:false */

var list = (function(){


	/** @property	{integer} listSize - length of current list */
	var listSize = 0,

	/** @property	{integer} pos - Current position in list */
		pos = 0,

	/** @property	{Array} dataStore - an array of elements comprising a list  */
		dataStore = [];

	/**
	 * Method to find element position in list.
	 *
	 * @function	find
	 * @memberof	list
	 *
	 * @param		{mixed} element - The element being search for
	 *
	 * @returns		{integer} position of the element in the list or -1 for null result
	 */
	function find(element)
	{
		for (var i = 0; i < dataStore.length; ++i)
		{
			if (dataStore[i] === element)
			{
				return i;
			}
		}

		return -1;
	}


	/**
	 * Method to append an element to the list
	 *
	 * @function	append
	 * @memberof	list
	 *
	 * @param		{mixed} element - The element being appended to the list
	 *
	 */
	function append(element)
	{
		dataStore[listSize++] = element;
		return true;
	}

	return {

		/**
		 * Method to reset list.
		 *
		 * @function	clear
		 * @memberof	list
		 *
		 */
		clear: function()
		{
			dataStore = [];
			listSize = pos = 0;
			return true;
		},

		/**
		 * Method to retrieve list as comma seperate string
		 *
		 * @function	toString
		 * @memberof	list
		 *
		 * @returns		{string} list as comma serperate string
		 */
		toString: function()
		{
			return dataStore.join(',');
		},

		/**
		 * Method to retrieve list as JSON string
		 *
		 * @function	toJson
		 * @memberof	list
		 *
		 * @returns		{string} list as JSON string
		 */
		toJson: function()
		{
			return JSON.stringify(dataStore);
		},

		/**
		 * Method to insert element after another element
		 *
		 * @function	insert
		 * @memberof	list
		 *
		 * @param		{mixed} element - The element you wish to place
		 * @param		{mixed} after - The element you wish to place after
		 *
		 * @returns		{boolean}
		 */
		insert: function(element, after)
		{
			if (typeof element !== "undefined")
			{
				if (typeof after !== "undefined")
				{
					var position = find(after);
					if (position > -1)
					{
						dataStore.splice(position + 1, 0, element);
						++listSize;
						return true;
					}
				}
				else
				{
					return append(element);
				}
			}

			return false;
		},

		/**
		 * Method to remove element from list
		 *
		 * @function	remove
		 * @memberof	list
		 *
		 * @param		{mixed} element - The element to be removed
		 *
		 * @returns		{boolean}
		 */
		remove: function(element)
		{
			var position = find(element);

			if (position > -1)
			{
				dataStore.splice(position, 1);
				--listSize;
				return true;
			}

			return false;
		},

		/**
		 * Method to move current position to the beginning of the list
		 *
		 * @function	front
		 * @memberof	list
		 *
		 */
		front: function()
		{
			pos = 0;
		},

		/**
		 * Method to move current position to the end of the list
		 *
		 * @function	end
		 * @memberof	list
		 *
		 */
		end: function()
		{
			pos = listSize - 1;
		},

		/**
		 * Method to move current position in list to previous element
		 *
		 * @function	prev
		 * @memberof	list
		 *
		 */
		prev: function()
		{
			if (pos > 0)
			{
				--pos;
			}
		},

		/**
		 * Method to move current position in list to next element
		 *
		 * @function	next
		 * @memberof	list
		 *
		 */
		next: function()
		{
			if (pos < (listSize - 1))
			{
				++pos;
			}
		},

		/**
		 * Method to get current number of elements in the list
		 *
		 * @function	length
		 * @memberof	list
		 *
		 * @returns		{integer} number of elements in the list
		 */
		length: function()
		{
			return listSize;
		},

		/**
		 * Method to get current position in the list
		 *
		 * @function	current
		 * @memberof	list
		 *
		 * @returns		{integer} current possition in th elist
		 */
		current: function()
		{
			return pos;
		},

		/**
		 * Method to move current position in the list to specific position
		 * and validating the position provided
		 *
		 * @function	move
		 * @memberof	list
		 *
		 * @param		{integer} position - The position to move to in the list
		 *
		 * @returns		{boolean}
		 */
		move: function(position)
		{
			if (position > 0 && position < (listSize - 1))
			{
				pos = position;
				return true;
			}

			return false;
		},

		/**
		 * Method to get element at current position in the list
		 *
		 * @function	getElement
		 * @memberof	list
		 *
		 * @returns		{mixed} element in the current position
		 */
		getElement: function()
		{
			return dataStore[pos];
		},

		/**
		 * Method to determine if list contains an element
		 *
		 * @function	contains
		 * @memberof	list
		 *
		 * @param		{mixed} element - The element to verify if in list
		 *
		 * @returns		{boolean}
		 */
		contains: function(element)
		{
			if (find(element) > -1)
			{
				return true;
			}

			return false;
		}
	};

}());

// Source: ./src/queue.js
/**
 *  @namespace	queue
 */

/*jshint unused:false */

var queue = (function(){

	/** @property	{Array} dataStore - an array of elements comprising a queue  */
	var dataStore = [];

	return {

		/**
		 * Method to queue an element to the queue
		 *
		 * @param {mixed} element being added to queue
		 *
		 * @function	enqueue
		 * @memberof	queue
		 *
		 */
		enqueue: function(element)
		{
			if (typeof element !== "undefined")
			{
				dataStore.push(element);
				return true;
			}

			return false;
		},


		/**
		 * Method to remove an element from the queue
		 *
		 * @function	dequeue
		 * @memberof	queue
		 *
		 * @returns		{boolean}
		 */
		dequeue: function()
		{
			if (dataStore.length > 0)
			{
				return dataStore.shift();
			}

			return false;
		},

		/**
		 * Method to retrieve element in front of queue
		 *
		 * @function	front
		 * @memberof	queue
		 *
		 */
		front: function()
		{
			return dataStore[0];
		},

		/**
		 * Method to retrieve element in back of queue
		 *
		 * @function	back
		 * @memberof	queue
		 *
		 */
		back: function()
		{
			return dataStore[dataStore.length - 1];
		},

		/**
		 * Method to verify if queue is empty
		 *
		 * @function	empty
		 * @memberof	queue
		 *
		 */
		empty: function()
		{
			if (dataStore.length === 0)
			{
				return true;
			}

			return false;
		},

		/**
		 * Method to retrieve queue as string with line breaks
		 *
		 * @function	toString
		 * @memberof	queue
		 *
		 * @returns		{string}
		 */
		toString: function()
		{
			var string = "";

			for (var i = 0; i < dataStore.length; ++i)
			{
				string += dataStore[i] + "\n";
			}

			return string;
		},
	};
}());
// Source: ./src/set.js
/**
 *  @namespace	set
 */

/*jshint unused:false */

var set = (function(){

	/** @property	{Array} items - an object values comprising a set  */
	var	items = {};

	/**
	 * Private utility method to determine if value exists in the set
	 *
	 * @function	exists
	 * @memberof	set
	 *
	 * @param		{mixed} element - The element being appended to the set
	 *
	 */
	function exists(value)
	{
		return items.hasOwnProperty(value);
	}

	return {

		/**
		 * Method to add value to set
		 *
		 * @function	add
		 * @memberof	set
		 *
		 * @param		{mixed} value - value being added to the set
		 *
		 * @return		{boolean}
		 *
		 */
		add: function(value)
		{
			if (!exists(value))
			{
				items[value] = value;
				return true;
			}

			return false;
		},

		/**
		 * Method to remove value from set
		 *
		 * @function	remove
		 * @memberof	set
		 *
		 * @param		{mixed} value - value being removed from the set
		 *
		 * @returns	{boolean}
		 */
		remove: function(value)
		{
			if (exists(value))
			{
				delete items[value];
				return true;
			}

			return false;
		},

		/**
		 * Method to verify if a value is in the set
		 *
		 * @function	has
		 * @memberof	set
		 *
		 * @param		{mixed} value - value to test if exists in set
		 *
		 * @returns	{boolean}
		 */
		has: function(value)
		{
			return exists(value);
		},

		/**
		 * Method to clear all values from the set
		 *
		 * @function	clear
		 * @memberof	set
		 *
		 * @returns	{boolean}
		 */
		clear: function()
		{
			items = {};
			return true;
		},

		/**
		 * Method to get current size of set
		 *
		 * @function	size
		 * @memberof	set
		 *
		 * @returns	{integer} number of values in set
		 */
		size: function()
		{
			var count = 0;

			for (var prop in items)
			{
				if (items.hasOwnProperty(prop))
				{
					++count;
				}
			}

			return count;
		},

		/**
		 * Method to retrieve all values in the set
		 *
		 * @function	values
		 * @memberof	set
		 *
		 * @returns	{object} values from the set
		 *
		 */
		values: function()
		{
			var keys = {};

			for (var key in items)
			{
				keys.push(key);
			}

			return keys;
		},

		/**
		 * Method to retrieve all values in the set
		 *
		 * @function	union
		 * @memberof	set
		 *
		 * @returns		{object} values from the set
		 *
		 */
		union: function()
		{

		},

		/**
		 * Method to retrieve all values in the set
		 *
		 * @function	intersection
		 * @memberof	set
		 *
		 * @returns		{object} values from the set
		 *
		 */
		intersection: function()
		{

		},

		/**
		 * Method to retrieve all values in the set
		 *
		 * @function	difference
		 * @memberof	set
		 *
		 * @returns		{object} values from the set
		 *
		 */
		difference: function()
		{

		},

		/**
		 * Method to retrieve all values in the set
		 *
		 * @function	subset
		 * @memberof	set
		 *
		 * @returns	{object} values from the set
		 *
		 */
		subset: function()
		{

		}

	};

}());
// Source: ./src/stack.js
/**
 *  @namespace	stack
 */

/*jshint unused:false */

var stack = (function(){

	/** @property	{integer} top -  */
	var top = 0,

	/** @property	{Array} dataStore - an array of elements comprising a stack  */
		dataStore = [];

	return {

		/**
		 * Method to reset stack.
		 *
		 * @function	clear
		 * @memberof	stack
		 *
		 */
		clear: function()
		{
			top = 0;
			return true;
		},

		/**
		 * Method to get instance of last element put on stack
		 *
		 * @function	peek
		 * @memberof	stack
		 *
		 * @returns		{element}
		 */
		peek: function()
		{
			return dataStore[top - 1];
		},

		/**
		 * Method to remove last element put on stack
		 *
		 * @function	pop
		 * @memberof	stack
		 *
		 * @returns		{element}
		 */
		pop: function()
		{
			return dataStore[--top];
		},

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
		push: function(element)
		{
			if (typeof element !== "undefined")
			{
				dataStore[top++] = element;
				return true;
			}

			return false;
		},

		/**
		 * Method to get current number of elements in the stack
		 *
		 * @function	length
		 * @memberof	stack
		 *
		 * @returns		{integer} number of elements in the stack
		 */
		length: function()
		{
			return top;
		}
	};

}());
// Source: ./src/jatasets.js
if (!Object.create)
{
	Object.create = function (o)
	{
		if (arguments.length > 1)
		{
			throw new Error ( 'Object.create implementation only accepts the first parameter.' );
		}

		function F () {} F.prototype = o;

		return new F();
	};
}


var jataSets = (function(){

	return {

		dictionary: function()
		{
			return Object.create(dictionary);
		},

		list: function()
		{
			return Object.create(list);
		},

		queue: function()
		{
			return Object.create(queue);
		},

		set: function()
		{
			return Object.create(set);
		},

		stack: function()
		{
			return Object.create(stack);
		}

	};

}());

module.exports = exports = jataSets;
},{}]},{},[]);
