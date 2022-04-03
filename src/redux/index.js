import {combineReducers} from 'redux'

import themeReducer from './reducers/themeReducer'
import authReducer from './reducers/authReducer'

export default combineReducers({
    themeReducer,
    authReducer
})
