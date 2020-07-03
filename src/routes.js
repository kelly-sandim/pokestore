import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Steel from './pages/Steel';
import Grass from './pages/Grass';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/steel' component={Steel} />
                <Route path='/grass' component={Grass} />
            </Switch>
        </BrowserRouter>
    )
}