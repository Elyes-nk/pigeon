export const initTheme = () => {
    return async dispatch => {
        try{
            let theme = await AsyncStorage.getItem('theme');
            if(theme !== null){
                dispatch({
                    type: "INIT_THEME",
                    theme: theme
                })
            }
        }catch(err){
            console.log(err);
        }
    }
};
  

export const switchTheme = (theme) => { 
    return async dispatch => {
        try{
            await AsyncStorage.setItem('theme', theme)
            dispatch({
                type: "SWITCH_THEME",
                theme: theme
            })
        }catch(err){
            console.log(err);
        }
    }
};