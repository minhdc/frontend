import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
    Col, Grid, Row, FormGroup, FormControl, Button,
    Modal
} from 'react-bootstrap';
import UpdateForm from './UpdateForm';
//axios.defaults.withCredentials = true;


class WordList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            words: [],
            showWordForm: false
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toogleUpdateForm = this.toogleUpdateForm.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    toogleUpdateForm(){
        this.setState({
            showWordForm : !this.state.showWordForm
        });
        console.log(this.state.showWordForm);
    }

    //why toggle doesnt work??>?
    handleClose(){
        this.setState({
            showWordForm: false
        });
    }

    handleUpdate(event) {
        try {
            const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/words/' + event.target.name;            
            this.toogleUpdateForm();
            axios.get(uri)
                .then(res => {
                    //pass prop to form    
                    
                    let updateForm = <UpdateForm
                        id={res.data.id}
                        word={res.data.word}
                        definition={res.data.definition}                        
                    />
                    ReactDOM.render(updateForm, document.getElementById('updateForm'));
                });


        } catch (e) {
            console.log(e);
        }
    }

    handleDelete(event) {
        try {
            console.log(event.target.name);
            const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/words/' + event.target.name;
            axios({
                url: uri,
                method: 'DELETE'
            })
                .then(function (response) {
                    console.log(response)
                })
                .then(function (error) {
                    console.log(error)
                });
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        try {
            axios.get('http://127.0.0.1:8000/pvoexample/api/v1/words')
                .then(res => {
                    const words = res.data;
                    this.setState({
                        words: words
                    });
                });

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>

                <div className="static-modal">
                    <Modal show={this.state.showWordForm} onHide={this.toggleUpdateForm}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div id='updateForm'></div>
                            <Button type="button" onClick={this.handleClose}>Close</Button>
                        </Modal.Body>
                    </Modal>
                </div>
                <Grid>
                    {this.state.words.map(item => (
                        <div key={item.id}>
                            <Row>
                                <Col xs={4} md={4} lg={4}>
                                    <img src={item.pic} alt={item.pic} />
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                    <h1>{item.word}</h1>
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <span>{item.definition}</span>
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                    <span><Button name={item.id} onClick={this.handleUpdate}>Update</Button></span>
                                    <span><Button name={item.id} onClick={this.handleDelete}>Delete</Button></span>
                                </Col>
                            </Row>
                        </div>

                    ))}
                </Grid>
            </div>
        );
    }
}

export default WordList;