import React, { useState, useEffect } from 'react';
import { Keyboard, Dimensions } from 'react-native';
import MessageSent from '../../components/MessageSent'
import MessageRecieved from '../../components/MessageRecieved'
import DiscussionFooter from '../../components/DiscussionFooter'
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const DiscussionScreen = () => {

  const messages = [
    {
      id:1,
      type: "sent",
      content: "hey bilal",
    },
    {
      id:2,
      type: "recieved",
      content: "hey ",
    },
    {
      id:3,
      type: "sent",
      content: "ça va ?",
    },
    {
      id:4,
      type: "recieved",
      content: "tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquilletranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquilletranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille toi ",
    },
    {
      id:5,
      type: "sent",
      content: "tranquille",
    },
    {
      id:6,
      type: "sent",
      content: "tranquille",
    },
    {
      id:7,
      type: "sent",
      content: "tranquille",
    },
    {
      id:8,
      type: "sent",
      content: "tranquille",
    },
    {
      id:9,
      type: "sent",
      content: "tranquille",
    },
    {
      id:10,
      type: "sent",
      content: "tranquille",
    },
    {
      id:11,
      type: "sent",
      content: "tranquille",
    },
    {
      id:12,
      type: "sent",
      content: "tranquille",
    },
    {
      id:13,
      type: "sent",
      content: "tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille tranquille",
    },
    {
      id:14,
      type: "recieved",
      content: "TG on a compris ",
    },
  ]

  const theme = useSelector((state) => state.themeReducer.theme )  
  const [height, setHeight] = useState(Dimensions.get('window').height);

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

  const List = styled.FlatList`
    height: ${height}px;
    width: 100%;
    background-color: ${theme.BACKGROUND_COLOR};
  `

  return(
  <>
    <List
      data={messages.reverse()}
      renderItem={({item}) => 
          item.type === "sent" ?
            <MessageSent message={item.content}/>
          :
            <MessageRecieved message={item.content} />
      }
      keyExtractor={({id}) => id}
      inverted
    />
    <DiscussionFooter />
  </>
)}




export default DiscussionScreen;
