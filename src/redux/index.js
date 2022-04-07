import {combineReducers} from 'redux'

import themeReducer from './reducers/themeReducer'
import authReducer from './reducers/authReducer'
import messagesReducer from './reducers/messagesReducer'
import storiesReducer from './reducers/storiesReducer'
import usersReducer from './reducers/usersReducer'


export default combineReducers({
    themeReducer,
    authReducer,
    messagesReducer,
    storiesReducer,
    usersReducer
})
