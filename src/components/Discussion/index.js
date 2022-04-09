import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import ProfilePicture from '../ProfilePicture';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useSelector} from 'react-redux';

const Discussion = ({ discussion }) => {

  const user = useSelector((state) => state.authReducer.user)
  let userSelected = discussion?.members?.find( u => u._id !== user._id)

  const navigation = useNavigation();
 
  return(
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Messages", {id: discussion?._id}) }>
      <Container>
        <ProfilePicture uri={`https://pigeon-chat-app-api.herokuapp.com/img/${userSelected?.profilePic}`} size={55} />
        <ContainerRight>
          <Name>{userSelected?.username}</Name>
          {/* <MessageContainer>
            <Msg>{msg}</Msg>
            <Time>{message?.createdAt}</Time>
          </MessageContainer> */}
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
  margin-left: 2.5%;
  width: 80%;
`

const MessageContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const Name = styled.Text`
  font-size: 18px;
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
