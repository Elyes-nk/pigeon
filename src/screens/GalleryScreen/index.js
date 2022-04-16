import React, { useState, useEffect} from 'react';
import styled from 'styled-components'
import { launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

export default function GalleryScreen({route}) {

    const  { params : {isStory, isMessage, isProfilePicture, discussionId, userSelected} } = route;

    const navigation = useNavigation() 
    const chooseImage = () => {
        let options = {
            storageOptions : {
                path: 'images',
                mediaType: 'photo',
            },
            includeBase64: true,
        }
        launchImageLibrary(options, response => {
            if(response.didCancel){
                navigation.navigate("Home")
            }else if(response.error) {
                console.log(response.error);
            }else{
                const filePath = response.assets[0].uri;
                const newFilePath = RNFS.ExternalDirectoryPath + '/'+ uuid.v4() +'.jpg';
                RNFS.moveFile(filePath, newFilePath).catch(error => { console.log(error); })
                if(isStory){
                    navigation.navigate("ValidateStory", { path : newFilePath})
                }
                if(isMessage){
                    navigation.navigate("ValidateSendingImageInMessage", 
                        { 
                            path : newFilePath, 
                            discussionId: discussionId, 
                            userSelected: userSelected
                        })
                }
                if(isProfilePicture){
                    navigation.navigate("ValidateProfilePicture", 
                    { 
                        path : newFilePath, 
                    })
                }
            }
        });
    }

    useEffect(() => {
        chooseImage()
    }, []);


    const Container = styled.View`
            height: 100%;
            width: 100%;
    `
    const Preview = styled.View`
            flex: 1;
            align-items: center;
            justify-content: flex-end;
            background-color: ${props => props.theme.BACKGROUND_COLOR};
    `

    return (
        <Container>
            <Preview />
        </Container>  
    );
}
