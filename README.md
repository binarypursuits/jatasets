#Index

**Modules**

* [jatasets](#module_jatasets)
  * [jatasets.dictionary()](#module_jatasets.dictionary)
  * [jatasets.queue()](#module_jatasets.queue)
  * [jatasets.list()](#module_jatasets.list)
  * [jatasets.set()](#module_jatasets.set)
  * [jatasets.stack()](#module_jatasets.stack)

**Classes**

* [class: Dictionary](#Dictionary)
  * [new Dictionary()](#new_Dictionary)
  * [dictionary.dataStore](#Dictionary#dataStore)
  * [dictionary.total](#Dictionary#total)
  * [dictionary.add([key], [value])](#Dictionary#add)
  * [dictionary.remove([key])](#Dictionary#remove)
  * [dictionary.find([key])](#Dictionary#find)
  * [dictionary.showAll()](#Dictionary#showAll)
  * [dictionary.count()](#Dictionary#count)
  * [dictionary.clear()](#Dictionary#clear)
* [class: List](#List)
  * [new List()](#new_List)
  * [list.listSize](#List#listSize)
  * [list.pos](#List#pos)
  * [list.dataStore](#List#dataStore)
  * [list.clear()](#List#clear)
  * [list.toString()](#List#toString)
  * [list.toJson()](#List#toJson)
  * [list.insert([element], [after])](#List#insert)
  * [list.remove([element])](#List#remove)
  * [list.front()](#List#front)
  * [list.end()](#List#end)
  * [list.prev()](#List#prev)
  * [list.next()](#List#next)
  * [list.length()](#List#length)
  * [list.current()](#List#current)
  * [list.move()](#List#move)
  * [list.getElement()](#List#getElement)
  * [list.contains(element)](#List#contains)
* [class: Queue](#Queue)
  * [new Queue()](#new_Queue)
  * [queue.dataStore](#Queue#dataStore)
  * [queue.total](#Queue#total)
  * [queue.ticket](#Queue#ticket)
* [class: Set](#Set)
  * [new Set()](#new_Set)
  * [set.items](#Set#items)
* [class: Stack](#Stack)
  * [new Stack()](#new_Stack)
  * [stack.top](#Stack#top)
  * [stack.dataStore](#Stack#dataStore)

**Namespaces**

* [jatasets](#jatasets)
* [jatasets](#jatasets)
* [jatasets](#jatasets)
* [jatasets](#jatasets)
* [jatasets](#jatasets)

**Functions**

* [create()](#create)
* [create()](#create)
 
<a name="module_jatasets"></a>
#jatasets
JataSets module.

**Members**

* [jatasets](#module_jatasets)
  * [jatasets.dictionary()](#module_jatasets.dictionary)
  * [jatasets.queue()](#module_jatasets.queue)
  * [jatasets.list()](#module_jatasets.list)
  * [jatasets.set()](#module_jatasets.set)
  * [jatasets.stack()](#module_jatasets.stack)

<a name="module_jatasets.dictionary"></a>
##jatasets.dictionary()
Create new Dictionary dataset object and return.

<a name="module_jatasets.queue"></a>
##jatasets.queue()
Create new Queue dataset object and return.

<a name="module_jatasets.list"></a>
##jatasets.list()
Create new List dataset object and return.

<a name="module_jatasets.set"></a>
##jatasets.set()
Create new Set dataset object and return.

<a name="module_jatasets.stack"></a>
##jatasets.stack()
Create new Stack dataset object and return.

<a name="Dictionary"></a>
#class: Dictionary
**Members**

* [class: Dictionary](#Dictionary)
  * [new Dictionary()](#new_Dictionary)
  * [dictionary.dataStore](#Dictionary#dataStore)
  * [dictionary.total](#Dictionary#total)
  * [dictionary.add([key], [value])](#Dictionary#add)
  * [dictionary.remove([key])](#Dictionary#remove)
  * [dictionary.find([key])](#Dictionary#find)
  * [dictionary.showAll()](#Dictionary#showAll)
  * [dictionary.count()](#Dictionary#count)
  * [dictionary.clear()](#Dictionary#clear)

<a name="new_Dictionary"></a>
##new Dictionary()
Creates a new Dictionary

<a name="Dictionary#dataStore"></a>
##dictionary.dataStore
**Properties**

- dataStore `Array` - array comprising the dictionary  

<a name="Dictionary#total"></a>
##dictionary.total
**Properties**

- total `integer` - current total number of items in the dictionary  

<a name="Dictionary#add"></a>
##dictionary.add([key], [value])
Method to get instance of last element put on stack

**Params**

- \[key\] `string` - index value to store value under  
- \[value\] `mixed` - item being stored  

**Returns**: `boolean`  
<a name="Dictionary#remove"></a>
##dictionary.remove([key])
Method to remove item from the dictionary

**Params**

- \[key\] `string` - index of item to be removed  

**Returns**: `boolean`  
<a name="Dictionary#find"></a>
##dictionary.find([key])
Method to retrieve value from dictionary using the key

**Params**

- \[key\] `string` - index search for in dictionary  

**Returns**: `mixed` - return item if successful and false if key is not valid  
<a name="Dictionary#showAll"></a>
##dictionary.showAll()
Method to get string representation of valuesin dictionary

**Returns**: `string`  
<a name="Dictionary#count"></a>
##dictionary.count()
Method to get current number of items in dictionary

**Returns**: `integer`  
<a name="Dictionary#clear"></a>
##dictionary.clear()
Method to clear all values from dictionary

**Returns**: `boolean`  
<a name="List"></a>
#class: List
**Members**

* [class: List](#List)
  * [new List()](#new_List)
  * [list.listSize](#List#listSize)
  * [list.pos](#List#pos)
  * [list.dataStore](#List#dataStore)
  * [list.clear()](#List#clear)
  * [list.toString()](#List#toString)
  * [list.toJson()](#List#toJson)
  * [list.insert([element], [after])](#List#insert)
  * [list.remove([element])](#List#remove)
  * [list.front()](#List#front)
  * [list.end()](#List#end)
  * [list.prev()](#List#prev)
  * [list.next()](#List#next)
  * [list.length()](#List#length)
  * [list.current()](#List#current)
  * [list.move()](#List#move)
  * [list.getElement()](#List#getElement)
  * [list.contains(element)](#List#contains)

<a name="new_List"></a>
##new List()
Creates a new Dictionary

<a name="List#listSize"></a>
##list.listSize
**Properties**

- listSize `integer` - length of current list  

<a name="List#pos"></a>
##list.pos
**Properties**

- pos `integer` - Current this.position in list  

<a name="List#dataStore"></a>
##list.dataStore
**Properties**

- dataStore `Array` - an array of elements comprising a list  

<a name="List#clear"></a>
##list.clear()
Method to reset list.

**Returns**: `boolean`  
<a name="List#toString"></a>
##list.toString()
Method to retrieve list as comma seperate string

**Returns**: `string` - list as comma serperate string  
<a name="List#toJson"></a>
##list.toJson()
Method to retrieve list as JSON string

**Returns**: `string`  
<a name="List#insert"></a>
##list.insert([element], [after])
Method to insert element after another element

**Params**

- \[element\] `mixed` - The element you wish to place  
- \[after\] `mixed` - The element you wish to place after  

**Returns**: `boolean`  
<a name="List#remove"></a>
##list.remove([element])
Method to remove element from list

**Params**

- \[element\] `mixed` - The element to be removed  

**Returns**: `boolean`  
<a name="List#front"></a>
##list.front()
Method to move current this.position to the beginning of the list

**Returns**: `integer`  
<a name="List#end"></a>
##list.end()
Method to move current this.position to the end of the list

**Returns**: `integer`  
<a name="List#prev"></a>
##list.prev()
Method to move current this.position in list to previous element

**Returns**: `integer` | `boolean`  
<a name="List#next"></a>
##list.next()
Method to move current this.position in list to next element

**Returns**: `integer` | `boolean`  
<a name="List#length"></a>
##list.length()
Method to get current number of elements in the list

**Returns**: `integer` - number of elements in the list  
<a name="List#current"></a>
##list.current()
Method to get current this.position in the list

**Returns**: `integer` - current this.possition in th elist  
<a name="List#move"></a>
##list.move()
Method to move current this.position in the list to specific this.positionand validating the this.position provided

**Params**

  - position `integer` - The this.position to move to in the list  

**Returns**: `boolean`  
<a name="List#getElement"></a>
##list.getElement()
Method to get element at current this.position in the list

**Returns**: `mixed` - element in the current this.position  
<a name="List#contains"></a>
##list.contains(element)
Method to determine if list contains an element

**Params**

- element `mixed` - The element to verify if in list  

**Returns**: `boolean`  
<a name="Queue"></a>
#class: Queue
**Members**

* [class: Queue](#Queue)
  * [new Queue()](#new_Queue)
  * [queue.dataStore](#Queue#dataStore)
  * [queue.total](#Queue#total)
  * [queue.ticket](#Queue#ticket)

<a name="new_Queue"></a>
##new Queue()
Creates a new Queue

<a name="Queue#dataStore"></a>
##queue.dataStore
**Properties**

- dataStore `Array` - an array of elements comprising a Queue  

<a name="Queue#total"></a>
##queue.total
**Properties**

- total `integer` - total elements comprising a Queue  

<a name="Queue#ticket"></a>
##queue.ticket
**Properties**

- ticket `integer` - current ticket number to issue  

<a name="Set"></a>
#class: Set
**Members**

* [class: Set](#Set)
  * [new Set()](#new_Set)
  * [set.items](#Set#items)

<a name="new_Set"></a>
##new Set()
Creates a new Set

<a name="Set#items"></a>
##set.items
**Properties**

- items `Array` - an object values comprising a set  

<a name="Stack"></a>
#class: Stack
**Members**

* [class: Stack](#Stack)
  * [new Stack()](#new_Stack)
  * [stack.top](#Stack#top)
  * [stack.dataStore](#Stack#dataStore)

<a name="new_Stack"></a>
##new Stack()
Creates a new Stack

<a name="Stack#top"></a>
##stack.top
**Properties**

- top `integer` - -  

<a name="Stack#dataStore"></a>
##stack.dataStore
**Properties**

- dataStore `Array` - an array of elements comprising a stack  

<a name="jatasets"></a>
#jatasets
**Members**

* [jatasets](#jatasets)

<a name="jatasets"></a>
#jatasets
**Members**

* [jatasets](#jatasets)

<a name="jatasets"></a>
#jatasets
**Members**

* [jatasets](#jatasets)

<a name="jatasets"></a>
#jatasets
**Members**

* [jatasets](#jatasets)

<a name="jatasets"></a>
#jatasets
**Members**

* [jatasets](#jatasets)

<a name="create"></a>
#create()
creates and return new Dictionary Object

<a name="create"></a>
#create()
creates and return new List Object

