import React, { Component } from 'react';
import Menu from './Menu';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import Jobcomponent from './joblistcomponent';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu : Menu
        };
    }

    render() {
        return (
            <Router>
            <Switch>
                <Route path="/Menu" component={Menu} />
            </Switch>
            </Router>
        );
    }

}
export default Main;