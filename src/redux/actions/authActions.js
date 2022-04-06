import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export const init = () => {
    return async dispatch => {
        let user = await AsyncStorage.getItem('user');
        if(user !== null){
            dispatch({
                type: "INIT",
                user: JSON.parse(user)
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
            let user = await axios.post("https://pigeon-chat-app-api.herokuapp.com/api/auth/login",{
                username,
                password
            });
            await AsyncStorage.setItem('user', JSON.stringify(user.data))
            dispatch({
                type: "LOGIN",
                user: user.data
            })
        }catch(err){
            console.log(err);
        }
    }
};


export const register = (email, username, password) => { 
    return async dispatch => {
        try{
            let user = await axios.post("https://pigeon-chat-app-api.herokuapp.com/api/auth/register",{
                email,
                username,
                password
            });
            await AsyncStorage.setItem('user', JSON.stringify(user.data))
            dispatch({
                type: "REGISTER",
                user: user.data
            })
        }catch(err){
            console.log(err);
        }
    }
};
  

export const logout = () => { 
    return async dispatch => {
        try{
            await AsyncStorage.removeItem('user')
            dispatch({
                type: "LOGOUT",
                user: null
            })
        }catch(err){
            console.log(err);
        }
    }
};