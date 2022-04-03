import React from 'react';
import styled from 'styled-components';
import Message from '../../components/Message';
import Stories from '../../components/Stories'
import {useSelector} from 'react-redux';

const messages = [
  {
    id: 1,
    user: {
      name: "elyes",
      image: "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
    },
    content: "hello bro hello hello hello batardazeazeazeazeaeazeaz",
    time: "22:30"
  },
  {
    id: 2,
    user: {
      name: "elyes",
      image: "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
    },
    content: "hello bro",
    time: "22:30"
  },
  {
    id: 3,
    user: {
      name: "elyes",
      image: "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
    },
    content: "hello bro",
    time: "22:30"
  },
]

const MessagesScreen = () => {

  const theme = useSelector((state) => state.themeReducer.theme )
  const WhiteFlatList = styled.FlatList`
      background-color: ${theme.BACKGROUND_COLOR};
  `
  return(
    <WhiteFlatList
      data={messages}
      renderItem={({item}) => <Message message={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Stories}
    />
)}




export default MessagesScreen;
