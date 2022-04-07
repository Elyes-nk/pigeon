import axios from 'axios'

export const GET_MESSAGES = 'GET_MESSAGES'
export const GET_DISCUSSION = 'GET_DISCUSSION'


export const getMessages = (token) => { 
    return async dispatch => {
        try{
            let res = await axios.get("https://pigeon-chat-app-api.herokuapp.com/api/messages/find",
            {
                id: id
            },
            {
                headers:{
                    "token": token
                }
            }
            );
            dispatch({
                type: "GET_MESSAGES",
                messages: res.data
            })
        }catch(err){
            console.log(err);
        }
    }
};

export const getDiscussion = (token, id) => { 
    return async dispatch => {
        try{
            let res = await axios.get("https://pigeon-chat-app-api.herokuapp.com/api/messages/find",
            {
                id: id
            },
            {
                headers:{
                    "token": token
                }
            }
            );
            dispatch({
                type: "GET_DISCUSSION",
                discussion: res.data
            })
        }catch(err){
            console.log(err);
        }
    }
};












