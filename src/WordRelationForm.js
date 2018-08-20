import React, { Component } from 'react';
import axios from 'axios';
import {Form,FormGroup,Col,
    Checkbox,Button,ControlLabel,
    FormControl,HelpBlock,ListGroup,ListGroupItem} from 'react-bootstrap';


    class WordRelationForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            word1_id: '',
            word2_id: '',
            relation: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);       
    }

    handleInput(event){       
       
    }
    

    handleSubmit(event){        

    }

    render(){

        const bindInput = statePath => ({
            value: this.state[statePath],
            onChange: (e) => this.setState({
                [statePath]: e.target.value
            })
        });


        return(
            <form>
                <FormGroup>
                    <ListGroup>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                </FormGroup>
            </form>
        );
            
    }
}

export default WordForm;