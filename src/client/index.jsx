import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import {watchHelloCall,watchIndividualRegistrationCall} from './store/sagas/index';
import RootReducer from './store/reducers/index';
import './styles/main.scss'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchHelloCall);
sagaMiddleware.run(watchIndividualRegistrationCall);



ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>,
        document.getElementById('app'),
);