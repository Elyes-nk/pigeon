import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from "../ProfilePicture";
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Story = (props) => {

  const {
    story: {
      user: {
        id,
        image,
        name
      }
    }
  } = props;
  
  var username = name
  const editUsername = () => {
    if(username.length>9){
      username = username.substring(0,8)+"..."
    }
  }
  editUsername()
  

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Story", { userId: id });
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

  return (
    <Container >
      <TouchableWithoutFeedback onPress={onPress}> 
        <ProfilePicture uri={image} size={60} />
      </TouchableWithoutFeedback>
      <TextName>{username}</TextName>
    </Container>
  )
}

export default Story;
