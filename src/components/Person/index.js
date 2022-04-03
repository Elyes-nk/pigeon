import React, {useContext} from 'react';
import styled from 'styled-components';
import ProfilePicture from '../ProfilePicture'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Context } from '../../context/Context';

const Person = ({person}) => {
  const { theme } = useContext(Context)

  const Container = styled.View`
      margin: 10px;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 60px;

  `

  const Name = styled.Text`
      font-size: 17px;
      color: ${theme.TEXT_PRIMARY_COLOR};
      margin:10px;
  `

  
  return (
    <Container>
      <ProfilePicture uri={person?.image} size={55} />
      <Name>{person?.name}</Name>
    </Container>
  )
}

export default Person;
