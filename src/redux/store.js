import LoginReducer from './logins/LoginReducer'
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
const store= createStore(LoginReducer, composeWithDevTools());

export default store;       