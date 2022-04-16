import { light } from '../../theme/Themes'

const initialState = {
    theme : light,
    systemeSelected : false
}

const themeReducer = (state = initialState, action) => {
    switch(action.type){
        case "INIT_THEME":
            return {
                theme: action.theme,
                systemeSelected: action.systemeSelected
            };
        case "SWITCH_THEME":
            return { 
                theme : action.theme,
                systemeSelected: action.systemeSelected
            };
        default:
            return state;
    }
}

export default themeReducer;