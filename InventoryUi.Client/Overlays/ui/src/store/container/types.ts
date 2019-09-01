import { IInventory } from '../../components/Inventory';

export const ADD_CONTAINER = 'ADD_CONTAINER';
export const REMOVE_CONTAINER = 'REMOVE_CONTAINER';

export interface ContainerState {
	containers: IInventory[]
}

interface AddContainerAction {
	type: typeof ADD_CONTAINER
	payload: IInventory
}

interface RemoveContainerAction {
	type: typeof REMOVE_CONTAINER
	id: string
}

export type ContainerActionTypes = AddContainerAction | RemoveContainerAction;
