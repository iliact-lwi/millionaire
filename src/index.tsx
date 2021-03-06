import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

import './scss/main.scss';

import App from './App';
import store from './store/store';

const WithProvider = (
    <React.StrictMode>
        <Provider store={ store }>
            <App />
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(WithProvider, document.getElementById('millionaire'));

reportWebVitals();