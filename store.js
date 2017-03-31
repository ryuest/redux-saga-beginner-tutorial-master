import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';
import { browserHistory } from 'react-router';

import posts from './reducers/posts';
import saga from './reducers/saga';



import createSagaMiddleware from 'redux-saga';

// import the root reducer
//import rootReducer from './reducers/index';
import postz from './data/posts';
import sagaz from './data/saga';

import Counter from './Counter';
import reducer from './reducers';
import rootSaga from './sagas';

const rootReducer = combineReducers({posts, saga, reducer, routing: routerReducer });

const defaultState = {
  postz,
  sagaz
};

const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f );
/*
const store = createStore(rootReducer, defaultState, composeEnhancers);
//const store = createStore(rootReducer, defaultState, composeEnhancers);
//export const history = syncHistoryWithStore(browserHistory, store);
*/

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer, defaultState,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)




export default store;
