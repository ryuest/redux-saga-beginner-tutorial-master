import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'


export function* helloSaga() {
<<<<<<< Updated upstream
  console.log('Hello Sagas!')
=======
  console.log('Hello Sagas OLD2!')
>>>>>>> Stashed changes
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}
