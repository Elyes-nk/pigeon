import React, { useState, useEffect } from 'react';
import { Keyboard, Dimensions, ActivityIndicator, Text } from 'react-native';
import MessageSent from '../../components/MessageSent'
import MessageRecieved from '../../components/MessageRecieved'
import MessagesFooter from '../../components/MessagesFooter'
import styled from 'styled-components';
import { useSelector} from 'react-redux';
import axios from "axios";

const MessagesScreen = ({route}) => {

  const  { params : {userSelected} } = route;
  const user = useSelector((state) => state.authReducer.user)
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState(Dimensions.get('window').height);
  const [messages, setMessages] = useState([]);
  const [discussionId, setDiscussionId] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const checkDiscussion = async () => {
    try {
      const res = await axios.get(`https://pigeon-chat-app-api.herokuapp.com/api/discussions/find/${user._id}/${userSelected._id}`,
      {
        headers: {'token': user.accessToken}
      })
      if(res.data){
        getMessages(res.data._id)
        setDiscussionId(res.data._id)
      }else{
        createDiscussion()
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const createDiscussion = async () => {
    try {
      const res = await axios.post(`https://pigeon-chat-app-api.herokuapp.com/api/discussions/`,
      {
        senderId:user._id,
        receiverId:userSelected._id
      },
      {
        headers: {'token': user.accessToken}
      })
      setDiscussionId(res.data._id)
      setIsLoading(false)
    } catch (err) {
      console.log(err);
    }
  }


  const getMessages = async (discussionId) => {
    try {
      const res = await axios.get(`https://pigeon-chat-app-api.herokuapp.com/api/messages/find/${discussionId}`,
      {
        headers: {'token': user.accessToken}
      })
      setMessages(res.data.reverse());
      setIsLoading(false)
    } catch (err) {
      console.log(err);
    }
  };


  const handleSubmit = async () => {
    try {
      const res = await axios.post(`https://pigeon-chat-app-api.herokuapp.com/api/messages`,
      {
        discussionId: discussionId,
        text: newMessage,
        sender: user._id
      },
      {
        headers: {'token': user.accessToken}
      })
      getMessages(discussionId)
      setNewMessage("")
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    checkDiscussion();
  }, []);

  useEffect(() => {
    getMessages(discussionId)
  }, [discussionId]);


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',
      (e) => { setHeight(Dimensions.get('window').height - e.endCoordinates.height); },
    );
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
      () => { setHeight(Dimensions.get('window').height); },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return(
  <>
    {isLoading ? 
        <Container>
          <ActivityIndicator/>
        </Container>
        :
        <>
          <List
            height={height}
            data={messages}
            renderItem={({item}) => 
                item.sender === user._id ?
                  <MessageSent text={item.text}/>
                :
                  <MessageRecieved profilePic={userSelected?.profilePic} text={item.text} />
            }
            keyExtractor={item => item._id}
            inverted
          />
          <MessagesFooter newMessage={newMessage} setNewMessage={setNewMessage} handleSubmit={handleSubmit} />
        </>
    }
  </>
)}

const List = styled.FlatList`
  height: ${props => props.height}px;
  width: 100%;
  background-color: ${props => props.theme.BACKGROUND_COLOR};
`
const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.BACKGROUND_COLOR};
  align-items: center;
  justify-content: center;
`


export default MessagesScreen;
