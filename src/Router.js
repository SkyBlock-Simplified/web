import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Home from './components/Home';
import Scammers from './components/Scammers';
import Scammer from './components/Scammer';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/scammers" component={Scammers} />
                    <Route exact path="/scammers/:id" component={Scammer} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;