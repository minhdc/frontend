import React, { Component } from 'react';
import axios from 'axios';

import NavBar from '../general/NavBar';
import WordRelation from './WordRelation';
import WordExampleRelation from './WordExampleRelation';



/**
 * WordExampleWrapper = WordRelation + WordExampleRelation
 */
class WordExampleWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wordList: [],
            relationValue: '',
            selectedChildId: 'selected-child-appears-here',
            selectedParentId: 'selected-parent-appears-here',

        };
        this.getWordList = this.getWordList.bind(this);
        this.handleClickOnChild = this.handleClickOnChild.bind(this);
        this.handleClickOnParent = this.handleClickOnParent.bind(this);
        this.getWord = this.getWord.bind(this);
        this.checkCurrentRelationValue = this.checkCurrentRelationValue.bind(this);
    }

    getWordList() {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/words'
        axios.get(uri)
            .then(res => {
                this.setState({ wordList: res.data });
            }).catch(e => {
                console.log(e);
            })
    }

    handleClickOnChild(value) {
        this.setState({
            selectedChildId: value
        },() => {
            this.checkCurrentRelationValue(this.state.selectedParentId,
                this.state.selectedChildId);
        })        
        
        return this.getWord(value);
    }

    handleClickOnParent(value) {
        this.setState({
            selectedParentId: value
        },() => {
            this.checkCurrentRelationValue(this.state.selectedParentId,
                this.state.selectedChildId);
        })
        this.checkCurrentRelationValue(this.state.selectedParentId,this.state.selectedChildId);
        return this.getWord(value);
    }

    getWord(value) {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/words/' + value;
        axios.get(uri)
            .then(res => {
                return res.data.word;
            }).catch(e => {
                console.log(e);
                return '';
            })
        
    }

    checkCurrentRelationValue(child, parent) {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordrelationdetail/'+parent+'/'+child;
        axios.get(uri)
            .then(res => {
                console.log(res.data.relation);
                this.setState({relationValue:res.data.relation});
            }).catch(e => {
                console.log(e);                
            })
    }

    componentDidMount() {
        this.getWordList();
    }

    

    render() {
        return (
            <div>
                <NavBar />
                <WordRelation
                    wordList={this.state.wordList}
                    relationValue={this.state.relationValue}
                    clickOnChild={this.handleClickOnChild}
                    clickOnParent={this.handleClickOnParent}
                    selectedChild={() => this.handleClickOnChild}
                    selectedParent={() => this.handleClickOnParent}
                />
                <WordExampleRelation />
            </div >
        );
    }
}

export default WordExampleWrapper;