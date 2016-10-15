/**
 * Created by Rahil on 15-10-2016.
 */
import { createStore , compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer

import rootReducer from './reducers/index';

import comments from './data/comments';

import posts from './data/posts';

//create an object for the default data

const defaultState = {
    posts,
    comments
};

//createStore

const store = createStore(rootReducer,defaultState);

export const history = syncHistoryWithStore(browserHistory,store);

export default store;