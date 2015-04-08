# Global





* * *

## Class: List



## Class: List


**listSize**:  
**pos**:  
**dataStore**:  
### List.append(element) 

Private method to append an element to the list

**Parameters**

**element**: `mixed`, The element being appended to the list


### List.find(element) 

Private method to find an element in the list.  Will either returnelement index if found and false if not found.

**Parameters**

**element**: `mixed`, The element being appended to the list

**Returns**: `boolean`

### List.clear() 

Method to reset list.


### List.toString() 

Method to retrieve list as comma seperate string

**Returns**: `string`, list as comma serperate string

### List.toJson() 

Method to retrieve list as JSON string

**Returns**: `string`, list as JSON string

### List.insert(element, after) 

Method to insert element after another element

**Parameters**

**element**: `mixed`, The element you wish to place

**after**: `mixed`, The element you wish to place after

**Returns**: `boolean`

### List.remove(element) 

Method to remove element from list

**Parameters**

**element**: `mixed`, The element to be removed

**Returns**: `boolean`

### List.front() 

Method to move current this.position to the beginning of the list


### List.end() 

Method to move current this.position to the end of the list


### List.prev() 

Method to move current this.position in list to previous element


### List.next() 

Method to move current this.position in list to next element


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










