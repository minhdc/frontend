import React, { Component } from 'react';
import axios from 'axios';
import {
    Col, Grid, Row, FormGroup, FormControl, Button,
    Modal
} from 'react-bootstrap';

class UpdateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            word: props.word,
            definition: props.definition,
            pic: '',            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    handleSubmit(e) {
        const word = new FormData();
        word.append('word', this.state.word);
        word.append('definition', this.state.definition);
        word.append('pic', this.state.pic);

        axios({
            method: 'PUT',
            url: "http://127.0.0.1:8000/pvoexample/api/v1/words/" + this.props.id + "/",
            data: word,
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });

    }

    handleImage(e) {
        if (e.target.files) {
            this.setState({
                pic: e.target.files[0]
            });
        } else if (!this.state.pic) {
            this.setState({
                pic: ''
            });
        }
    }

    componentDidMount() {
        this.setState({ showWordForm: !this.showWordForm });
    }
    render() {

        const bindInput = statePath => ({
            value: this.state[statePath],
            onChange: (e) => this.setState({
                [statePath]: e.target.value
            })
        });

        return (

            <form>
                <FormGroup controlId="wordForm">
                    <FormControl
                        name='word'
                        type='text'
                        value={this.state.word}
                        {...bindInput('word')}
                        label="Word"
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        name='definition'
                        type='text'
                        value={this.state.definition}
                        {...bindInput('definition')}
                        label="Definition"
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        name='img'
                        type='file'
                        accept=".jpeg,.bpm,.gif,.jpg"
                        onChange={this.handleImage}
                        label="File"
                    />
                </FormGroup>
                <Button type="button" value="Submit" onClick={this.handleSubmit}>Submit</Button>
                <Button type="button" value="Cancel">Cancel</Button>
            </form>

        );
    }
}

export default UpdateForm;