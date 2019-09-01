import { IItem } from '../../components/Item';
import { ADD_ITEM, REMOVE_ITEM, MOVE_ITEM, ItemActionTypes } from './types'

export function addItem(item: IItem): ItemActionTypes {
	return {
		type: ADD_ITEM,
		payload: item
	}
}

export function removeItem(id: string): ItemActionTypes {
	return {
		type: REMOVE_ITEM,
		id: id
	}
}

export function moveItem(id: string, x: number, y: number): ItemActionTypes {
	return {
		type: MOVE_ITEM,
		meta: {
			id,
			x,
			y
		}
	}
}
