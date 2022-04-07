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
  const [isLoading, setIsLoading] = useState(false);
  const [height, setHeight] = useState(Dimensions.get('window').height);

  // const discussion = useSelector((state) => state.messagesReducer.discussion)
  // const getDiscussionFromServeur = async() => {
  //   await dispatch(getDiscussion(user.token, id))
  //   setIsLoading(false)
  // }

  // useEffect(() => {
  //   getDiscussionFromServeur()
  // }, []);
  
  //FOR PRESENTATION
  let discussion = [
    {
      sender:{
        _id:"624f4a9c72204800232fce58",
      },
      receiver:{
        _id:"624f4a9c7220480azea0232fce58",
      },
      content:"Coucou"
    },
    {
      receiver:{
        _id:"624f4a9c72204800232fce58",
      },
      sender:{
        _id:"624f4a9c7220480azea0232fce58",
      },
      content:"Salut"
    },
    {
      sender:{
        _id:"624f4a9c72204800232fce58",
      },
      receiver:{
        _id:"624f4a9c7220480azea0232fce58",
      },
      content:"Tu va bien?"
    },
    {
      receiver:{
        _id:"624f4a9c72204800232fce58",
      },
      sender:{
        _id:"624f4a9c7220480azea0232fce58",
      },
      content:"Tranquille"
    },
    {
      sender:{
        _id:"624f4a9c72204800232fce58",
      },
      receiver:{
        _id:"624f4a9c7220480azea0232fce58",
      },
      content:"Tu compris quelque chose lors du cours de Zak sensei?"
    },
    {
      receiver:{
        _id:"624f4a9c72204800232fce58",
      },
      sender:{
        _id:"624f4a9c7220480azea0232fce58",
      },
      content:"Franchement j'ai rien pigé, j'ai passé mes journées sur tiktok"
    },
    {
      sender:{
        _id:"624f4a9c72204800232fce58",
      },
      receiver:{
        _id:"624f4a9c7220480azea0232fce58",
      },
      content:"Inchalah il va te détruire sur la note de projet"
    },
    {
      receiver:{
        _id:"624f4a9c72204800232fce58",
      },
      sender:{
        _id:"624f4a9c7220480azea0232fce58",
      },
      content:"Mdrr, c'est pas ma faute si je suis null, mais malgré ma nulité j'ai pue voir que zak c'est le meilleur"
    },
  ]

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


export default DiscussionScreen;
