import React, { Component } from 'react';
import axios from 'axios';

import NavBar from '../general/NavBar';
import WordRelation from './WordRelation';
import WordExampleRelation from './WordExampleRelation';
import { resolve } from 'path';



/**
 * WordExampleWrapper = WordRelation + WordExampleRelation
 */
class WordExampleWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wordList: [],
            relationValue: '',
            selectedChildId: '',
            selectedParentId: '',
            selectedChild: 'Select child concept from list below',
            selectedParent: 'Select Parent concept from list below',
        };
        this.getWordList = this.getWordList.bind(this);
        this.handleClickOnChild = this.handleClickOnChild.bind(this);
        this.handleClickOnParent = this.handleClickOnParent.bind(this);
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
        let selectedChildWord = '';
        this.setState({
            selectedChildId: value
        }, () => {
            if (this.state.selectedChildId && this.state.selectedParentId) {
                this.checkCurrentRelationValue(this.state.selectedParentId,
                    this.state.selectedChildId);
            }
            axios.get('http://127.0.0.1:8000/pvoexample/api/v1/words/' + value)
                .then(res => {
                    this.setState({
                        selectedChild: res.data.word, //need to solve later
                    })
                }).catch(e => {
                    console.log(e);
                })
        })

        return selectedChildWord;
    }

    handleClickOnParent(value) {
        let selectedParentWord = '';
        this.setState({
            selectedParentId: value
        }, () => {
            if (this.state.selectedChildId && this.state.selectedParentId) {
                this.checkCurrentRelationValue(this.state.selectedParentId,
                    this.state.selectedChildId);
            }
            axios.get('http://127.0.0.1:8000/pvoexample/api/v1/words/' + value)
                .then(res => {
                    this.setState({
                        selectedParent: res.data.word, //need to fix later
                    })
                }).catch(e => {
                    console.log(e);
                })

        })
        return selectedParentWord
    }



    checkCurrentRelationValue(child, parent) {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordrelationdetail/' + parent + '/' + child;
        axios.get(uri)
            .then(res => {
                this.setState({ relationValue: res.data.relation });
            }).catch(e => {
                //console.log(e);
                console.log('relation of ' + child + ' and ' + parent + " doesn't exist");
                this.setState({ relationValue: '' });
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
                    selectedChild={this.state.selectedChild}
                    selectedParent={this.state.selectedParent}
                    wordRelationAction={(this.state.relationValue != '') ? true : false}
                    isSetButtonActive={(this.state.selectedParentId != '' &&
                        this.state.selectedChildId != '') ? true : false}
                    isUpdateButtonActive={(this.state.selectedParentId != ''&&
                        this.state.selectedChildId != '') ? true : false}
                />
                <WordExampleRelation />
            </div >
        );
    }
}

export default WordExampleWrapper;