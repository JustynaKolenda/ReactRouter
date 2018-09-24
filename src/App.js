import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          xxTo get started, edit <code>src/App.js</code> and save to reload.
          <NavLink to={"/cos/2"} className="button" >button</NavLink>
        </p>
      </div>
    );
  }
}

export class App2 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.match.params.nowy}</h1>
        </header>
        <p className="App-intro">
          cfgafwkeuryoi8aw
        </p>
      </div>
      
    );
  }
}


