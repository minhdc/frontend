import React, { Component } from 'react';
import axios from 'axios';
import {Form,FormGroup,Col,
    Checkbox,Button,ControlLabel,
    FormControl,HelpBlock} from 'react-bootstrap';


    class WordForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            word: '',
            definition: '',
            pic: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.handleImage = this.handleImage.bind(this);
       // this.fileInput = React.createRef();
    }

    handleInput(event){       
        this.setState({
            pic : event.target.files[0]
        });    
        console.log(this.state.pic)   ;
    }
    

    handleSubmit(event){        
        //event.preventDefault();
        const word = new FormData();
        word.append('word',this.state.word);
        word.append('definition',this.state.definition);
        word.append('pic',this.state.pic);
        
        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/pvoexample/api/v1/words",
            data: word,                            
        }).then((res) => {
            console.log(res);
            
        }).catch(err => {
            console.log(err);
        })
    }

    render(){

        const bindInput = statePath => ({
            value: this.state[statePath],
            onChange: (e) => this.setState({
                [statePath]: e.target.value
            })
        });


        return(  
            <form >
                <FormGroup controlId="wordForm">                    
                    <FormControl
                        name='word'
                        type='text'                        
                        placeholder='Enter text'
                        {...bindInput('word')}
                        label="Word"
                    />                    
                </FormGroup>
                <FormGroup>                    
                    <FormControl
                        name='definition'
                        type='text'
                        placeholder='Enter text'
                        {...bindInput('definition')}
                        label="Definition"
                    />                    
                </FormGroup>
                <FormGroup>                    
                    <FormControl
                        name='img'
                        type='file'                        
                        accept=".jpeg,.bpm,.gif,.jpg"
                        onChange = {this.handleInput}
                        label="File"
                    />                    
                </FormGroup>
                <Button type="button" value="Submit" onClick={this.handleSubmit}>Submit</Button>
            </form>
            /*          
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
            */
        );
    }
}

export default WordForm;