import React from 'react';
import { connect } from 'react-redux';
import { Inventory, IInventory } from './components/Inventory';
import { IItem } from './components/Item';
import { AppState } from './store';
import { addItem, moveItem } from './store/item/actions';
import { ItemState } from './store/item/types';
import { addContainer } from './store/container/actions';
import { ContainerState } from './store/container/types';
import './App.scss';

interface Props {
	item: ItemState;
	addItem: typeof addItem;
	moveItem: typeof moveItem;
	container: ContainerState;
	addContainer: typeof addContainer;
}

class App extends React.Component<Props> {
	keyCode = 'm';

	constructor(props: Props) {
		super(props);

		nfive.on('hotkey', (keyCode: string) => {
			nfive.log("Updated hotkey to " + keyCode)
			this.keyCode = keyCode;
		});

		nfive.on('add-item', (item: IItem) => {
			this.props.addItem(item);
		});

		nfive.on('add-container', (container: IInventory) => {
			container.Items.forEach(item => this.props.addItem(item));
			this.props.addContainer(container);
		});

		document.addEventListener('keyup', (e) => {
			nfive.log("keyup - key: " + e.key + " code: " + e.code);
			nfive.log("Current keycode: " + this.keyCode);
			if (e.key === this.keyCode) {
				nfive.log("closing");
				nfive.send('close');
			}
			e.preventDefault();
		});

		nfive.send('ready');
	}

	public render() {
		return (
			<>
				{this.props.container.containers.map(c => (
					<Inventory
						key={c.Id}
						Id={c.Id}
						Name={c.Name}
						Width={c.Width}
						Height={c.Height}
						MaxWeight={c.MaxWeight}
						Items={this.props.item.items.filter(i => i.ContainerId === c.Id)}
					/>
				))}
			</>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	item: state.item,
	container: state.container
});

export default connect(
	mapStateToProps,
	{
		addItem,
		moveItem,
		addContainer
	}
)(App);
