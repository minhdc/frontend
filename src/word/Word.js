import React , {Component} from 'react';
import axios from 'axios';
import WordForm from 'word/WordForm';
import WordList from 'word/WordList';
import NavBar from 'general/NavBar';


class Word extends Component{
    constructor(props){
        super(props);
        
    }

    

    render(){
        return(
            <div>
            <NavBar/>
            <WordForm></WordForm>
            <WordList></WordList>
            </div>
        );
    }

}

export default Word;