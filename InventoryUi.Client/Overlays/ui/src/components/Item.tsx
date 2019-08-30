import React from 'react';
import './Item.scss';

export interface IItem {
	Id: string;
	ContainerId: string,
	Name: string;
	Image: string;
	Weight: number;
	X: number;
	Y: number;
	Width: number;
	Height: number;
}

export const Item: React.FC<IItem> = (props) => {
	return (
		<div className='item' style={{
			gridRowStart: props.Y + 1,
			gridColumnStart: props.X + 1,
			gridRowEnd: props.Y + 1 + props.Height,
			gridColumnEnd: props.X + 1 + props.Width,
			backgroundImage: `url('${props.Image.replace("'", "\\'")}')`
		}}></div>
	)
};
