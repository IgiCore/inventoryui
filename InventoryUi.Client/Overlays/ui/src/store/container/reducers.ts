import { ContainerState, ContainerActionTypes, ADD_CONTAINER } from './types';

const initialState: ContainerState = {
	containers: []
};

export function containerReducer(state: ContainerState = initialState, action: ContainerActionTypes): ContainerState {
	switch (action.type) {
		case ADD_CONTAINER:
			return {
				containers: [...state.containers, action.payload]
			};
		default:
			return state;
	}
}
