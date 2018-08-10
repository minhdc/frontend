import React, { Component } from 'react';
import axios from 'axios';

class WordForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            word: '',
            definition: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleInput(event){
        const target = event.target;
        const name = target.name;
        if (name !== "img"){
            this.setState({
                [name] : target.value
                });
        }else{
            this.setState({
                ["img"] : target.value
            });
        }
    }

    handleSubmit(event){        
        //event.preventDefault();
        const word = {
            word: this.state.word,
            definition: this.state.definition
        };
        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/pvoexample/api/v1/words",
            data: word
        }).then((res) => {
            console.log(res)
        }).catch(err => {
            console.log(err);
        })
    }

    render(){
        return(
            <form>
                <label htmlFor="">
                    Word:
                    <input name="word" type="text" value={this.state.word} onInput = {this.handleInput} />
                </label>
                <label htmlFor="">
                    Definition:
                    <input name="definition" type="text" value={this.state.definition} onInput = {this.handleInput} />
                </label>
                <label htmlFor="">
                    IMG:
                    <input name="img" type="file" ref={this.fileInput} />
                </label>
                <button type="button" value="Submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        );
    }
}

export default WordForm;