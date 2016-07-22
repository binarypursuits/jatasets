/**
 * JavaScript hash this.table object use to store key, value
 * pairs, where as the key is hashed to store and retrieve a
 * particular element.
 *
 * @class hash
 * @main jatasets
 */

/*jshint unused:false */

'use strict';

/**
* Method to get instance of last element put on stack
*
* @method	ValuePair
*
* @param   {string}  [key] index value to hash
* @param   {mixed}   [value] item being stored
*
* @return {void}
*/
function ValuePair(key, value){
	this.key = key;
	this.value = value;

	this.toString = function()
	{
		return '[' + this.key + ' - ' + this.value + ']';
	};
}

/**
 *  Access point to hash object
 *
 *  @constructor
 */
function Hash() {

	/** @property	{Array} [this.table] array comprising the hash this.table key/value pairs */
    this.table = [];

	/**
	 * 
	 * @param {type} key
	 * @return {Number/hash.djb2HashCode.hash.djb2HashCode.hash/Number.djb2HashCode.hash/key@call;charCodeAt.djb2HashCode.hash}
	 */
	this.hashCode = function(key)
	{
        return this.djb2HashCode(key);
    };
	
	/**
	 * 
	 * @param {type} key
	 * @return {hash.djb2HashCode.hash.djb2HashCode.hash/Number.djb2HashCode.hash/key@call;charCodeAt.djb2HashCode.hash/Number}
	 */
	this.djb2HashCode = function (key)
	{ 
	  var hash = 5381;
	  
		for (var i = 0; i < key.length; i++)
	  { 
		hash = hash * 33 + key.charCodeAt(i);
	  } 
	  
	  return hash % 1013;
	}; 
}

/**
 * 
 * @param {type} key
 * @param {type} value
 * @return {undefined}
 */
Hash.prototype.put = function(key, value){
	var position = this.hashCode(key);

	if (this.table[position] === "undefined")
	{
		this.table[position] = new ValuePair(key, value);
	}
	else
	{
		var index = ++position;

		while (this.table[index] !== "undefined")
		{
			index++;
		}

		this.table[index] = new ValuePair(key, value);
	}
};

/**
 * 
 * @param {type} key
 * @return {hash.ValuePair.value/undefined.value}
 */
Hash.prototype.get = function(key)
{
	var position = this.hashCode(key);

	if (this.table[position] !== "undefined")
	{
		if (this.table[position].key === key)
		{
			return this.table[position].value;
		}
		else
		{
			var index = ++position;
			while (this.table[index] === "undefined" || this.table[index].key !== key)
			{
				index++;
			}

			if (this.table[index].key === key)
			{
				return this.table[index].value;
			}
		}
	}

	return undefined;
};

/**
 * 
 * @param {type} key
 * @return {undefined}
 */
Hash.prototype.remove = function(key)
{
	var position = this.hashCode(key);

	if (this.table[position] !== "undefined")
	{
		if (this.table[position].key === key)
		{
			this.table[position] = undefined;
		}
		else
		{
			var index = ++position;
			while (this.table[index] === undefined || this.table[index].key !== key)
			{
				index++;
			}

			if (this.table[index].key === key)
			{
				this.table[index] = undefined;
			}
		}
	}
};

/**
 * 
 * @return {undefined}
 */
Hash.prototype.print = function()
{
	for (var i = 0; i < this.table.length; ++i)
	{
		if (this.table[i] !== undefined)
		{
			console.log(i + ' -> ' + this.table[i].toString());
		}
	}
};


exports.create = function() {
	return new Hash();
};