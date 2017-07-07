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