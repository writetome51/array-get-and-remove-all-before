import { _getAndRemoveAllBefore_or_AfterFirst }
	from '@writetome51/array-get-and-remove-all-before-or-after/_getAndRemoveAllBefore_or_AfterFirst';


// value cannot be object.

export function getAndRemoveAllBeforeFirst(value: any, array): any[] {
	return _getAndRemoveAllBefore_or_AfterFirst(value, 'before', array);
}