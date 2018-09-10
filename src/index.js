import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import {App,App2} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route path = {"/cos/:page2"} component= {App2} />
        <Route component={App} />  
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'))

registerServiceWorker();
