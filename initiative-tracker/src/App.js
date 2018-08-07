import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleCombatant from './components/SingleCombatant';
import SpyProfileRow from './components/SpyProfileRow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <SpyProfileRow rowValue={"aiygeyc"} rowLabel={"iuwehfihw"}/>
          {/* <SingleCombatant id={1} name={"charles"} /> */}
        </div>
      </div>
    );
  }
}

export default App;
