import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import ProfilePicture from '../ProfilePicture';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector} from 'react-redux';
import axios from 'axios';

const Discussion = ({ discussion }) => {

  const user = useSelector((state) => state.authReducer.user)
  let userSelectedId = discussion?.members?.find( u => u !== user._id)

  const [userSelected, setUserSelected] = useState(null);

  const getUserSelected = async () => {
    try{  
      const res = await axios.get(`https://pigeon-chat-app-api.herokuapp.com/api/users/find/${userSelectedId}`,
      {
        headers: {'token': user.accessToken}
      })
      setUserSelected(res.data)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getUserSelected()
  }, []);


  const navigation = useNavigation();
 
  return(
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Messages", {userSelected: userSelected}) }>
      <Container>
        <ProfilePicture uri={userSelected?.profilePic} size={55} />
        <ContainerRight>
          <Name>{userSelected?.username}</Name>
        </ContainerRight>
      </Container> 
    </TouchableWithoutFeedback>
)}


const Container = styled.View`
  flex-direction: row;
  height: 60px;
  width: 100%;
  align-content: center;
  margin: 10px;
`

const ContainerRight = styled.View`
  margin-left: 10px;
  width: 80%;
  justify-content: center;
`

const MessageContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const Name = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.TEXT_PRIMARY_COLOR};
`

const Msg = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.TEXT_SECONDARY_COLOR};
`

const Time = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.TEXT_SECONDARY_COLOR};

`

export default Discussion;
