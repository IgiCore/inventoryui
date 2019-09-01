import React from 'react';
import { connect } from 'react-redux';
import { Container, IContainer } from './components/Container';
import { IItem } from './components/Item';
import { AppState } from './store';
import { addItem, removeItem, moveItem } from './store/item/actions';
import { ItemState } from './store/item/types';
import { addContainer, removeContainer } from './store/container/actions';
import { ContainerState } from './store/container/types';
import './App.scss';

interface Props {
	item: ItemState;
	addItem: typeof addItem;
	removeItem: typeof removeItem;
	moveItem: typeof moveItem;
	container: ContainerState;
	addContainer: typeof addContainer;
	removeContainer: typeof removeContainer;
}

class App extends React.Component<Props> {
	hotkey = 'm';

	constructor(props: Props) {
		super(props);

		nfive.on('hotkey', (hotkey: string) => {
			this.hotkey = hotkey;
		});

		nfive.on('add-item', (item: IItem) => {
			this.props.addItem(item);
		});

		nfive.on('add-container', (container: IContainer) => {
			container.Items.forEach(this.props.addItem);
			this.props.addContainer(container);
		});

		nfive.on('remove-item', (id: string) => {
			this.props.removeItem(id);
		});

		nfive.on('remove-container', (id: string) => {
			const container: (IContainer | undefined) = this.props.container.containers.find((c) => c.Id === id);

			if (container === undefined) return;

			container.Items.forEach((i) => this.props.removeItem(i.Id));

			this.props.removeContainer(id);
		});

		document.addEventListener('keyup', (e) => {
			if (e.key === this.hotkey) {
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
					<Container
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
		removeItem,
		moveItem,
		addContainer,
		removeContainer
	}
)(App);
