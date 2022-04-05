import React from 'react';
import styled from 'styled-components'
import ProfilePicture from '../ProfilePicture';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Message = ({ userSelected }) => {
  const user = useSelector((state) => state.authReducer.user)
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const getMessages = () => {
        try{
          let res = await axios.post("https://pigeon-chat-app-api.herokuapp.com/api/messages/find",
          {
              id: userSelected._id
          },
          {
              Headers:{
                  token: user.token
              }
          }
          );
          setMessages(res.data)
      }catch(err){
          console.log(err);
      }
    }
    getMessages()
  }, []);

  let message = messages[messages.length - 1]
  let msg = messages[messages.length - 1]?.content

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
    
  return(
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Discussion") }>
      <Container>
        <ProfilePicture uri={`https://pigeon-chat-app-api.herokuapp.com/img/${userSelected?.profilePic}`} size={55} />
        <ContainerRight>
          <Name>{user?.username}</Name>
          <MessageContainer>
            <Msg>{msg}</Msg>
            <Time>{message?.createdAt}</Time>
          </MessageContainer>
        </ContainerRight>
      </Container>
    </TouchableWithoutFeedback>
)}

export default Message;
