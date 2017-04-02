import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// reducer
import posts from './data/posts';
import {createStore, applyMiddleware, compose} from 'redux'
import rootSaga from './sagas'
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f );
/*
const store = createStore(rootReducer, defaultState, composeEnhancers);
//const store = createStore(rootReducer, defaultState, composeEnhancers);
//export const history = syncHistoryWithStore(browserHistory, store);
*/

//create an object for the default data
const defaultState = {
  posts
};

const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
