import React, {Component} from 'react';
import NavBar from 'general/NavBar';

class ExampleSearch extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <NavBar/>
            </div>
        );
    }
}

export default ExampleSearch;