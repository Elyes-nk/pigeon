import { light } from '../../theme/Themes'

const initialState = {
    theme : light
}

const themeReducer = (state = initialState, action) => {
    switch(action.type){
        case "SWITCH_THEME":
            return { theme : action.theme }
        default:
            return state;
    }
}

export default themeReducer;