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
      <ProfilePicture uri={`https://pigeon-chat-app-api.herokuapp.com/img/${person?.profilePic}`} size={55} />
      <Name>{person?.username}</Name>
    </Container>
  )
}

export default Person;
