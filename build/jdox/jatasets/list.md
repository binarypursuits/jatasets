# Global





* * *

## Class: List
Creates a new List Data object


## Class: List
Creates a new List Object

**listSize**:  , Creates a new List Object
**pos**:  , Creates a new List Object
**dataStore**:  , Creates a new List Object
### List.clear() 

Method to reset list.

**Returns**: `Boolean`

### List.toString() 

Method to retrieve list as comma seperate string

**Returns**: `String`, list as comma serperate string

### List.List#toJson() 

Method to retrieve list as JSON string

**Returns**: `String`

### List.add(element) 

Method to add element to list

**Parameters**

**element**: `Mixed`, The element you wish to place

**Returns**: `Boolean`

### List.insert(element, after) 

Method to insert element after another element

**Parameters**

**element**: `Mixed`, The element you wish to place

**after**: `Mixed`, The element you wish to place after

**Returns**: `Boolean`

### List.remove(element) 

Method to remove element from list

**Parameters**

**element**: `Mixed`, The element to be removed

**Returns**: `Boolean`

### List.front() 

Method to move current this.position to the beginning of the list

**Returns**: `Integer`

### List.end() 

Method to move current this.position to the end of the list

**Returns**: `Integer`

### List.prev() 

Method to move current this.position in list to previous element

**Returns**: `Integer | Boolean`

### List.next() 

Method to move current this.position in list to next element

**Returns**: `integer | boolean`

### List.length() 

Method to get current number of elements in the list

**Returns**: `integer`, number of elements in the list

### List.current() 

Method to get current this.position in the list

**Returns**: `integer`, current this.possition in th elist

### List.move(this.position) 

Method to move current this.position in the list to specific this.positionand validating the this.position provided

**Parameters**

**this.position**: `integer`, The this.position to move to in the list

**Returns**: `boolean`

### List.getElement() 

Method to get element at current this.position in the list

**Returns**: `mixed`, element in the current this.position

### List.contains(element) 

Method to determine if list contains an element

**Parameters**

**element**: `mixed`, The element to verify if in list

**Returns**: `boolean`



* * *










