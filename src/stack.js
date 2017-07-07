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