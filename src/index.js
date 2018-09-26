import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import {App,App2} from './App';
import {ListPage} from './listPage';
import registerServiceWorker from './registerServiceWorker';
import { ProductPage } from './productPage';

ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route path = {"/list/product/:element"} component= {ProductPage} />
        <Route path = {"/cos/:page2"} component= {App2} />
        <Route path = {"/list"} component= {ListPage} />  
        <Route component={App} />    
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'))

registerServiceWorker();
