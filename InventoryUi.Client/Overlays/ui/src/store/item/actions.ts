import { IItem } from '../../components/Item';
import { ADD_ITEM, MOVE_ITEM, ItemActionTypes } from './types'

export function addItem(item: IItem): ItemActionTypes {
	return {
		type: ADD_ITEM,
		payload: item
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
