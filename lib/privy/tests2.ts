import { getAndRemoveAllBeforeLast } from './getAndRemoveAllBeforeLast';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Test 1
let removed = getAndRemoveAllBeforeLast(1, arr);
if (removed.length === 20 && removed[0] === 1 && removed[9] === 10 && removed[19] === 10)
	console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2
if (arr.length === 10 && arr[0] === 1 && arr[9] === 10)
	console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed = getAndRemoveAllBeforeLast(5, arr);
if (removed.length === 24 && removed[0] === 1 && removed[13] === 4 && removed[23] === 4)
	console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4
if (arr.length === 6 && arr[0] === 5 && arr[5] === 10) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: if value isn't in array, should trigger error:
let errorTriggered = false;
try {
	getAndRemoveAllBeforeLast('', arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6: if second argument isn't array, should trigger error:
errorTriggered = false;
try {
	getAndRemoveAllBeforeLast('', 'hello everybody!!!');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7: if first arg is not primitive or array, should trigger error:
errorTriggered = false;
try {
	getAndRemoveAllBeforeLast({}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 failed');