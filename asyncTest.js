export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export function increment(index) {
  return{
    type: 'INCREMENT_LIKES',
    index
  }
}

export function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES' :
        const i = action.index;
          return [
            ...state.slice(0, i), // before the one we are updating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1), // after the one we are updating
          ]
        default:
            return state;
    }
    return state;
}
