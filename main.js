import "babel-polyfill"

import React from 'react'

import { render } from 'react-dom';

import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import rootSaga from './sagas'
import rootReducer from './reducers/index'

import Grid from './Grid'
import post from './data/posts';
import saga from './data/saga';

import App from './App';
import store from './store'
/*
const sagaMiddleware = createSagaMiddleware()

const defaultState = {
    post,
    saga
};

const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})
*/
/*
function render() {
    ReactDOM.render(
        <Grid/>, document.getElementById('root'))
}
*/
const router = (
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Grid}></IndexRoute>
    </Route>
  </Router>
  </Provider>
)

render(router, document.getElementById('root'));
//render()
store.subscribe(Grid)
