import "babel-polyfill"

import React from 'react'
<<<<<<< Updated upstream
//import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './App';
import Grid from './Grid';


=======
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Grid from './Grid'

import App from './App';
import store from './store'

/*
function render() {
    ReactDOM.render(
        <Grid/>, document.getElementById('root'))
}
*/
>>>>>>> Stashed changes
const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
<<<<<<< Updated upstream
       <IndexRoute component={Grid}></IndexRoute>

=======
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
>>>>>>> Stashed changes
      </Route>
    </Router>
  </Provider>
)

//<Route path="/" component={App}></Route>
render(router, document.getElementById('root'));
<<<<<<< Updated upstream
=======

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
>>>>>>> Stashed changes
