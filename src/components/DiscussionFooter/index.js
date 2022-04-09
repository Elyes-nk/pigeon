import React from 'react'
import { TouchableWithoutFeedback  } from 'react-native';
import styled from 'styled-components'
import { Dimensions  } from 'react-native';
import RoundedIcon from '../RoundedIcon'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

function index() {
  return (
    <Footer>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Gallery")}>
            <RoundedIcon color={props => props.theme.DISCUSSION_COLOR}>
                <Ionicons name='image' size={20} color={props => props.theme.ICON_PRIMARY_COLOR} />
            </RoundedIcon>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Camera")}>
            <RoundedIcon color={props => props.theme.DISCUSSION_COLOR}>
                <FontAwesome name='camera' size={18} color={props => props.theme.ICON_PRIMARY_COLOR} />
            </RoundedIcon>
        </TouchableWithoutFeedback>
        <TextInputContainer>
        <TextInput 
            placeholder='Type your message...'
            placeholderTextColor={props => props.theme.TEXT_PRIMARY_COLOR} 
        />
        </TextInputContainer>
    </Footer>
  )
}

const Footer = styled.View`
    flex-direction: row;
    height: 55px;
    background-color: ${props => props.theme.BACKGROUND_COLOR};
    justify-content: space-between;
    align-items: center;
`

const TextInput = styled.TextInput`
    color: ${props => props.theme.TEXT_PRIMARY_COLOR};
    font-size: 14px;
`
const TextInputContainer = styled.View`
    margin-left: 10px;
    margin-right: 10px;
    height: 40px;
    width: ${Dimensions.get('window').width - 100}px;
    border-radius: 20px;
    background-color: ${props => props.theme.DISCUSSION_COLOR};
    padding-left: 10px;
`

export default index