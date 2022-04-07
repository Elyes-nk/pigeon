import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import ProfilePicture from '../ProfilePicture';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import { getDiscussion } from '../../redux/actions/messagesActions'

const Message = ({ userSelected }) => {
  const user = useSelector((state) => state.authReducer.user)
  const discussion = useSelector((state) => state.messagesReducer.discussion)
  const dispatch = useDispatch()

  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  
  const getMessages = async() => {
    await dispatch(getDiscussion(user?.accessToken,userSelected._id))
  }
 
  // const getMessages = async () => {
  //   try{
  //     // let res = await axios.get("https://pigeon-chat-app-api.herokuapp.com/api/messages/find",
  //     // {
  //     //     id:userSelected._id
  //     // },
  //     // {
  //     //     Headers:{
  //     //         token:user?.accessToken
  //     //     }
  //     // }
  //     // );
  //     // console.log(res);
  //     // setMessages(res.data)
  //           let res = await axios.get("https://pigeon-chat-app-api.herokuapp.com/api/messages/find",
  //           {
  //             id:userSelected._id
  //           },
  //           {
  //               Headers:{
  //                   token: user.accessToken
  //               }
  //           }
  //           );
  //           console.log(res);
  //   }catch(err){
  //       console.log(err);
  //       console.log("msg dnt work");
  //   }
  // }
  useEffect(() => {
    getMessages()
  }, []);

  let message = messages[messages?.length - 1]
  let msg = messages[messages?.length - 1]?.content

  const editMessage = () => {
    if(msg?.length>42){
      msg = msg.substring(0,42)+"..."
    }
  }
  editMessage()

  return(
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Discussion", {id: user?._id}) }>
      <Container>
        <ProfilePicture uri={`https://pigeon-chat-app-api.herokuapp.com/img/${userSelected?.profilePic}`} size={55} />
        <ContainerRight>
          <Name>{userSelected?.username}</Name>
          <MessageContainer>
            <Msg>{msg}</Msg>
            <Time>{message?.createdAt}</Time>
          </MessageContainer>
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

export default Message;
