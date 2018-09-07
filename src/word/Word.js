import React , {Component} from 'react';
import WordForm from 'word/WordForm';
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
            </div>
        );
    }

}

export default Word;