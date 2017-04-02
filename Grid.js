import "babel-polyfill"

import React from 'react'
import store from './store'
import Counter from './Counter'

const action = type => store.dispatch({type});

class Sport extends React.Component {
    render() {
        const {post} = this.props;
        return (
            <div className="sport-container">
                <header className="header-dropdown">
                  <h2 className="fl">{post.likes}</h2>
                  <button onClick={this.props.increment.bind(null, 0)}
                    className="likes">&hearts; {post.likes}</button>
                </header>
            </div>
        )
    }
}

//<h2 className="fl">{post.likes}</h2>
//<button onClick={this.props.increment.bind(null, 0)} className="likes">&hearts; {post.likes}</button>

const Root = () => {
  return (
    <Counter
      value={222}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}/>
  )
}

const Grid = React.createClass({
    render() {

        const post = this.props.posts[0];
        return (
            <div className="photo-grid">
                <Counter
                  value={post.likes}
                  onIncrement={() => action('INCREMENT')}
                  onDecrement={() => action('DECREMENT')}
                  onIncrementAsync={() => action('INCREMENT_ASYNC')}/>

                  <Sport i={0} post={post} {...this.props}/>
            </div>
        )
    }
});
//const post = this.props.posts[0];
//<Sport i={0} post={post} {...this.props}/>
//<Counter post={post} {...this.props}/>
//const saga = this.props.saga[0];
export default Grid;
