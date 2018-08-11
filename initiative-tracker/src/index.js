import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//thing
import { createStore } from 'redux';
import initiativeApp from './stores/reducers/combatantListReducers.js'
import { addCombatant, removeCombatant, clearAll, updateInitiative, toggleDead, toggleCombatantPass, newPass } from './stores/actions/actions.js'

const store = createStore(initiativeApp);

//Test actions:
//__________---
//Initial State
console.log(store.getState());

const unsubFunction = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addCombatant("asdasd1"));
store.dispatch(addCombatant("asdasd2"));
store.dispatch(addCombatant("asdasd3"));


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();