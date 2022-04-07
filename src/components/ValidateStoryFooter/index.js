import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ProfilePicture from '../ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

function ValidateStoryFooter({handleCreateStory}) {
    const user = useSelector(state => state.authReducer.user)
    const theme = useSelector(state => state.themeReducer.theme)
    const navigation = useNavigation()

    const BottomContainer = styled.View`
        margin-top: 190%;
        height: 8%;
    `   
    const IconsContainer = styled.View`
        flex-direction: row;
        justify-content: space-between;
        margin: 10px 10px 10px 10px;
    `

    const TextContainer = styled.View`
        flex-direction: row;
        justify-content: center;
        background-color: ${props => props.theme.BACKGROUND_COLOR};
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 50px;
        height: 45px;
        width: 38%;
    `

    const TextMessage = styled.Text`
        color: ${props => props.theme.TEXT_PRIMARY_COLOR};
        font-size: 13px;
        margin: 10px;
    `
    const Icon = styled.View`
        width: 45px;
        height: 45px;
        align-items: center;
        justify-content: center;
        border-radius: 45px; 
        background-color: ${props => props.theme.ICON_PRIMARY_COLOR};
    `
    return (
        <BottomContainer>
            <IconsContainer>  
                <TextContainer>    
                    <ProfilePicture 
                        uri={`https://pigeon-chat-app-api.herokuapp.com/img/${user?.profilePic}`} 
                        size={33} 
                    />                
                    <TouchableWithoutFeedback onPress={handleCreateStory}>
                        <TextMessage>Your stories</TextMessage>     
                    </TouchableWithoutFeedback>
                </TextContainer>
                <TextContainer>    
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
                        <TextMessage>Cancel</TextMessage>     
                    </TouchableWithoutFeedback>
                </TextContainer>
                <Icon>
                    <TouchableWithoutFeedback onPress={handleCreateStory}>
                        <AntDesign name="right" size={20} color={theme.ICON_SECONDARY_COLOR}/>
                    </TouchableWithoutFeedback>
                </Icon>
            </IconsContainer>
        </BottomContainer>
    )
}

export default ValidateStoryFooter