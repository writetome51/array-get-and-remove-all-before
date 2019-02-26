# getAndRemoveAllBeforeFirst(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Removes and returns everything before the first instance of `value` in `array`.

# getAndRemoveAllBeforeLast(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Removes and returns everything before the last instance of `value` in `array`.


## Examples:
```
let arr = [3,4,5,6,7,8,9,6,7];   
let removed = getAndRemoveAllBeforeFirst(6, arr);  
removed is now [3,4,5].  
arr is now [6,7,8,9,6,7].

let arr = [1,2,3,4,5,1,6,7,8,9];   
let removed = getAndRemoveAllBeforeLast(1, arr);  
removed is now [1,2,3,4,5].  
arr is now [1,6,7,8,9].
```

## Installation
`npm i  @writetome51/array-get-and-remove-all-before`

## Loading
``
// if using TypeScript:
import {getAndRemoveAllBeforeFirst, getAndRemoveAllBeforeLast}    
	from '@writetome51/array-get-and-remove-all-before';

// if using ES5 JavaScript:
var getAndRemoveAllBeforeFirst = 
	require('@writetome51/array-get-and-remove-all-before').getAndRemoveAllBeforeFirst ;
var getAndRemoveAllBeforeLast = 
	require('@writetome51/array-get-and-remove-all-before').getAndRemoveAllBeforeLast;
``

