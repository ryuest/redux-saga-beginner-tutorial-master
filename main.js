import "babel-polyfill"

import React from 'react'
//import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './App';
import Grid from './Grid';


const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
       <IndexRoute component={Grid}></IndexRoute>

      </Route>
    </Router>
  </Provider>
)

//<Route path="/" component={App}></Route>
render(router, document.getElementById('root'));
