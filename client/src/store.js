import {createStore, applyMiddleware} from 'redux'

import {underTheHoodReducer} from './reducers';

export default createStore(underTheHoodReducer, applyMiddleware(thunk));






