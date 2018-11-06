"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _getAndRemoveAllBefore_or_AfterFirst_1 = require("@writetome51/array-get-and-remove-all-before-or-after/_getAndRemoveAllBefore_or_AfterFirst");
// value cannot be object.
function getAndRemoveAllBeforeFirst(value, array) {
    return _getAndRemoveAllBefore_or_AfterFirst_1._getAndRemoveAllBefore_or_AfterFirst(value, 'before', array);
}
exports.getAndRemoveAllBeforeFirst = getAndRemoveAllBeforeFirst;
