import { ItemState, ItemActionTypes, ADD_ITEM, REMOVE_ITEM, MOVE_ITEM } from './types';

const initialState: ItemState = {
	items: []
};

export function itemReducer(state: ItemState = initialState, action: ItemActionTypes): ItemState {
	switch (action.type) {
		case ADD_ITEM:
			return {
				items: [...state.items, action.payload]
			};
		case REMOVE_ITEM:
			return {
				items: state.items.filter((i) => i.Id !== action.id)
			}
		case MOVE_ITEM:
			return {
				items: state.items //.filter(item => item.id !== action.meta.id)
			};
		default:
			return state;
	}
}
