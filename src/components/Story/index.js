import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from "../ProfilePicture";
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Story = ({user}) => {
  const [username, setUsername] = useState("");

  const editUsername = (name) => {
    if(name?.length>9){
      setUsername(name.substring(0,8)+"...")
    }else{
      setUsername(name)
    }
  }

  useEffect(() => {
    editUsername(user?.username)
  }, [user]);
  
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Story", { userId: user._id });
  }

  return (
    <Container >
       <TouchableWithoutFeedback onPress={onPress}> 
        <ProfilePicture 
          uri={user?.profilePic} 
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
