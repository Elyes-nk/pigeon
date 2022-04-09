import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Person from '../../components/Person'


const PeopleScreen = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.authReducer.user)
  const users = useSelector((state) => state.usersReducer.users)
  const [isLoading, setIsLoading] = useState(true);
  
  const getUsersFromServeur = async() => {
    await dispatch(getUsers(user?.accessToken))
    setIsLoading(false)
  }

  useEffect(() => {
    getUsersFromServeur()
  }, []);

  let usersFiltred = users.filter(el => el._id !== user._id)

  return(
    <>
    {isLoading? 
      <Container>
        <ActivityIndicator/>
      </Container>
      :
      <WhiteFlatList
        data={usersFiltred}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={({item}) => item?._id}
      />
    }
    </>

  )}


  const WhiteFlatList = styled.FlatList`
    background-color: ${props => props.theme.BACKGROUND_COLOR};
  `

  const Container = styled.View`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.BACKGROUND_COLOR};
  `



export default PeopleScreen;
