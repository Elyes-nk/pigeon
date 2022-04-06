import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const EditUsernameScreen = () => {
  const user = useSelector((state) => state.authReducer.user)
  const [username, setUsername] = useState(user?.username);

  const Container = styled.View`
      width: 100%;
      height: 100%;
      background-color: ${props => props.theme.BACKGROUND_COLOR};
      align-items: center;
  `


  const Name = styled.TextInput`
      width: 95%;
      border-bottom-width: 2px;
      border-color: ${props => props.theme.TEXT_PRIMARY_COLOR};
      color: ${props => props.theme.TEXT_PRIMARY_COLOR};
      padding: 5px;
      margin-top: 20px;
  `

  const NameLength = styled.Text`
      font-size: 12px;
      color: ${props => props.theme.TEXT_SECONDARY_COLOR};
  `

  const SmallText = styled.Text`
      margin: 30px 5px 0px 5px;
      font-size: 12px; 
      color: ${props => props.theme.TEXT_SECONDARY_COLOR};
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
