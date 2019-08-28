import React from 'react';
import { render} from 'react-dom';
import {createStore} from 'redux';

import Root from './components/Root';
import rootReducer from './reducers';

const store = createStore(rootReducer)

render(
    <Root store = {store}/>
     , document.getElementById('root')
)
