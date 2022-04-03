import React from 'react'
import { TouchableWithoutFeedback  } from 'react-native';
import styled from 'styled-components'
import { Dimensions  } from 'react-native';
import RoundedIcon from '../RoundedIcon'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useSelector} from 'react-redux';

function index() {
    const theme = useSelector((state) => state.themeReducer.theme )

    const Footer = styled.View`
        flex-direction: row;
        height: 55px;
        background-color: ${theme.BACKGROUND_COLOR};
        justify-content: space-between;
        align-items: center;
    `

    const TextInput = styled.TextInput`
        color: ${theme.TEXT_PRIMARY_COLOR};
        font-size: 14px;
    `
    const TextInputContainer = styled.View`
        margin-left: 10px;
        margin-right: 10px;
        height: 40px;
        width: ${Dimensions.get('window').width - 100}px;
        border-radius: 20px;
        background-color: ${theme.DISCUSSION_COLOR};
        padding-left: 10px;
    `

  return (
    <Footer>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Gallery")}>
            <RoundedIcon color={theme.DISCUSSION_COLOR}>
                <Ionicons name='image' size={20} color={theme.ICON_PRIMARY_COLOR} />
            </RoundedIcon>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Camera")}>
            <RoundedIcon color={theme.DISCUSSION_COLOR}>
                <FontAwesome name='camera' size={18} color={theme.ICON_PRIMARY_COLOR} />
            </RoundedIcon>
        </TouchableWithoutFeedback>
        <TextInputContainer>
        <TextInput 
            placeholder='Type your message...'
            placeholderTextColor={theme.TEXT_PRIMARY_COLOR} 
        />
        </TextInputContainer>
    </Footer>
  )
}

export default index