import React, { useState, useEffect } from 'react';
import { Keyboard, Dimensions, ActivityIndicator } from 'react-native';
import MessageSent from '../../components/MessageSent'
import MessageRecieved from '../../components/MessageRecieved'
import DiscussionFooter from '../../components/DiscussionFooter'
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { getDiscussion } from '../../redux/actions/messagesActions';

const DiscussionScreen = ({route}) => {
  const dispatch = useDispatch()
  const { params : {id} } = route;
  const user = useSelector((state) => state.authReducer.user)
  const discussion = useSelector((state) => state.messagesReducer.discussion)
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState(Dimensions.get('window').height);


  const getDiscussionFromServeur = async() => {
    await dispatch(getDiscussion(user.token, id))
    setIsLoading(false)
  }

  useEffect(() => {
    getDiscussionFromServeur()
  }, []);


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
    background-color: ${props => props.theme.BACKGROUND_COLOR};
  `
  const Container = styled.View`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.BACKGROUND_COLOR};
    align-items: center;
    justify-content: center;
  `

  return(
  <>
    {isLoading ? 
        <Container>
          <ActivityIndicator/>
        </Container>
        :
        <>
          <List
            data={discussion.reverse()}
            renderItem={({item}) => 
                item.sender._id === user._id ?
                  <MessageSent message={item.content}/>
                :
                  <MessageRecieved message={item.content} />
            }
            keyExtractor={({id}) => id}
            inverted
          />
          <DiscussionFooter />
        </>
    }
  </>
)}

export default DiscussionScreen;
