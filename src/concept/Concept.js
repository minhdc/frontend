import React , {Component} from 'react';
import ConceptForm from 'concept/ConceptForm';
import NavBar from 'general/NavBar';


class Concept extends Component{
   

    render(){
        return(
            <div>
            <NavBar/>
            <ConceptForm></ConceptForm>            
            </div>
        );
    }

}

export default Concept;