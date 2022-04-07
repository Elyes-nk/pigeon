import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Message from '../../components/Message';
import Stories from '../../components/Stories'
import { getStories } from '../../redux/actions/storiesActions';
import { getUsers } from '../../redux/actions/usersActions';


const MessagesScreen = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.authReducer.user)
  const users = useSelector((state) => state.usersReducer.users)
  const stories = useSelector((state) => state.storiesReducer.stories)
  const [usersFiltred, setUsersFiltred] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFromServeur = async() => {
    await dispatch(getUsers(user?.accessToken))
    await dispatch(getStories(user?.accessToken))
    await setUsersFiltred(users.filter(el => el._id !== user._id))
    setIsLoading(false)
  }

  useEffect(() => {
    getFromServeur()
  }, []);

  const filterStories = () => {
    let storiesFiltred = []
    stories?.map(el => {
      if(!storiesFiltred.includes(el.user)){
        filterStories.push(el.user)
      }
    })
  }



  const WhiteFlatList = styled.FlatList`
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
        <WhiteFlatList
          data={users}
          renderItem={({item}) => <Message userSelected={item} />}
          keyExtractor={({id}) => id}
          ListHeaderComponent={Stories}
        />
      }
    </>
)}




export default MessagesScreen;
