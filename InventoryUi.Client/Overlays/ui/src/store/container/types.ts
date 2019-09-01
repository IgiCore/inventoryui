import { IContainer } from '../../components/Container';

export const ADD_CONTAINER = 'ADD_CONTAINER';
export const REMOVE_CONTAINER = 'REMOVE_CONTAINER';

export interface ContainerState {
	containers: IContainer[]
}

interface AddContainerAction {
	type: typeof ADD_CONTAINER
	payload: IContainer
}

interface RemoveContainerAction {
	type: typeof REMOVE_CONTAINER
	id: string
}

export type ContainerActionTypes = AddContainerAction | RemoveContainerAction;
