import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from "../ProfilePicture";
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Story = (user) => {

  var username = user.username
  const editUsername = () => {
    if(username?.length>9){
      username = username.substring(0,8)+"..."
    }
  }
  editUsername()
  
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Story", { userId: user._id });
  }

  return (
    <Container >
      <TouchableWithoutFeedback onPress={onPress}> 
        <ProfilePicture 
          uri={`https://pigeon-chat-app-api.herokuapp.com/img/${user?.profilePic}`} 
          size={60} />
      </TouchableWithoutFeedback>
      <TextName>{username}</TextName>
    </Container>
  )
}


  const Container = styled.View`
    width: 80px;
    align-items: center;
  `

  const TextName = styled.Text`
    text-align: center;
    font-size: 12px;
    color: ${props => props.theme.TEXT_PRIMARY_COLOR};
  `


export default Story;
