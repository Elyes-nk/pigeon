import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../ProfilePicture'
import { TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Person = ({person}) => {

  const navigation = useNavigation()
  
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Messages", {userSelected: person}) }>
      <Container>
          <ProfilePicture uri={person?.profilePic} size={55} />
          <Name>{person?.username}</Name>
      </Container>
    </TouchableWithoutFeedback>
  )
}

  
const Container = styled.View`
  margin: 10px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
`

const Name = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.TEXT_PRIMARY_COLOR};
  margin:10px;
`

export default Person;
