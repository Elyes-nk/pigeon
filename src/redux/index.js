import {combineReducers} from 'redux'

import themeReducer from './reducers/themeReducer'
import authReducer from './reducers/authReducer'
import usersReducer from './reducers/usersReducer'


export default combineReducers({
    themeReducer,
    authReducer,
    usersReducer
})
