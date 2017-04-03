/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

<<<<<<< Updated upstream
const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    {' '}
    <button onClick={onIncrementAsync}>Increment after 1 second</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired
//  onIncrement: PropTypes.func.isRequired,
//  onDecrement: PropTypes.func.isRequired
}

=======
// const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
class Counter extends React.Component {
    render() {

        return (
      <div>
        <button onClick={this.props.onIncrement}>
          Increment
        </button>

        <button onClick={this.props.onDecrement}>
          Decrement
        </button>

        <button onClick={this.props.onIncrementAsync}>
          Increment after 1 second
        </button>
        <hr />
        <div>
          Clicked: {this.props.value} value times
        </div>
      </div>
    )
}
}
>>>>>>> Stashed changes
export default Counter
