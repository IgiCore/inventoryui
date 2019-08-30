import { IItem } from '../../components/Item';

export const ADD_ITEM = 'ADD_ITEM';
export const MOVE_ITEM = 'MOVE_ITEM';

export interface ItemState {
	items: IItem[]
}

interface AddItemAction {
	type: typeof ADD_ITEM
	payload: IItem
}

interface MoveItemAction {
	type: typeof MOVE_ITEM
	meta: {
		id: string,
		x: number,
		y: number
	}
}

export type ItemActionTypes = AddItemAction | MoveItemAction;
