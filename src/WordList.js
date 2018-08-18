import React, { Component } from 'react';
import axios from 'axios';
import { Col, Grid, Row ,Button} from 'react-bootstrap';

//axios.defaults.withCredentials = true;

class WordList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            words: []
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleUpdate(event){
        try{
            //const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/words/' + event.target.name;
            //axios.put(uri)
        } catch(e){
            console.log(e);
        }
    }

    handleDelete(event){
        try{
            console.log(event.target.name);
            const uri = 'http://127.0.0.1:8000/pvoexample/api/v1/words/'+event.target.name;
            axios({
                url: uri,
                method: 'DELETE' 
            })         
            .then(function(response){
                console.log(response)
            })
            .then(function(error){
                console.log(error)
            });
            //fetch(uri + '/' + event.target.name,{method:'delete'})
            //.then(response => response.json());
        } catch(e){
            console.log(e);
        }
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
                                <Col xs={2} md={2} lg={2}>
                                    <h1>{item.word}</h1>
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <span>{item.definition}</span>
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                <span><Button name={item.id} onClick={this.handleUpdate}>Update</Button></span>
                                <span><Button name={item.id} onClick={this.handleDelete}>Delete</Button></span>
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