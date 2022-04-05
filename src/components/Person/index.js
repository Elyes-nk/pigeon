import React from 'react';
import styled from 'styled-components';
import ProfilePicture from '../ProfilePicture'

const Person = ({person}) => {

  const Container = styled.View`
      margin: 10px;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 60px;

  `

  const Name = styled.Text`
      font-size: 17px;
      color: ${props => props.theme.TEXT_PRIMARY_COLOR};
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
