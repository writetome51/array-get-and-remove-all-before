"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveAllAfterFirst_1 = require("./getAndRemoveAllAfterFirst");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1
var removed = getAndRemoveAllAfterFirst_1.getAndRemoveAllAfterFirst(10, arr);
if (removed.length === 20 && removed[0] === 1 && removed[9] === 10 &&
    removed[19] === 10)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2
if (arr.length === 10 && arr[0] === 1 && arr[9] === 10)
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removed = getAndRemoveAllAfterFirst_1.getAndRemoveAllAfterFirst(5, arr);
if (removed.length === 25 && removed[0] === 6 && removed[14] === 10 &&
    removed[24] === 10)
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4
if (arr.length === 5 && arr[0] === 1 && arr[4] === 5)
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5: if value isn't in array, should trigger error:
var errorTriggered = false;
try {
    getAndRemoveAllAfterFirst_1.getAndRemoveAllAfterFirst('', arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6: if second argument isn't array, should trigger error:
errorTriggered = false;
try {
    getAndRemoveAllAfterFirst_1.getAndRemoveAllAfterFirst('', 'hello everybody!!!');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7: if first arg is not primitive or array, should trigger error:
errorTriggered = false;
try {
    getAndRemoveAllAfterFirst_1.getAndRemoveAllAfterFirst({}, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
