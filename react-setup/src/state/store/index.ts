import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

const middlewares = [thunk];

const storeENhancer = Object(window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, {}, storeENhancer(applyMiddleware(...middlewares)));
