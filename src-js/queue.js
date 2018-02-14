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
