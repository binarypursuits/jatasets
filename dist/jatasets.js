(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * JataSets module.
 * @module jatasets
 */

'use strict';

const dictionary = require('./src/dictionary');
const queue = require('./src/queue');
const list = require('./src/list');
const jataset = require('./src/jataset');
const stack = require('./src/stack');

/**
 * Create new Dictionary dataset object and return.
 *
 * @module jatasets
 * @submodule dictionary
 */
exports.dictionary = function() {
	return dictionary.create();
};

/**
 * Create new Queue dataset object and return.
 *
 * @module jatasets
 * @submodule queue
 */
exports.queue = function() {
	return queue.create();
};

/**
 * Create new List dataset object and return.
 *
 * @module jatasets
 * @submodule list
 */
exports.list = function() {
	return list.create();
};

/**
 * Create new Set dataset object and return.
 *
 * @module jatasets
 * @submodule set
 */
exports.jataset = function() {
	return jataset.create();
};

/**
 * Create new Stack dataset object and return.
 *
 * @module jatasets
 * @submodule stack
 */
exports.stack = function() {
	return stack.create();
};

},{"./src/dictionary":2,"./src/jataset":3,"./src/list":4,"./src/queue":5,"./src/stack":6}],2:[function(require,module,exports){
/**
 * JavaScript data structure object use to store key, value
 * pairs, where as the key is used to store and retrieve a
 * particular element.
 *
 * @class Dictionary
 * @main jatasets
 */

'use strict';

/**
 *  Creates a new Dictionary
 *
 *  @constructor
 */
const Dictionary = function ()
{
    /** @property	{Object} [dataStore] array comprising the dictionary */
    let dataStore = {};

    /** @property	{integer} [total] current total number of items in the dictionary */
    let total = 0;

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
    this.add = function (key, value)
    {
        if (typeof value !== "undefined")
        {
            dataStore[key] = value;
            total++;
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
    this.remove = function (key)
    {
        if (typeof dataStore[key] !== "undefined")
        {
            delete dataStore[key];
            total--;
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
    this.find = function (key)
    {
        if (typeof dataStore[key] !== "undefined")
        {
            return dataStore[key];
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
    this.count = function ()
    {
        return total;
    };

    /**
     * Method to clear all values from dictionary
     *
     * @method	clear
     *
     * @return		{boolean}
     */
    this.clear = function ()
    {
        dataStore = {};
        total = 0;
        return true;
    };

    /**
     * Method to array of indexes
     *
     * @method	getIndexArray
     *
     * @return	{array}
     */
    this.getIndexArray = function ()
    {
        let items = [];

        for (let index in dataStore)
        {
            items.push(index);
        }

        return items;
    };

};

exports.create = function () {
    return new Dictionary();
};


},{}],3:[function(require,module,exports){
/**
 * JavaScript data structure object representing a collection of
 * unordered, unique elements.  The data structure is similar to
 * the mathematical concept of finite sets, but instead applied
 * as a JavaScript object.  A set should be viewed as an array
 * with no repeated elements and with no concept or order.
 *
 * The purpose of the Set object is to provide developers a tool
 * to manage both individual sets by adding and removing elements,
 * but a means to run comparison operations against two Set objects.
 *
 * @class JataSet
 * @main jatasets
 */

'use strict';

/**
 *  Creates a new Set Object
 *  @constructor
 */
const JataSet = function () {

    /** @property	{Object} items - an object values comprising a set  */
    let items = {};

    /**
     * Private utility method to determine if value exists in the set
     *
     * @private
     * @method	exists
     *
     * @param {Mixed} [element] The element being appended to the set
     * @return {Mixed}
     */
    function exists(value)
    {
        return items.hasOwnProperty(value);
    }

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
    this.add = function (value)
    {
        if (!exists(value))
        {
            items[value] = value;
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
    this.remove = function (value)
    {
        if (exists(value))
        {
            delete items[value];
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
    this.has = function (value)
    {
        return exists(value);
    };

    /**
     * Method to clear all values from the set
     *
     * @method	clear
     *
     * @return	{Boolean}
     */
    this.clear = function ()
    {
        items = {};
        return true;
    };

    /**
     * Method to get current size of set
     *
     * @method	size
     *
     * @return	{integer} number of values in set
     */
    this.size = function ()
    {
        let count = 0;

        for (let prop in items)
        {
            if (items.hasOwnProperty(prop))
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
    this.values = function ()
    {
        if (!Object.keys)
        {
            Object.keys = function (items)
            {
                let keys = [];

                for (let key in items)
                {
                    keys.push(key);
                }

                return keys;
            };
        } else
        {
            return Object.keys(items);
        }
    };

    /**
     * Method to retrieve all values in the set
     *
     * @method	union
     *
     * @return	{object} values from the set
     *
     */
    this.union = function (compareSet)
    {
        let unionSet = new JataSet();

        let values = this.values();
        let length = values.length;

        for (let i = 0; i < length; i++)
        {
            unionSet.add(values[i]);
        }

        values = compareSet.values();
        length = compareSet.length;

        for (let i = 0; i < length; i++)
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
    this.intersection = function (compareSet)
    {
        let intersectionSet = new JataSet();

        let values = this.values();
        let length = values.length;

        for (let i = 0; i < length; i++)
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
    this.difference = function (compareSet)
    {
        let differenceSet = new JataSet();

        let values = this.values();
        let length = values.length;

        for (let i = 0; i < length; i++)
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
    this.subset = function (compareSet)
    {
        if (this.size() > compareSet.size())
        {
            return false;
        } else
        {
            let values = this.values();
            let length = values.length;

            for (let i = 0; i < length; i++)
            {
                if (!compareSet.has(values[i]))
                {
                    return false;
                }
            }

            return true;
        }
    };

};

exports.create = function () {
    return new JataSet();
};
},{}],4:[function(require,module,exports){
/**
 * Creates a new List Data object
 *
 * @class List
 * @main jatasets
 */

'use strict';

/**
 *  Creates a new List Object
 *  @constructor
 */
const List = function () {

    /** @property	{Integer} listSize Length of current list */
    let listSize = 0;

    /** @property	{Integer} pos Current position in list */
    let pos = 0;

    /** @property	{Array} dataStore An array of elements comprising a list  */
    let dataStore = [];

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
    function append(element)
    {
        dataStore[listSize++] = element;
        return true;
    }

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
    function find(element)
    {
        for (let i = 0; i < dataStore.length; ++i)
        {
            if (dataStore[i] === element)
            {
                return i;
            }
        }

        return -1;
    }


    /**
     * Method to reset list.
     *
     * @method	clear
     *
     * @return {Boolean}
     */
    this.clear = function ()
    {
        dataStore = [];
        listSize = pos = 0;
        return true;
    };

    /**
     * Method to retrieve list as comma seperate string
     *
     * @method	toString
     *
     * @return	{String} list as comma serperate string
     */
    this.toString = function ()
    {
        return dataStore.join(',');
    };

    /**
     * Method to retrieve list as JSON string
     *
     * @memberof toJson
     *
     * @return {String}
     */
    this.toJson = function ()
    {
        return JSON.stringify(dataStore);
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
    this.add = function (element)
    {
        if (typeof element !== "undefined")
        {
            append(element);
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
    this.insert = function (element, after)
    {
        let position = find(after);
        if (typeof element !== "undefined" && position > -1)
        {
            dataStore.splice(position + 1, 0, element);
            ++listSize;
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
    this.remove = function (element)
    {
        let position = find(element);

        if (position > -1)
        {
            dataStore.splice(position, 1);
            --listSize;
            return true;
        }

        return false;
    };

    /**
     * Method to move current position to the beginning of the list
     *
     * @method	front
     *
     * @return {Integer}
     */
    this.front = function ()
    {
        pos = 0;
        return pos;
    };

    /**
     * Method to move current position to the end of the list
     *
     * @method	end
     *
     * @return {Integer}
     */
    this.end = function ()
    {
        pos = listSize - 1;
        return pos;
    };

    /**
     * Method to move current position in list to previous element
     *
     * @method	prev
     *
     * @return {Integer|Boolean}
     */
    this.prev = function ()
    {
        if (pos > 0)
        {
            --pos;
            return pos;
        }

        return false;
    };

    /**
     * Method to move current position in list to next element
     *
     * @method	next
     *
     * @return {integer|boolean}
     */
    this.next = function ()
    {
        if (pos < (listSize - 1))
        {
            ++pos;
            return pos;
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
    this.length = function ()
    {
        return listSize;
    };

    /**
     * Method to get current position in the list
     *
     * @method	current
     *
     * @return		{integer} current possition in th elist
     */
    this.current = function ()
    {
        return pos;
    };

    /**
     * Method to move current position in the list to specific position
     * and validating the position provided
     *
     * @method	move
     *
     * @param   {integer} position - The position to move to in the list
     *
     * @return  {boolean}
     */
    this.move = function (position)
    {
        if (position > 0 && position < (listSize - 1))
        {
            pos = position;
            return true;
        }

        return false;
    };

    /**
     * Method to get element at current position in the list
     *
     * @method	getElement
     *
     * @return	{mixed} element in the current position
     */
    this.getElement = function ()
    {
        return dataStore[pos];
    };

    /**
     * Method to determine if list contains an element
     *
     * @method	contains
     *
     * @param	{mixed} element - The element to verify if in list
     *
     * @return	{boolean}
     */
    this.contains = function (element)
    {
        if (find(element) > -1)
        {
            return true;
        }

        return false;
    };

};

exports.create = function () {
    return new List();
};
},{}],5:[function(require,module,exports){
/**
 * Creates a new Queue Data object
 *
 * @class Queue
 * @main jatasets
 */

'use strict';

/**
 *  Creates a new Queue
 *  @constructor
 */
const Queue = function () {

    /** @property	{Array} dataStore An array of elements comprising a Queue  */
    let dataStore = [];

    /** @property	{integer} total Total elements comprising a Queue  */
    let total = 0;

    /** @property	{integer} ticket Current ticket number to issue  */
    let ticket = 0;

    /**
     * Method to Queue an element to the Queue
     *
     * @method	enqueue
     *
     * @param	{Mixed} element being added to Queue
     *
     * @return	{Mixed}
     */
    this.enqueue = function (element)
    {
        if (typeof element !== "undefined")
        {
            dataStore.push(element);
            total++;
            ticket++;
            return ticket;
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
    this.dequeue = function ()
    {
        if (dataStore.length > 0)
        {
            total--;
            return dataStore.shift();
        }

        return false;
    };

    /**
     * Method to retrieve element in front of Queue
     *
     * @method	front
     *
     */
    this.front = function ()
    {
        if (dataStore.length >= 1)
        {
            return dataStore[0];
        } else
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
    this.back = function ()
    {
        return dataStore[dataStore.length - 1];
    };

    /**
     * Method to verify if Queue is empty
     *
     * @method	empty
     *
     */
    this.empty = function ()
    {
        if (dataStore.length === 0)
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
    this.toString = function ()
    {
        let string = "";

        for (let i = 0; i < dataStore.length; ++i)
        {
            string += dataStore[i] + "\n";
        }

        return string;
    };


};

exports.create = function () {
    return new Queue();
};

},{}],6:[function(require,module,exports){
/**
 * Creates a new Stack Data object
 *
 * @class Stack
 * @main jatasets
 */

'use strict';

/**
 *  Creates a new Stack Object
 *  @constructor
 */
const Stack = function () {

    /** @property	{Integer} top last item placed in stack and current first for removal  */
    let top = 0;

    /** @property	{Array} dataStore an array of elements comprising a stack  */
    let dataStore = [];

    /**
     * Method to reset stack.
     *
     * @method	clear
     *
     * @return {Boolean}
     */
    this.clear = function ()
    {
        top = 0;
        return true;
    };

    /**
     * Method to get instance of last element put on stack
     *
     * @method	peek
     *
     * @return	{Mixed} last item placed on stack
     */
    this.peek = function ()
    {
        if (top > 0)
        {
            return dataStore[top - 1];
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
    this.pop = function ()
    {
        return dataStore[--top];
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
    this.push = function (element)
    {
        if (typeof element !== "undefined")
        {
            dataStore[top++] = element;
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
    this.length = function ()
    {
        return top;
    };


};

exports.create = function () {
    return new Stack();
};
},{}]},{},[1]);
