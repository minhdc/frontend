import React, { Component } from 'react';

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
        const value = target.type === 'text' ? target.value : null;
        this.setState({
            [name] : target.value
            });
    }

    handleSubmit(event){
        alert(this.state.word + this.state.definition + this.state.pic_url);
        alert('selected file: - '+this.fileInput.current.files[0].name);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
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
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default WordForm;