import React, { Component } from 'react';
import axios from 'axios';
import './word-example.css';
import Example from './WordExampleRelation';
import WordRelation from './WordRelation';
import NavBar from 'general/NavBar';

class WordExampleWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wordlist: [],
        };
        this.getWordList = this.getWordList.bind(this);
    }

    getWordList() {
        const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/words'
        axios.get(uri)
            .then(res => {
                const wordlist = res.data;
                this.setState({ wordlist: wordlist });
            }).catch(e => {
                console.log(e);
            })
    }

    componentWillMount() {
        this.getWordList();
    }

    render() {
        return (
            <div>
                <div id="navbar">
                    <NavBar/>
                </div>

                <div id="wordExampleWrapper">
                    <Example
                        wordlist={this.state.wordlist} />
                </div>
                
                <div id="wordRelation">
                    <WordRelation
                        wordlist={this.state.wordlist}
                    />
                </div>
            </div>
        );
    }
}

export default WordExampleWrapper;