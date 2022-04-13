import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Person from '../../components/Person'


const PeopleScreen = () => {
  
  const user = useSelector((state) => state.authReducer.user)
  const users = useSelector((state) => state.usersReducer.users)
    
  let usersFiltred = users.filter(el => el._id !== user._id)

  return(  
      <WhiteFlatList
        data={usersFiltred}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={item => item?._id}
      />
  )}

  const WhiteFlatList = styled.FlatList`
    background-color: ${props => props.theme.BACKGROUND_COLOR};
  `

export default PeopleScreen;
