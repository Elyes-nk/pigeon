import React, {useState} from 'react';
import styled from 'styled-components'
import {useSelector} from 'react-redux';

const EditUsernameScreen = () => {
  const [username, setUsername] = useState("Elyes");

  const theme = useSelector((state) => state.themeReducer.theme )

  const Container = styled.View`
      width: 100%;
      height: 100%;
      background-color: ${theme.BACKGROUND_COLOR};
      align-items: center;
  `


  const Name = styled.TextInput`
      width: 95%;
      border-bottom-width: 2px;
      border-color: ${theme.TEXT_PRIMARY_COLOR};
      color: ${theme.TEXT_PRIMARY_COLOR};
      padding: 5px;
      margin-top: 20px;
  `

  const NameLength = styled.Text`
      font-size: 12px;
      color: ${theme.TEXT_SECONDARY_COLOR};
  `

  const SmallText = styled.Text`
      margin: 30px 5px 0px 5px;
      font-size: 12px; 
      color: ${theme.TEXT_SECONDARY_COLOR};
  `
  return(
  <Container>
    <Name
      value={username}
      onChangeText={txt => setUsername(txt)}
    />
    <NameLength>{username.length}/30</NameLength>
    <SmallText>Your username becomes part of your custom links that let people visit your Pigeon profile and reach you.</SmallText>
  </Container>
)}

export default EditUsernameScreen;
