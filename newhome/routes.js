
    Wrapper = require('./components/wrapper'),
    Home = require('./components/home'),
    Hero = require('./components/hero');

import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

module.exports = (
    <Route path="/" component={Wrapper}>
        <IndexRoute component={Home} />
        <Route path="/hero/:name" component={Hero} />
    </Route>
);
