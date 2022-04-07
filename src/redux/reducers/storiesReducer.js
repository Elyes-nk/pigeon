import { GET_STORIES } from '../actions/storiesActions'

const initialState = {
  stories: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES:
        return { 
            stories: action.stories 
        }

    default:
      return state
  }
}
