import { IInventory } from '../../components/Inventory';
import { ADD_CONTAINER, ContainerActionTypes } from './types'

export function addContainer(container: IInventory): ContainerActionTypes {
	return {
		type: ADD_CONTAINER,
		payload: container
	}
}
