import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
        <hr />
        <div>
          Clicked: {value} value times
        </div>
      </div>

export default Counter
