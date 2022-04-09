import React, { useState, useEffect } from 'react';
import { Keyboard, Dimensions, ActivityIndicator } from 'react-native';
import MessageSent from '../../components/MessageSent'
import MessageRecieved from '../../components/MessageRecieved'
import DiscussionFooter from '../../components/DiscussionFooter'
import styled from 'styled-components';
import { useSelector} from 'react-redux';

const MessagesScreen = ({route}) => {

  const { params : {id} } = route;
  const user = useSelector((state) => state.authReducer.user)
  const [isLoading, setIsLoading] = useState(false);
  const [height, setHeight] = useState(Dimensions.get('window').height);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("https://pigeon-chat-app-api.herokuapp.com/api/messages/",
        {
          discussionId : id
        });
        setMessages(res.data);
        setIsLoading(false)
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [id]);

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
            data={messages.reverse()}
            renderItem={({item}) => 
                item.sender._id === user._id ?
                  <MessageSent message={item.text}/>
                :
                  <MessageRecieved message={item.text} />
            }
            keyExtractor={({item}) => item._id}
            inverted
          />
          <DiscussionFooter />
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
