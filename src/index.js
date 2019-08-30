import React from 'react';
import { render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Root from './components/Root';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk,logger)
    )
)
render(
    <Root store = {store}/>
     , document.getElementById('root')
)
