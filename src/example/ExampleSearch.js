import React, {Component} from 'react';
import NavBar from 'general/NavBar';
import ConceptList from '../concept/ConceptList';

class ExampleSearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            wordList: [],
        }
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