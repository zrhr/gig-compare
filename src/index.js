import React from 'react';
import { render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Root from './components/Root';
import rootReducer from './reducers';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const store = createStore(rootReducer,{},
    composeWithDevTools(
        applyMiddleware(thunk,logger)
    )
)
render(
    <Root store = {store}/>
     , document.getElementById('root')
)
