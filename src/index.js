import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from 'general/WelcomePage.js';
import Word from 'word/Word.js';
import WordExampleWrapper from 'word-example/WordExampleWrapper.js';
import ExampleSearch from './example-search/ExampleSearch';
import VocabTree from './vocab-tree/VocabTree';

ReactDOM.render(
    <BrowserRouter>        
        <div>            
            <Route exact path="/" render={() => (
                <WelcomePage/>
            )}/>
            <Route path="/words" component ={Word}/>
            <Route path="/wordexample" component ={WordExampleWrapper}/>
            <Route path="/example" component ={ExampleSearch}/>            
            <Route path="/vocabtree" component ={VocabTree}/>
        </div>

    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
