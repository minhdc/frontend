import React , {Component} from 'react';
import NavBar from 'general/NavBar';
import axios from 'axios';
import {Grid,Row,Col,ListGroup,ListGroupItem} from 'react-bootstrap';


class WordExample extends Component{

    constructor(props){
        super(props);
        this.state = {
            wordlist: []
        };
        this.getWordList = this.getWordList.bind(this);
    }

    getWordList(){
        axios.get('http://127.0.0.1:8000/pvoexample/api/v1/words')
        .then(res => {
            const wordlist = res.data;
            this.setState({wordlist:wordlist});
        }).catch(e => {
            console.log(e);
        })
    }

    componentDidMount(){
        this.getWordList();
    }



    render(){
        return(
            <div>
                <NavBar/>
                <Grid>
                    <Row className="show-grid">
                        <Col xs = {4} md = {4} lg = {4} >
                        <ListGroup id="left-wordlist">
                            {this.state.wordlist.map(word => (
                                <div key={word.id}>
                                    <ListGroupItem>
                                        {word.word}
                                    </ListGroupItem>
                                </div>
                            ))}
                        </ListGroup>
                        </Col>
                        <Col xs = {4} md = {4} lg = {4} >
                        
                        </Col>
                        <Col xs = {4} md = {4} lg = {4} >
                        <ListGroup id="left-wordlist">
                            {this.state.wordlist.map(word => (
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
            </div>
        );
    }
}

export default WordExample;