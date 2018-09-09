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
            relationExist: '',
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

    getWord = (wordId) => {
        return new Promise((resolve, reject) => {
            const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/words/' + wordId;
            axios.get(uri)
                .then(res => {
                    resolve(res.data.word);
                }).catch(e => {
                    console.log(e);
                    reject(e);
                })
        })
    }

    resetWordRelationState = () => {
        this.setState({
            relationValue: '',
            relationExist: false,
            selectedChildId: '',
            selectedParentId: '',
            selectedChild: 'Select child concept from list below',
            selectedParent: 'Select Parent concept from list below',
        })
    }

    handleWordRelationChange = (e) => {
        this.setState({
            relationValue: e.target.value
        }, () => {
            console.log("relation changed" + this.state.relationValue);
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
            //promise here
            this.getWord(this.state.selectedChildId).then(result => {
                this.setState({ selectedChild: result });
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
            //promise here
            this.getWord(this.state.selectedParentId).then(result => {
                this.setState({ selectedParent: result });
            })

        })
        return selectedParentWord
    }

    checkCurrentRelationValue(parent, child) {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordrelationdetail/' + parent + '/' + child;
        axios.get(uri)
            .then(res => {
                this.setState({
                    relationValue: res.data.relation,
                    relationExist: true,
                }, () => {
                    console.log(this.state.relationValue);
                }
                );
            }).catch(e => {
                console.log('relation of ' + child + ' and ' + parent + " doesn't exist");
                this.setState({
                    relationValue: '',
                    relationExist: false,
                })

            })
    }

    handleSetWordRelation = () => {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordrelation';
        const wordRelation = new FormData();
        wordRelation.append('word1_id', this.state.selectedParentId);
        wordRelation.append('word2_id', this.state.selectedChildId);
        wordRelation.append('relation', this.state.relationValue);
        axios({
            method: "POST",
            url: uri,
            data: wordRelation,
        }).then((res) => {
            console.log(res);
            this.resetWordRelationState();
        }).catch(err => {
            console.log(err);
        })
    }

    handleDeleteWordRelation = (child, parent) => {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordrelationdetail/' +
            this.state.selectedParentId + '/' + this.state.selectedChildId;
        const wordRelation = new FormData();
        wordRelation.append('word1_id', this.state.selectedParentId);
        wordRelation.append('word2_id', this.state.selectedChildId);
        //wordRelation.append('relation', '6');
        axios({
            method: "DELETE",
            url: uri,
            data: wordRelation,
        }).then((res) => {
            console.log(res);
            this.resetWordRelationState();
        }).catch(err => {
            console.log(err);
        })
    }

    handleUpdateWordRelation = () => {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordrelationdetail/' +
            this.state.selectedParentId + '/' + this.state.selectedChildId;
        const wordRelation = new FormData();
        wordRelation.append('word1_id', this.state.selectedParentId);
        wordRelation.append('word2_id', this.state.selectedChildId);
        wordRelation.append('relation', this.state.relationValue);
        axios({
            method: "PUT",
            url: uri,
            data: wordRelation,
        }).then((res) => {
            console.log(res);
            this.resetWordRelationState();
        }).catch(err => {
            console.log(err);
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
                    handleWordRelationChange={this.handleWordRelationChange}

                    clickOnChild={this.handleClickOnChild}
                    clickOnParent={this.handleClickOnParent}
                    selectedChild={this.state.selectedChild}
                    selectedParent={this.state.selectedParent}

                    wordRelationAction={(this.state.relationValue != '') ? true : false}
                    isSetButtonDisabled={(this.state.relationExist || 
                            (this.state.selectedChildId == '' || 
                            this.state.selectedParentId == '')? true : false)}
                    isUpdateButtonDisabled={(!this.state.relationExist ? true : false)}
                    isDeleteButtonDisabled={(!this.state.relationExist ? true : false)}

                    handleUpdateWordRelation={this.handleUpdateWordRelation}
                    handleSetWordRelation={this.handleSetWordRelation}
                    handleDeleteWordRelation={this.handleDeleteWordRelation}
                />
                <WordExampleRelation />
            </div >
        );
    }
}

export default WordExampleWrapper;