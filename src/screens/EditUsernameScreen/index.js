import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import axios from "axios"

const EditUsernameScreen = () => {

  const user = useSelector((state) => state.authReducer.user)
  const [username, setUsername] = useState(user?.username);
  const [info, setInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInfo("")
  }, [username]);

  const handleSubmit = async () => {
    if(username !== user?.username){
      console.log(user);
      setIsLoading(true)
      try{
        const res = await axios.put(`https://pigeon-chat-app-api.herokuapp.com/api/users/${user._id}`,
        {
          username: username
        },{
          headers: {'token': user.accessToken}
        })
        setInfo("Username edited successfuly !")
        setIsLoading(false)
      }catch(err){
        console.log(err);
        setIsLoading(false)
        setInfo("An error occured, please retry later.")
      }
    }else{
      setInfo("You didn't change your username !")
    }
  }

  return(
  <Container>
     <ContainerTop>
      <Name
        value={username}
        onChangeText={txt => setUsername(txt)}
      />
      <TouchableWithoutFeedback onPress={() => handleSubmit()}> 
        {!isLoading ? 
            <SaveButton>Save</SaveButton>
          :
            <ActivityIndicator />
        }
      </TouchableWithoutFeedback>
    </ContainerTop>
 
    <NameLength>{username.length}/30</NameLength>
    <Info>{info}</Info>

    <SmallText>Your username becomes part of your custom links that let people visit your Pigeon profile and reach you.</SmallText>
  </Container>
)}


const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.BACKGROUND_COLOR};
  align-items: center;
`

const ContainerTop = styled.View`
  margin-top: 20px;  
  width: 100%;
  flex-direction: row;
  align-items: center;
`

const Name = styled.TextInput`
  width: 350px;
  border-bottom-width: 2px;
  border-color: ${props => props.theme.TEXT_PRIMARY_COLOR};
  color: ${props => props.theme.TEXT_PRIMARY_COLOR};
  padding: 5px;
  margin-left: 5px;
`

const SaveButton = styled.Text`
  font-size: 17px;
  color:${props => props.theme.PRIMARY_COLOR};
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

const Info = styled.Text`
    font-size: 12px; 
    color:${props => props.theme.PRIMARY_COLOR};
`


export default EditUsernameScreen;
