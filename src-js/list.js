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