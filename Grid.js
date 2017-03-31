import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
const action = type => store.dispatch({type})

function renderStore() {
const { post, i } = this.props;
  return(
<div>
 <Counter
   value={store.getState()}
   onIncrementAsync={() => action('INCREMENT_ASYNC')}
 />

    <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes}</button>
    </div>
)
}

class Sport extends React.Component {
    render() {
  const { post} = this.props;
        return (
        <div className="sport-container">
            <header className="header-dropdown">
                <h2 className="fl">{post.likes}</h2>
                <button onClick={this.props.increment.bind(null, 0)} className="likes">&hearts; {post.likes}</button>
                <Counter
                  value="{store.getState()}"
                  onIncrementAsync={() => action('INCREMENT_ASYNC')}
                />

            </header>
        </div>
      )
  }
}
//
//renderStore()
//store.subscribe(renderStore)


const Grid = React.createClass({
  render() {
    const post = this.props.posts[0];
    return (
          <div className="photo-grid">
        <Sport i={0} post={post} {...this.props} />
      </div>
    )
  }
});
//
export default Grid;
