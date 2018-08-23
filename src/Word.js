import React , {Component} from 'react';
import axios from 'axios';
import WordForm from './WordForm';
import WordList from './WordList';


class Word extends Component{
    constructor(props){
        super(props);
        
    }

    

    render(){
        return(
            <div>
            <WordForm></WordForm>
            <WordList></WordList>
            </div>
        );
    }

}

export default Word;