import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as store from './store/store';

const Counter = store.connect(({ count }) => ({ count }))(() => null); 

class App extends Component {
  render() {
    return (
      <store.Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Counter />
      </store.Provider>
    );
  }
}

export default App;
