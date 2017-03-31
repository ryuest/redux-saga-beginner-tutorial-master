import "babel-polyfill"

import React from 'react'
import store from './store'

const action = type => store.dispatch({type});

class Counter extends React.Component {
    render() {
        const {post} = this.props;
        return (
            <div>
                <button className="value">Clicked: times</button>
            </div>
        )
    }
}

class Sport extends React.Component {
    render() {
        const {post} = this.props;
        return (
            <div className="sport-container">
                <header className="header-dropdown">
                    <h2 className="fl">"222"</h2>
                    <button  className="likes">&hearts; </button>
                </header>
            </div>
        )
    }
}

//<h2 className="fl">{post.likes}</h2>
//<button onClick={this.props.increment.bind(null, 0)} className="likes">&hearts; {post.likes}</button>

const Grid = React.createClass({
    render() {
        const post = this.props.posts[0];

        return (
            <div className="photo-grid">

            </div>
        )
    }
});
//<Sport i={0} post={post} {...this.props}/>
//<Counter post={post} {...this.props}/>
//const saga = this.props.saga[0];
export default Grid;
