import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Search from 'Pages/Search'
import Error404 from 'Pages/404'

import App  from '../App';


export default class RouterComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" render={() => (<Redirect to="/search" />)}/>
                        <Route path="/search" component={Search}/>
                        <Route component={Error404}/>
                    </Switch>
                </ App>
            </Router>
        );
    }
}
