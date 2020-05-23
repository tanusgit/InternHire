import React from 'react';
import {Component} from 'react';
import {Button} from 'reactstrap';
import {Jumbotron} from 'reactstrap';
import f1 from '../images/f1.jpg';

class Job extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3" style={{marginLeft: "1px"}}>
                        <div className="row">
                            <img src={f1}/>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                        <Button color="warning">Warning</Button>
                        </div>
                        <div className="col-md-6">
                        <Button color="danger">Danger</Button>
                        </div>
                        </div>   
                    </div>


                    <div className="col-md-3" style={{marginLeft: "1px"}}>
                        <div className="row">
                            <img src={f1}/>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                        <Button color="warning">Warning</Button>
                        </div>
                        <div className="col-md-6">
                        <Button color="danger">Danger</Button>
                        </div>
                        </div>   
                    </div>
                    <br></br>


                    <div className="col-md-3" style={{marginLeft: "1px"}}>
                        <div className="row">
                            <img src={f1}/>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                        <Button color="warning">Warning</Button>
                        </div>
                        <div className="col-md-6">
                        <Button color="danger">Danger</Button>
                        </div>
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
}

export default Job;
