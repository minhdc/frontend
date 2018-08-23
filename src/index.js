import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom';
import WordList from './WordList';
import WelcomePage from './WelcomePage';
import WordRelationList from './WordRelationList';
import Word from './Word';

ReactDOM.render(
    <BrowserRouter>        
        <div>
            <App></App>
            <Route exact path="/" render={() => (
                <WelcomePage/>
            )}/>
            <Route path="/words" component ={Word}/>
            <Route path="/wordexample" component ={WordRelationList}/>
            <Route path="/example" component ={WordList}/>            
            <Route path="/vocabtree" component ={WordList}/>
        </div>

    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
