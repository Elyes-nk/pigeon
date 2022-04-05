import {combineReducers} from 'redux'

import themeReducer from './reducers/themeReducer'
import authReducer from './reducers/authReducer'
import messagesReducer from './reducers/messagesReducer'
import usersReducer from './reducers/usersReducer'


export default combineReducers({
    themeReducer,
    authReducer,
    messagesReducer,
    usersReducer
})
