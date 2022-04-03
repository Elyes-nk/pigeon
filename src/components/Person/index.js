import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../ProfilePicture'
import {useSelector} from 'react-redux';

const Person = ({person}) => {

  const theme = useSelector((state) => state.themeReducer.theme )
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
