import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import {ListPage} from './listPage';
import Cart from './cart';
import registerServiceWorker from './registerServiceWorker';
import ProductPage from './productPage';
import {Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import {reducer} from './reduxApp';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(reducer, { productList: [] },enhancers);

 ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path = {"/product/cart"} component= {Cart} />
        <Route path = {"/product/:element"} component= {ProductPage} />
      
        <Route path = {""} component= {ListPage} />  
     
      </Switch>
    </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))

registerServiceWorker(); 
