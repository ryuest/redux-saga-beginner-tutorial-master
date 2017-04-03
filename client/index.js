import "babel-polyfill"

import React from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Grid from '../Grid'

import App from '../App';
import store from '../store'

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
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));

//render()
/*
ReactDOM.render(
    // The top-level Provider is what allows us to `connect` components to the store
    // using ReactRedux.connect (see components Home and Hero)
    <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={Grid}></IndexRoute>
      </Route>
    </Router>
    </Provider>,
    document.getElementById("root")
);
*/

store.subscribe(Grid)
