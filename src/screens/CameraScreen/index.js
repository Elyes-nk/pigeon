import React, {useState }  from 'react';
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import CameraFooter from '../../components/CameraFooter'
import uuid from 'react-native-uuid';

export default function CameraScreen({route}) {

    const  { params : {isStory, isMessage, discussionId, userSelected} } = route;

    const navigation = useNavigation();
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const [cameraFlip, setCameraFlip] = useState(RNCamera.Constants.Type.back);

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalDirectoryPath + "/" + uuid.v4() + ".jpg";
            RNFS.moveFile(filePath, newFilePath).catch(error => { console.log(error);})
            if(isStory){
                navigation.navigate("ValidateStory", { path : newFilePath})
            }
            if(isMessage){
                navigation.navigate("ValidateSendingImageInMessageScreen", 
                    { 
                        path : newFilePath, 
                        discussionId: discussionId, 
                        userSelected: userSelected
                    })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const Container = styled.View`
            height: 100%;
            width: 100%;
    `
    
    return (
        <Container>
            <RNCamera
                ref={cameraRef}
                type={cameraFlip}
                style={{flex:1, alignItems:"center",justifyContent: "flex-end"}}
            />
            <CameraFooter 
                captureHandle={captureHandle}
                cameraFlip={cameraFlip}
                setCameraFlip={setCameraFlip}
            />
        </Container>  
    );
}
