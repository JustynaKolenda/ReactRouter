import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/App.css';
import {ListPage} from './Components/listPage';
import Cart from './Components/cart';
import registerServiceWorker from './registerServiceWorker';
import ProductPage from './Components/productPage';
import {Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import {reducer} from './Redux/reduxApp';

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
        <Route component= {ListPage} />  
     
      </Switch>
    </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))

registerServiceWorker(); 
