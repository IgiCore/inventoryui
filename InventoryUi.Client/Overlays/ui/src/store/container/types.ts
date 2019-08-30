import { IInventory } from '../../components/Inventory';

export const ADD_CONTAINER = 'ADD_CONTAINER';

export interface ContainerState {
	containers: IInventory[]
}

interface AddContainerAction {
	type: typeof ADD_CONTAINER
	payload: IInventory
}

export type ContainerActionTypes = AddContainerAction;
