import React, {useState } from 'react'
import { RNCamera } from 'react-native-camera';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

function CameraFooter({captureHandle, cameraFlip, setCameraFlip}) {
    const theme = useSelector((state) => state.themeReducer.theme )

    const handleCameraFlip = () => {
        if(cameraFlip === RNCamera.Constants.Type.back){
            setCameraFlip(RNCamera.Constants.Type.front)
        }else{
            setCameraFlip(RNCamera.Constants.Type.back)
        }
    }


    const BottomContainer = styled.View`
        background-color: ${theme.BACKGROUND_COLOR};
        justify-content: center;
        align-items: center;
        height: 80px;
    `

    const Icon = styled.View`
        width: 80px;
        align-items: center;
        justify-content: center;
    `

    const IconContainer = styled.View`
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-width: 1px;
        border-color: ${theme.TEXT_SECONDARY_COLOR};
        margin-left: 10px;
        margin-right: 10px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 50px;
        height: 60px;
        width: 40%;
    `


    return (
        <BottomContainer>
                <IconContainer>
                    <TouchableWithoutFeedback onPress={() => captureHandle()}>
                        <Icon>
                            <MaterialCommunityIcons name="camera-iris" size={30} color={"gray"} />
                        </Icon>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => handleCameraFlip()}>
                        <Icon>
                            <MaterialCommunityIcons name="camera-flip-outline" size={30} color={"gray"}/>
                        </Icon>
                    </TouchableWithoutFeedback>
                </IconContainer>
        </BottomContainer>
    )
}

export default CameraFooter