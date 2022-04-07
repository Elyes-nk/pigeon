import axios from 'axios'

export const GET_STORIES = 'GET_STORIES'


export const getStories = (token) => { 
    return async dispatch => {
        console.log("token",token);
        try{
            let res = await axios.get("https://pigeon-chat-app-api.herokuapp.com/api/stories",
            {
                headers:{
                    "token": token
                }
            }
            );
            dispatch({
                type: "GET_STORIES",
                stories: res.data
            })
        }catch(err){
            console.log(err);
        }
    }
};




