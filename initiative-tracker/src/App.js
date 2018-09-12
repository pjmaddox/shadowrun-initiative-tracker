import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleCombatant from './components/SingleCombatant';
import { createStore } from "redux";
import initiativeApp from "./stores/reducers/initiativeApp.js";
import CombatantList from './components/CombatantList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React2</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div className="combatantAppContainer">
          <h2>This is the container for the app itself.</h2>
          {/* <CombatantList listOfCombatants={this.state.combatants} /> */}
      </div>
    </div>
  );
};

export default App;
