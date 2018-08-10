import React , {Component} from 'react';
import axios from 'axios';


class Word extends Component{
    constructor(props){
        super(props);
        this.state = {
            word: '',
            definition: "",
            pic_url:"",            
        }
    }

    

    render(){
        return(
            <div>
            <h1>
                {this.state.word}
            </h1>
            <h2>
                {this.state.definition}
            </h2>
            <h3>
                {this.state.pic_url}
            </h3>
            </div>
        );
    }

}