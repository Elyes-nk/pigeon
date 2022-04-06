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
                Headers:{
                    token: token
                }
            }
            );
            console.log(res);
            dispatch({
                type: "GET_MESSAGES",
                messages: res.data
            })
        }catch(err){
            console.log(err);
            console.log("messages dont work");
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
                Headers:{
                    token: token
                }
            }
            );
            dispatch({
                type: "GET_DISCUSSION",
                discussion: res.data
            })
        }catch(err){
            console.log(err);
            console.log("discu dont work");
        }
    }
};












