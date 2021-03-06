// let's go!
import React from 'react';
import { render } from 'react-dom';

//importing css
import css from './styles/style.styl';

//import components

import Main from './components/Main.js';
import Single from './components/Single.js';
import PhotoGrid from './components/PhotoGrid.js';

//import react router deps
import { Router, Route , IndexRoute , browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)

render(router,document.getElementById('root'));