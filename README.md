To include in your project:

``import {getAndRemoveAllBeforeFirst, getAndRemoveAllBeforeLast}    
from '@writetome51/array-get-and-remove-all-before';``

// removes and returns everything before the first instance of value:  
getAndRemoveAllBeforeFirst(value, array): any[]

// removes and returns everything before the last instance of value:  
getAndRemoveAllBeforeLast(value, array): any[]


Examples:

let arr = [3,4,5,6,7,8,9,6,7];   
let removed = getAndRemoveAllBeforeFirst(6, arr);  
removed is now [3,4,5].  
arr is now [6,7,8,9,6,7].

let arr = [1,2,3,4,5,1,6,7,8,9];   
let removed = getAndRemoveAllBeforeLast(1, arr);  
removed is now [1,2,3,4,5].  
arr is now [1,6,7,8,9].