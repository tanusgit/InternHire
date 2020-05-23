import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
class Welcome extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Jumbotron className="img">
                <div className="col-12 col-md-6">
                <h1>Apply for intership today</h1>
                </div>
            </Jumbotron>
            
        );
    }



}
export default Welcome;