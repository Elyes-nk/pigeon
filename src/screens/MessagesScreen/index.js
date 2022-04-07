import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Message from '../../components/Message';
import Stories from '../../components/Stories'
import { getUsers } from '../../redux/actions/usersActions';


const MessagesScreen = () => {

  const dispatch = useDispatch()

  const user = useSelector((state) => state.authReducer.user)
  const users = useSelector((state) => state.usersReducer.users)

  const [usersFiltred, setUsersFiltred] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFromServeur = async() => {
    await dispatch(getUsers(user?.accessToken))
    await setUsersFiltred(users.filter(el => el._id !== user._id))
    setIsLoading(false)
  }

  useEffect(() => {
    getFromServeur()
  }, []);

  return(
    <>
      {isLoading ? 
        <Container>
          <ActivityIndicator/>
        </Container>
        :
        <WhiteFlatList
          data={usersFiltred}
          renderItem={({user}) => <Message userSelected={user} />}
          keyExtractor={({user}) => user?._id}
          ListHeaderComponent={Stories}
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
  background-color: ${props => props.theme.BACKGROUND_COLOR};
  align-items: center;
  justify-content: center;
`

export default MessagesScreen;
