import React, { Component } from 'react';
import axios from 'axios';
import {
    FormGroup, Modal,
    Button, FormControl
} from 'react-bootstrap';


class ConceptForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            definition: '',
            pic: '',
            showWordForm: this.props.showWordForm
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleWordForm = this.toggleWordForm.bind(this);
        // this.handleImage = this.handleImage.bind(this);
        // this.fileInput = React.createRef();
    }

    handleInput(event) {
        this.setState({
            pic: event.target.files[0]
        });
        console.log(this.state.pic);
    }


    handleSubmit(event) {
        //event.preventDefault();
        const word = new FormData();
        word.append('word', this.state.word);
        word.append('definition', this.state.definition);
        word.append('pic', this.state.pic);

        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/pvoexample/api/v1/words",
            data: word,
        }).then((res) => {
            console.log(res);

        }).catch(err => {
            console.log(err);
        })
        this.setState({
            word:'',
            definition: '',
            pic: ''
        })
        this.toggleWordForm();
    }

    toggleWordForm() {
        this.setState({
            showWordForm: !this.state.showWordForm
        });
    }

    render() {

        const bindInput = statePath => ({
            value: this.state[statePath],
            onChange: (e) => this.setState({
                [statePath]: e.target.value
            })
        });


        return (
            <div>
                <button onClick={this.toggleWordForm}> WordForm
          </button>

                <div className="static-modal">
                    <Modal show={this.state.showWordForm} onHide={this.toggleWordForm}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="WordForm">
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
                                            onChange={this.handleInput}
                                            label="File"
                                        />
                                    </FormGroup>
                                    <Button type="button" value="Submit" onClick={this.handleSubmit}>Submit</Button>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>

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

export default ConceptForm;