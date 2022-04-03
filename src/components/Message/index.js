import React, { useState, useEffect, useContext}  from 'react';
import styled from 'styled-components'
import ProfilePicture from '../ProfilePicture';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/Context';

const Message = ({ message }) => {
  const { theme } = useContext(Context)

  const navigation = useNavigation();

  let msg = message?.content
  const editMessage = () => {
    if(msg.length>42){
      msg = msg.substring(0,42)+"..."
    }
  }
  editMessage()



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
      color: ${theme.TEXT_PRIMARY_COLOR};
  `

  const Msg = styled.Text`
      font-size: 12px;
      color: ${theme.TEXT_SECONDARY_COLOR};
  `

  const Time = styled.Text`
      font-size: 12px;
      color: ${theme.TEXT_SECONDARY_COLOR};

  `
    
  return(
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Discussion") }>
      <Container>
        <ProfilePicture uri={message.user.image} size={55}/>
        <ContainerRight>
          <Name>{message?.user.name}</Name>
          <MessageContainer>
            <Msg>{msg}</Msg>
            <Time>{message?.time}</Time>
          </MessageContainer>
        </ContainerRight>
      </Container>
    </TouchableWithoutFeedback>
)}

export default Message;
