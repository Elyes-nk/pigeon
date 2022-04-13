import React,{useState, useEffect } from 'react'
import styled from 'styled-components'
import ProfilePicture from '../ProfilePicture';

function index({text, profilePic}) {
    const [height, setHeight] = useState(40);
    const [width, setWidth] = useState(100);

    useEffect(() => {
        GetWidth()
        GetHeight()
    }, []);

    const GetWidth = () => {
        if(text.length < 10){
            setWidth(100)
            return;
        }
        if(text.length < 20){
            setWidth(200)
            return;
        }
        setWidth(300)
        return;
    }

    const GetHeight = () => {
        let lignes  = text.length / 32
        setHeight(height + (20 * Math.floor(lignes)))
    }

   
    const Container = styled.View`
        flex-direction: row;
        align-items: center;
        margin-top: 20px;
        height: ${height}px;
        width: ${width}px;
        margin-left: 10px;
    `

    const MessageContainer = styled.View`
        height: ${height}px;
        width: ${width}px;
        background-color: ${props => props.theme.DISCUSSION_COLOR};
        align-items: center;
        border-radius: 20px;
        margin-left: 10px;
    `

    const Message = styled.Text`
        color: ${props => props.theme.TEXT_PRIMARY_COLOR};
        padding: 10px;
    `
  return (
      <Container>
          <ProfilePicture 
                uri={`https://pigeon-chat-app-api.herokuapp.com/img/${profilePic}`} 
                size={40} 
            />
          <MessageContainer>
              <Message>{text}</Message>
          </MessageContainer>
      </Container>
  )
}


export default index