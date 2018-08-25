import React, {Component} from 'react';

import NavBar from 'general/NavBar.js';
class VocabTree extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <NavBar/>
            </div>
        );
    }
}

export default VocabTree;