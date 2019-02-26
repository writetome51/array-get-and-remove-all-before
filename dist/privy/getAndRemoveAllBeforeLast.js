"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_all_before_or_after_1 = require("@writetome51/array-get-and-remove-all-before-or-after");
// value cannot be object.
function getAndRemoveAllBeforeLast(value, array) {
    return array_get_and_remove_all_before_or_after_1._getAndRemoveAll_BeforeOrAfter_Last(value, 'before', array);
}
exports.getAndRemoveAllBeforeLast = getAndRemoveAllBeforeLast;
