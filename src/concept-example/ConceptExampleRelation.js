import React, { Component } from 'react';
import {
    Grid, Row, Col, FormGroup,
    Label, Button, ControlLabel,
    FormControl, ListGroup, ListGroupItem
} from 'react-bootstrap';

import {
    ConceptExampleRelationSelector,
    WordExampleRelationActionButton
} from './ConceptExampleRelationSelector';
import Example from '../example/Example.js';
import ConceptList from '../concept/ConceptList.js';


class ConceptExampleRelation extends Component {

    constructor(props) {
        super(prop  );
    }

    handleClickOnWord = (e) => {
        this.props.clickOnConcept(e.target.value);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="conceptExampleRelation">
                <Grid>
                    <Row id="firstRow">
                        <Col xs={4} md={4} lg={4}>
                            <Row>
                                <Example />
                            </Row>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <Row>
                                <ConceptExampleRelationSelector
                                    wordExampleRelationValue={this.props.wordExampleRelationValue}
                                    handleWordExampleRelationChange={this.props.handleWordExampleRelationChange} />
                            </Row>
                            <Row>
                                <WordExampleRelationActionButton />
                            </Row>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <Row>
                                <Button
                                    block
                                    bsStyle="danger">
                                    {this.props.selectedConcept}
                                </Button>
                            </Row>
                            <Row>
                                <ConceptList
                                    wordList={this.props.wordList}
                                    handleClickOnWord={this.handleClickOnWord} />
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default ConceptExampleRelation;