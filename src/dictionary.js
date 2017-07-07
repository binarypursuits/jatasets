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

