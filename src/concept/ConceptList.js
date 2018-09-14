import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

import ConceptItem from './ConceptItem';

import './concept.css';
class ConceptList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div id="wordList">
                <ListGroup bsClass="custom-listgroup">
                    {this.props.wordList.map(word => (
                        <div key={word.id}>
                            <ConceptItem
                                wordId={word.id}
                                handleClickOnWord={this.props.handleClickOnWord}
                                isActive={false}
                                word={word.word}
                            />
                        </div>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default ConceptList;