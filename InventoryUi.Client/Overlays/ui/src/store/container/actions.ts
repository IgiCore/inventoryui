import { IInventory } from '../../components/Inventory';
import { ADD_CONTAINER, REMOVE_CONTAINER, ContainerActionTypes } from './types'

export function addContainer(container: IInventory): ContainerActionTypes {
	return {
		type: ADD_CONTAINER,
		payload: container
	}
}

export function removeContainer(id: string): ContainerActionTypes {
	return {
		type: REMOVE_CONTAINER,
		id: id
	}
}
