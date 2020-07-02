import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Legendary from './pages/Legendary';
import Mythical from './pages/Mythical';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/legendary' component={Legendary} />
                <Route path='/mythical' component={Mythical} />
            </Switch>
        </BrowserRouter>
    )
}