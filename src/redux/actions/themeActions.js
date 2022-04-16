import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native'
import { dark, light } from '../../theme/Themes';

export const initTheme = () => {
    const colorScheme = Appearance.getColorScheme();
    return async dispatch => {
        try{
            let theme = await AsyncStorage.getItem('theme');
            let systemeSelected = await AsyncStorage.getItem('systemeSelected')
            if(theme !== null){
                if(systemeSelected ==="true"){
                    if(colorScheme === "light"){
                        dispatch({
                            type: "INIT_THEME",
                            theme: light,
                            systemeSelected: JSON.parse(systemeSelected)
                        })
                    }else{
                        dispatch({
                            type: "INIT_THEME",
                            theme: dark,
                            systemeSelected: JSON.parse(systemeSelected)
                        })
                    }
                }else{
                    dispatch({
                        type: "INIT_THEME",
                        theme: JSON.parse(theme),
                        systemeSelected: JSON.parse(systemeSelected)
                    })
                }
            }
        }catch(err){
            console.log(err);
        }
    }
};
  
export const switchTheme = (theme, systemeSelected) => { 
    return async dispatch => {
        try{
            await AsyncStorage.setItem('theme', JSON.stringify(theme))
            await AsyncStorage.setItem('systemeSelected', JSON.stringify(systemeSelected))
            dispatch({
                type: "SWITCH_THEME",
                theme: theme,
                systemeSelected: systemeSelected
            })
        }catch(err){
            console.log(err);
        }
    }
};