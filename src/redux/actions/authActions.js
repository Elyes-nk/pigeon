import AsyncStorage from '@react-native-async-storage/async-storage';

export const init = () => {
    return async dispatch => {
        let user = await AsyncStorage.getItem('user');
        if(token !== null){
            dispatch({
                type: "INIT",
                user: user
            })
        }else{
            dispatch({
                type: "INIT",
                user: null
            })
        }
    }
  };
  

export const login = (username, password) => { 
    return async dispatch => {
        try{
            let user = await axios.post("",{
                username,
                password
            });
            await AsyncStorage.setItem('user', user)
            dispatch({
                type: "LOGIN_START",
                user: user
            })
        }catch(err){

        }
    }
};
  

export const logout = () => { 
    return async dispatch => {
        try{
            await AsyncStorage.deleteItem('user')
            dispatch({
                type: "LOGIN_START",
                user: null
            })
        }catch(err){

        }
    }
};