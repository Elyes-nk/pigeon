import React,{useState, useEffect } from 'react'
import styled from 'styled-components'
import ProfilePicture from '../ProfilePicture';
import { format } from "timeago.js";
import { TouchableWithoutFeedback, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function index({message, profilePic, sent, userSelected}) {

    const navigation = useNavigation()

    const handleLink = (text) => {
        if(message.text.includes("http")){
            Linking.openURL(text)
        }
    }
  
  return (
    <>
        {sent ?
            <Container>
                <ContainerSent>
                    {message.image ? 
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("MessageImage", {url: message.image, userSelected: userSelected})}>
                            <Image 
                                source={{uri : message.image}}
                            />
                        </TouchableWithoutFeedback>
                    :
                        <MessageContainer>
                            <TouchableWithoutFeedback onPress={() => handleLink(message.text)}>
                                <MessageTextSent>{message.text}</MessageTextSent>
                            </TouchableWithoutFeedback>
                        </MessageContainer>
                    }
                    <MessageBottom>{format(message.createdAt)}</MessageBottom>
                </ContainerSent>
                <ProfilePicture 
                    uri={profilePic} 
                    size={40} 
                />
            </Container>
        :
            <Container>
                <ProfilePicture 
                    uri={profilePic} 
                    size={40} 
                />
               
                <ContainerRecieved>
                    {message.image ? 
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("MessageImage", {url: message.image, userSelected: userSelected})}>
                            <Image 
                                source={{uri : message.image}}
                            />
                        </TouchableWithoutFeedback>
                    :
                         <MessageContainer>
                            <TouchableWithoutFeedback onPress={() => handleLink(message.text)}>
                                <MessageTextReceived>{message.text}</MessageTextReceived>
                            </TouchableWithoutFeedback>
                        </MessageContainer>
                    }
                   
                    <MessageBottom>{format(message.createdAt)}</MessageBottom>
                </ContainerRecieved>
            </Container>
        }
    </>
  )
}

  
const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 96%;
    height: 90px;
    margin-right: 5px;
    margin-left: 5px;
`


const ContainerSent = styled.View`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: flex-end;
    justify-content: center;
    width: 90%;
    height: 100%;
    margin-right: 5px;
`

const ContainerRecieved = styled.View`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: flex-start;
    justify-content: center;
    width: 90%;
    height: 100%;
    margin-left: 5px;
`

const MessageContainer = styled.View`
    display: flex;
`

const Image = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 5px;
    margin-right: 10px;
    background-color: lightgray;
`

const MessageTextReceived = styled.Text`
    padding: 10px;
    border-radius: 20px;
    background-color: ${props => props.theme.PRIMARY_COLOR};
    color: white;
    max-width: 300px;
`

const MessageTextSent = styled.Text`
    padding: 10px;
    border-radius: 20px;
    max-width: 300px;
    background-color: ${props => props.theme.DISCUSSION_COLOR};
    color: ${props => props.theme.TEXT_PRIMARY_COLOR };
`


const MessageBottom = styled.Text`
    font-size: 12px;
    color: ${props => props.theme.TEXT_PRIMARY_COLOR };
`

export default index