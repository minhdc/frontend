import React, { Component } from 'react';
import axios from 'axios';
import {
    Form, FormGroup, Col,
    Checkbox, Button, ControlLabel,
    FormControl, HelpBlock, ListGroup, ListGroupItem,
    Grid, Row, ButtonToolbar, ButtonToolbarProps,
    SplitButton, MenuItem
} from 'react-bootstrap';


class WordRelationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {

    }


    handleSubmit(event) {

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/pvoexample/api/v1/words')
            .then(res => {
                const words = res.data;
                this.setState({ words: words });
            })
            .then(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={4} md={4} lg={4}>
                        <ListGroup id="left-wordlist">
                            {this.state.words.map(word => (
                                <div key={word.id}>
                                    <ListGroupItem>
                                        {word.word}
                                    </ListGroupItem>
                                </div>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col xs={4} md={4} lg={4}>
                        <ButtonToolbar>
                            <SplitButton  drop up id="word-relation-dropup">
                                <MenuItem eventKey="1">General Association</MenuItem>
                                <MenuItem eventKey="2">Of the same concept cluster</MenuItem>
                                <MenuItem eventKey="3">A Part Of </MenuItem>
                                <MenuItem eventKey="4">A Type Of</MenuItem>
                                <MenuItem eventKey="5">Describing</MenuItem>
                                <MenuItem eventKey="6">Undefined</MenuItem>
                            </SplitButton>
                        </ButtonToolbar>
                        <Button type="button" onClick={this.handleSubmit}>Save</Button>
                    </Col>
                    <Col xs={4} md={4} lg={4}>
                        <ListGroup id="right-wordlist">
                            {this.state.words.map(word => (
                                <div key={word.id}>
                                    <ListGroupItem>
                                        {word.word}
                                    </ListGroupItem>
                                </div>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        );

    }
}

export default WordRelationList;