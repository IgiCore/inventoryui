import { Store, createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { itemReducer } from './item/reducers';
import { containerReducer } from './container/reducers';

const rootReducer = combineReducers({
	item: itemReducer,
	container: containerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store<any> {
	return createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	);
}
