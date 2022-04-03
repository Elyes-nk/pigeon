import React, { useContext } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ProfilePicture from '../ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/Context';

function ValidateStoryFooter({handleCreateStory}) {
    const { theme } = useContext(Context)
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
        background-color: ${theme.BACKGROUND_COLOR};
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
        color: white;
        font-size: 13px;
        margin: 10px;
    `
    const Icon = styled.View`
        width: 45px;
        height: 45px;
        align-items: center;
        justify-content: center;
        border-radius: 45px; 
        background-color: ${theme.ICON_PRIMARY_COLOR};
    `
    return (
        <BottomContainer>
            <IconsContainer>  
                <TextContainer>    
                    <ProfilePicture 
                    uri={"https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"} 
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