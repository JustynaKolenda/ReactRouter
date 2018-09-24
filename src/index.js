import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import {App,App2} from './App';
import {List} from './list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route path = {"/cos/:page2"} component= {App2} />
        <Route path = {"/list"} component= {List} />  
        <Route component={App} />    
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'))

registerServiceWorker();
