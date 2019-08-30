import React from 'react';
import { IItem } from './Item';
import './Cell.scss';

export interface ICell {
	readonly X: number;
	readonly Y: number;
	Item?: IItem;
}

export const Cell: React.FC<ICell> = (props) => {
	return (
		<div className='cell' style={{gridRowStart: props.Y + 1, gridColumnStart: props.X + 1}}>{props.X}/{props.Y}</div>
	);
}
