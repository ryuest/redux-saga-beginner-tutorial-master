import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import saga from './saga';

const rootReducer = combineReducers({posts, saga, routing: routerReducer });

export default rootReducer;
