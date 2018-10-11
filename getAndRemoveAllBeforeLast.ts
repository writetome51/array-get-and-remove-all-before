import { _getAndRemoveAllBefore_or_AfterLast }
	from '@writetome51/array-get-and-remove-all-before-or-after/_getAndRemoveAllBefore_or_AfterLast';


// value cannot be object.

export function getAndRemoveAllBeforeLast(value: any, array): any[] {
	return _getAndRemoveAllBefore_or_AfterLast(value, 'before', array);
}