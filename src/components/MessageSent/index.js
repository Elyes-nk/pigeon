import React,{useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { Dimensions } from 'react-native'
import { Context } from '../../context/Context';

function index({message}) {
    const { theme } = useContext(Context)
    const [height, setHeight] = useState(40);
    const [width, setWidth] = useState(100);

    const GetWidth = () => {
        if(message.length < 10){
            setWidth(100)
            return;
        }
        if(message.length < 20){
            setWidth(200)
            return;
        }
        setWidth(300)
        return;
    }
    const GetHeight = () => {
        let lignes  = message.length / 32
        setHeight(height + (20 * Math.floor(lignes)))
    }
    useEffect(() => {
        GetWidth()
        GetHeight()
    }, []);

    const Container = styled.View`
        flex-direction: row;
        height: ${height}px;
        width: ${width}px;
        margin-top: 20px;
    `
    const Box = styled.View`
        height: ${height}px;
        width: ${Dimensions.get('window').width - width - 5}px;
    `

    const MessageContainer = styled.View`
        height: ${height}px;
        width: ${width}px;
        align-items: center;
        background-color: ${theme.PRIMARY_COLOR};
        border-radius: 20px;
        margin-right: 5px;
    `
    const Message = styled.Text`
        color: white;
        padding: 10px;
    `
  return (
      <Container>
          <Box></Box>
          <MessageContainer>
            <Message>{message}</Message>
          </MessageContainer>
      </Container>
  )
}

export default index