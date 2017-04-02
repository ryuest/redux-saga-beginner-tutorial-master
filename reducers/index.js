import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import counter from './counter';

const rootReducer = combineReducers({posts, counter, routing: routerReducer });

export default rootReducer;
