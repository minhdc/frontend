import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from 'general/WelcomePage.js';
import Concept from 'concept/Concept.js';
import ConceptExampleWrapper from 'concept-example/ConceptExampleWrapper.js';
import ExampleSearch from './example/ExampleSearch';
import VocabTree from './vocab-tree/VocabTree';

ReactDOM.render(
    <BrowserRouter>        
        <div>            
            <Route exact path="/" render={() => (
                <WelcomePage/>
            )}/>
            <Route path="/words" component ={Concept}/>
            <Route path="/wordexample" component ={ConceptExampleWrapper}/>
            <Route path="/example" component ={ExampleSearch}/>            
            <Route path="/vocabtree" component ={VocabTree}/>
        </div>

    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
