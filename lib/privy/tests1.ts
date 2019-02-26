import { getAndRemoveAllBeforeFirst } from './getAndRemoveAllBeforeFirst';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Test 1
let removed = getAndRemoveAllBeforeFirst(10, arr);
if (removed.length === 9 && removed[0] === 1 && removed[8] === 9) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2
if (arr.length === 21 && arr[0] === 10 && arr[10] === 10 && arr[20] === 10)
	console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3
arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed = getAndRemoveAllBeforeFirst(5, arr);
if (removed.length === 4 && removed[0] === 1 && removed[3] === 4) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4
if (arr.length === 26 && arr[0] === 5 && arr[4] === 9 && arr[15] === 10 && arr[25] === 10)
	console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: if value isn't in array, should trigger error:
let errorTriggered = false;
try{
	getAndRemoveAllBeforeFirst('', arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6: if second argument isn't array, should trigger error:
errorTriggered = false;
try{
	getAndRemoveAllBeforeFirst('', 'hello everybody!!!');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7: if first arg is not primitive or array, should trigger error:
errorTriggered = false;
try{
	getAndRemoveAllBeforeFirst({}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 failed');