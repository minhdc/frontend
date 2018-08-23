import React, { Component } from 'react';
import NavBar from './NavBar';

class WelcomePage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="welcomePage">
                <NavBar />
            </div>
        );
    }
}

export default WelcomePage;