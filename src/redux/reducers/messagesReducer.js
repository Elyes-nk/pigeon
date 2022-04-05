import { GET_MESSAGES } from '../actions/messagesActions'
import { GET_DISCUSSION } from '../actions/messagesActions'

const initialState = {
  messages: [],
  discussion: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
        return { 
            messages: action.payload 
        }
    case GET_DISCUSSION:
        return { 
            discussion: action.payload 
        }
    default:
      return state
  }
}
