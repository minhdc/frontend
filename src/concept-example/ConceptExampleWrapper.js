import React, { Component } from 'react';
import axios from 'axios';

import NavBar from '../general/NavBar';
import ConceptRelation from './ConceptRelation';
import ConceptExampleRelation from './ConceptExampleRelation';
/**
 * WordExampleWrapper = WordRelation + WordExampleRelation
 */
class ConceptExampleWrapper extends Component {

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

            selectedConcept: 'Select Concept from list below',
            selectedConceptId: '',
            exampleId:'',
            exampleDesc:'',
            keywords: '',
            source: '',
            conceptExampleRelationId:'',
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

    resetConceptExampleRelationState = () => {
        this.setState({
            selectedConcept: 'Select Concept from list below',
            selectedConceptId: '',
            exampleId:'',
            exampleDesc:'',
            keywords: '',
            source: '',
            conceptExampleRelationId:'',
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
                console.log('relation of ' + parent + ' and ' + child + " doesn't exist");
                this.setState({
                    relationValue: '',
                    relationExist: false,
                })

            })
    }

    handleSetWordRelation = () => {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordrelation';
        const wordRelation = new FormData();
        wordRelation.append('parent_id', this.state.selectedParentId);
        wordRelation.append('child_id', this.state.selectedChildId);
        wordRelation.append('relation', this.state.relationValue);
        axios({
            method: "POST",
            url: uri,
            data: wordRelation,
        }).then((res) => {
            console.log(res);
            this.resetWordRelationState();
            //show success modal here
        }).catch(err => {
            console.log(err);
        })
    }

    handleDeleteWordRelation = (child, parent) => {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordrelationdetail/' +
            this.state.selectedParentId + '/' + this.state.selectedChildId;
        const wordRelation = new FormData();
        wordRelation.append('parent_id', this.state.selectedParentId);
        wordRelation.append('child_id', this.state.selectedChildId);
        //wordRelation.append('relation', '6');
        axios({
            method: "DELETE",
            url: uri,
            data: wordRelation,
        }).then((res) => {
            console.log(res);
            this.resetWordRelationState();
            //show success modal here
        }).catch(err => {
            console.log(err);
        })
    }

    handleUpdateWordRelation = () => {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordrelationdetail/' +
            this.state.selectedParentId + '/' + this.state.selectedChildId;
        const wordRelation = new FormData();
        wordRelation.append('parent_id', this.state.selectedParentId);
        wordRelation.append('child_id', this.state.selectedChildId);
        wordRelation.append('relation', this.state.relationValue);
        axios({
            method: "PUT",
            url: uri,
            data: wordRelation,
        }).then((res) => {
            console.log(res);
            this.resetWordRelationState();
            //show success modal here
        }).catch(err => {
            console.log(err);
        })
    }

    // Example - Concept://///////////////////////////////////////////////
    handleClickOnConcept = (value) => {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/words/' + value;        
        axios.get(uri)
            .then(res => {
                this.setState({
                    selectedConceptId: value,
                    selectedConcept: res.data.word
                })
            })
    }

    handleExampleInputChange = (id,text) => {        
        this.setState({
            [id]:text,
        })
    }

    //need 2 refactor
    handleSubmitExample = () =>{
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/example';
        const example = new FormData();
        example.append('example_desc',this.state.exampleDesc);
        example.append('keywords',this.state.keywords);
        example.append('source',this.state.source);

        axios.post(uri,example).then(res => {            
            console.log(res);
            axios.get('http://127.0.0.1:8000/pvoexample/api/v1/example/latest')
                .then(response => {
                    this.setState({exampleId:response.data.id});
                    this.handleSetWordExampleRelation();
                    this.resetConceptExampleRelationState();
                    //show success modal here
                })
            
        }).catch(err => {
            console.log(err);
        })
    }

    handleSetWordExampleRelation = () => {        
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/wordexample';
        let exampleConceptRelation = new FormData();
        exampleConceptRelation.append('word_id',this.state.selectedConceptId);
        exampleConceptRelation.append('example_id',this.state.exampleId);
        exampleConceptRelation.append('relation_id',this.state.conceptExampleRelationId);

        axios.post(uri,exampleConceptRelation)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }

    handleConceptExampleRelationChange = (e) => {
        this.setState({
            conceptExampleRelationId: e.target.value
        })
    }

    componentDidMount() {
        this.getWordList();
    }



    render() {
        return (
            <div>
                <NavBar />

                <ConceptExampleRelation
                    wordList={this.state.wordList}
                    clickOnConcept={this.handleClickOnConcept}
                    selectedConcept={this.state.selectedConcept} 
                    handleExampleInputChange = {this.handleExampleInputChange}

                    exampleDesc = {this.state.exampleDesc}
                    keywords = {this.state.keywords}
                    source = {this.state.source}

                    handleSubmitWordExampleRelation = {this.handleSubmitExample}
                    isSetExampleConceptButtonDisabled = {(this.state.selectedConceptId === '')
                        || (this.state.exampleDesc === '')}
                    conceptExampleRelationValue = {this.state.conceptExampleRelationId}
                    handleConceptExampleRelationChange = {this.handleConceptExampleRelationChange}

                    />
                    
            </div >
        );
    }
}

/**
 <ConceptRelation
                    wordList={this.state.wordList}
                    relationValue={this.state.relationValue}
                    handleWordRelationChange={this.handleWordRelationChange}

                    clickOnChild={this.handleClickOnChild}
                    clickOnParent={this.handleClickOnParent}
                    selectedChild={this.state.selectedChild}
                    selectedParent={this.state.selectedParent}

                    wordRelationAction={(this.state.relationValue != '') ? true : false}
                    isSetButtonDisabled={(this.state.relationExist || 
                            (this.state.selectedChildId === '' || 
                            this.state.selectedParentId === '')? true : false)}
                    isUpdateButtonDisabled={(!this.state.relationExist ? true : false)}
                    isDeleteButtonDisabled={(!this.state.relationExist ? true : false)}

                    handleUpdateWordRelation={this.handleUpdateWordRelation}
                    handleSetWordRelation={this.handleSetWordRelation}
                    handleDeleteWordRelation={this.handleDeleteWordRelation}
                   

                />
 */

export default ConceptExampleWrapper;
