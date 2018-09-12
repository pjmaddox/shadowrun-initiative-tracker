import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import InitiativeApp from './stores/reducers/initiativeApp.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const appStore = createStore(InitiativeApp);

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();