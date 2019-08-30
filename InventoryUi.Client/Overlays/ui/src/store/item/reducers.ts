import { ItemState, ItemActionTypes, ADD_ITEM, MOVE_ITEM } from './types';

const initialState: ItemState = {
	items: []
};

export function itemReducer(state: ItemState = initialState, action: ItemActionTypes): ItemState {
	switch (action.type) {
		case ADD_ITEM:
			return {
				items: [...state.items, action.payload]
			};
		case MOVE_ITEM:
			return {
				items: state.items //.filter(item => item.id !== action.meta.id)
			};
		default:
			return state;
	}
}
