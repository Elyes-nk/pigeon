import axios from 'axios'

export const GET_USERS = 'GET_USERS'

export const getUsers = (token) => { 
    return async dispatch => {
        try{
            let res = await axios.get("https://pigeon-chat-app-api.herokuapp.com/api/users/",
            {
                headers:{
                    "token": token
                }
            }
            );
            dispatch({
                type: "GET_USERS",
                users: res.data
            })
        }catch(err){
            console.log(err);
        }
    }
};
