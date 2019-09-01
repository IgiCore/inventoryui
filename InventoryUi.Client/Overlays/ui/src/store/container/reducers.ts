import { ContainerState, ContainerActionTypes, ADD_CONTAINER, REMOVE_CONTAINER } from './types';

const initialState: ContainerState = {
	containers: []
};

export function containerReducer(state: ContainerState = initialState, action: ContainerActionTypes): ContainerState {
	switch (action.type) {
		case ADD_CONTAINER:
			return {
				containers: [...state.containers, action.payload]
			};
		case REMOVE_CONTAINER:
			return {
				containers: state.containers.filter((c) => c.Id !== action.id)
			}
		default:
			return state;
	}
}
