import React, {Component} from 'react';
import axios from 'axios';
import NavBar from 'general/NavBar';

import ExampleList from './ExampleList';
import ConceptList from '../concept/ConceptList';

import {ConceptExampleRelationSelector,
    ConceptExampleRelationActionButton} from '../concept-example/ConceptExampleRelationSelector';

import {Row, Col,Grid} from 'react-bootstrap';
import ExampleForm from './ExampleForm';

class ExampleSearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            wordList: [],
            exampleList: [],

            exampleDesc: '',
            keywords: '',
            source: '',
        }
    }

    getWordList =() => {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/words'
        axios.get(uri)
            .then(res => {
                this.setState({ wordList: res.data });
            }).catch(e => {
                console.log(e);
            })
    }

    getExampleList = () =>{
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/example'
        axios.get(uri)
            .then(res => {
                this.setState({ exampleList: res.data });
                console.log("got esxamples "+this.state.exampleList);
            }).catch(e => {
                console.log(e);
            })
    }

    getExample = (exampleId) => {
        return new Promise((resolve, reject) => {
            const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/example/' + exampleId;
            axios.get(uri)
                .then(res => {
                    resolve(res.data.example);
                }).catch(e => {
                    console.log(e);
                    reject(e);
                })
        })
    }

    handleClickOnExample = (e) => {
        //show modal or something abt that example 
        console.log('exmple id: '+e.target.id+ ' example desc: '+e.target.value);
    }

    handleSetWordExampleRelation = (e) => {

    }

    handleConceptExampleRelationChange = (e) => {

    }

    handleClickOnWord = (e) => {

    }

    handleExampleInputChange = (e) => {

    }

    componentDidMount(){
        this.getExampleList();
        this.getWordList();
    }

    render(){
        return(
            <div>
                <NavBar/>
                <Grid>
                    <Row id="firstRow">
                    <Col xs={4} md={4} lg={4}></Col>
                    <Col xs={4} md={4} lg={4}>
                        <ConceptExampleRelationActionButton
                        handleSetWordExampleRelation = {this.handleSetWordExampleRelation}
                        isSetExampleConceptButtonDisabled = {false}/>
                    </Col>
                    <Col xs={4} md={4} lg={4}></Col>
                        
                    </Row>
                    <Row id="secondRow">
                        <Col xs={4} md={4} lg={4}>
                            <ExampleList
                                exampleList={this.state.exampleList}
                                handleClickOnExample={this.handleClickOnExample}/>        
                            
                        </Col>
                        <Col xs={4} md={4} lg={4}>                            
                            <ConceptExampleRelationSelector
                                conceptExampleRelationValue = {this.state.conceptExampleRelationValue}
                                handleConceptExampleRelationChange = {this.handleConceptExampleRelationChange}/>
                        </Col>
                        <Col xs={4} md={4} lg={4}>                            
                            <ConceptList
                                wordList = {this.state.wordList}
                                handleClickOnWord = {this.handleClickOnWord}/>
                        </Col>
                    </Row>
                    <Row id="thirdRow">
                        <Col xs={4} md={4} lg={4}>
                            <ExampleForm
                                exampleDesc={this.state.exampleDesc}
                                keywords={this.state.keywords}
                                source={this.state.source}
                                onChange={this.handleExampleInputChange}/>
                        </Col>
                        <Col xs={4} md={4} lg={4}></Col>
                        <Col xs={4} md={4} lg={4}></Col>
                    </Row>
                </Grid>
                

            </div>
        );
    }
}

export default ExampleSearch;

/**
 *              /**search bar */
                /**example list */
                /**example list U/D */
                /**wordlist filtered in 2 tabs */
                /**relation selector: selector + button */
 