import React, { Component } from 'react';
import Menu from 'Menu';
import { Switch, Route, Redirect } from 'react-router-dom';
import Jobcomponent from './joblistcomponent';


class Main extends component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Switch>
                <Route path="/Menu" component={Menu} />
                <Route exact path='/joblistcomponent' component={Jobcomponent} />} />
                <Redirect to="/Menu" />
            </Switch>
        );
    }

}
export default Main;