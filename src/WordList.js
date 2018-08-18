import React, { Component } from 'react';
import axios from 'axios';
import { Col, Grid, Row } from 'react-bootstrap';

class WordList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            words: []
        };
    }

    componentDidMount() {
        try {
            axios.get('http://127.0.0.1:8000/pvoexample/api/v1/words')
                .then(res => {
                    const words = res.data;
                    this.setState({
                        words
                    });
                });

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <Grid>
                    {this.state.words.map(item => (
                        <div key={item.id}>
                            <Row>
                                <Col xs={4} md={4} lg={4}>
                                    <img src={item.pic} alt={item.pic}/>
                                </Col>
                                <Col xs={4} md={2} lg={2}>
                                    <h1>{item.word}</h1>
                                </Col>
                                <Col xs={4} md={6} lg={6}>
                                    <span>{item.definition}</span>
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