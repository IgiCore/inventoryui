import React from 'react';
import { ICell, Cell } from './Cell';
import { IItem, Item } from './Item';
import "./Container.scss";

export interface IContainer {
	Id: string;
	Name: string;
	Width: number;
	Height: number;
	MaxWeight: number;
	Items: IItem[];
}

interface IState {
	Weight: number;
	Cells: ICell[][];
}

export class Container extends React.Component<IContainer, IState> {
	constructor(props: IContainer) {
		super(props);

		let cells: ICell[][] = [];
		for (let c = 0; c < this.props.Width; c++) {
			cells[c] = [];

			for (let r = 0; r < this.props.Height; r++) {
				cells[c][r] = {
					X: c,
					Y: r,
					Item: undefined
				};
			}
		}

		this.props.Items.forEach(item => {
			const xStart = item.X;
			const yStart = item.Y;
			const xEnd = xStart + item.Width;
			const yEnd = yStart + item.Height;

			for (let x = xStart; x < xEnd; x++) {
				for (let y = yStart; y < yEnd; y++) {
					cells[x][y].Item = item;
				}
			}
		});

        this.state = {
			Weight: this.props.Items.reduce<number>((acc, item) => acc + item.Weight, 0),
            Cells: cells
		};
	}

	public render() {
		let c = 0;

		return (
			<section className="container">
				<main>
					<header>
						{this.props.Name}
						<aside>{this.state.Weight.toLocaleString(nfive.locale)}<small> / </small>{this.props.MaxWeight.toLocaleString(nfive.locale)}<small> kg</small></aside>
					</header>

					<article style={{gridTemplateColumns: `repeat(${this.props.Width}, 7vh)`, gridTemplateRows: `repeat(${this.props.Height}, 7vh)`}}>
						{
							this.state.Cells.flat(2).map(cell => (
								<Cell key={c++} X={cell.X} Y={cell.Y} Item={cell.Item} />
							))
						}

						{
							this.props.Items.map(item => (
								<Item key={item.Id} Id={item.Id} ContainerId={item.Id} Name={this.props.Name} Image={item.Image} Weight={item.Weight} X={item.X} Y={item.Y} Width={item.Width} Height={item.Height} />
							))
						}
					</article>
				</main>
			</section>
		);
	}
}
