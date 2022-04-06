import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Person from '../../components/Person'


const PeopleScreen = () => {
  const user = useSelector((state) => state.authReducer.user)
  const users = useSelector((state) => state.usersReducer.users)
  const [usersFiltred, setUsersFiltred] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getUsersFromServeur = async() => {
    await setUsersFiltred(users.filter(el => el._id !== user._id))
    setIsLoading(false)
  }

  useEffect(() => {
    getUsersFromServeur()
  }, []);


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



export default PeopleScreen;
