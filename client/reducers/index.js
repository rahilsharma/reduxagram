/**
 * Created by Rahil on 15-10-2016.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts,comments,routing:routerReducer});

export default rootReducer;
