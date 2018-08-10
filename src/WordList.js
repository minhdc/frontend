import React , {Component} from 'react';
import axios from 'axios';

class WordList extends Component{

    constructor(props){
        super(props);
        this.state = {
            words : []
        };        
    }
    
    componentDidMount(){
        try{            
            axios.get('http://127.0.0.1:8000/pvoexample/api/v1/words')
                .then(res =>{
                    const words = res.data;                    
                    this.setState({
                        words
                    });
                });
           
        }catch(e){
            console.log(e);
        }
    }

    render(){
        return(
            <div>
                {this.state.words.map(item => (
                    <div key={item.id}>
                        <h1>{item.word}</h1>
                        <h2>{item.id}</h2>
                        <span>{item.definition}</span>                        
                        <img src={item.pic_url} alt={item.word}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default WordList;