import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './utils/history';
import GlobalState from './context/GlobalState';
import Start from './pages/Start';
import Webb from './pages/Webb';
import Phone from './pages/Phone';


export default class App extends Component {
    render() {
        return (
            <GlobalState>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Start} />
                        <Route path="/phone" component={Phone} />
                        <Route path="/webb" component={Webb} />
                    </Switch>
                </Router>
            </GlobalState>
        )
    }
}
