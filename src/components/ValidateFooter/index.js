import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ProfilePicture from '../ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native';

function ValidateFooter({handleSubmit, isLoading, isStory}) {

    const user = useSelector(state => state.authReducer.user)
    const theme = useSelector(state => state.themeReducer.theme)
    const navigation = useNavigation()

    return (
        <BottomContainer>
            <IconsContainer>  
                <TextContainer>   
                    {!isLoading? 
                        <>
                            <ProfilePicture 
                                uri={`https://pigeon-chat-app-api.herokuapp.com/img/${user?.profilePic}`} 
                                size={33} 
                            />                
                            <TouchableWithoutFeedback onPress={handleSubmit}>
                                {isStory ?
                                    <TextMessage>Your stories</TextMessage>     
                                    :
                                    <TextMessage>Send in message</TextMessage>     
                                }
                            </TouchableWithoutFeedback>
                        </>
                    :
                        <ActivityIndicator/>
                    }
                </TextContainer>
                <Icon>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
                        <AntDesign name="close" size={20} color={theme.ICON_SECONDARY_COLOR}/>
                    </TouchableWithoutFeedback>
                </Icon>
            </IconsContainer>
        </BottomContainer>
    )
}


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
    background-color: ${props => props.theme.ICON_PRIMARY_COLOR};
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 50px;
    height: 45px;
    width: 80%;
`

const TextMessage = styled.Text`
    color: ${props => props.theme.ICON_SECONDARY_COLOR};
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

export default ValidateFooter