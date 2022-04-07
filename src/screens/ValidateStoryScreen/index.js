import React, { useState, useEffect }  from 'react';
import styled from 'styled-components'
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ValidateStoryFooter from '../../components/ValidateStoryFooter'
import { useSelector } from 'react-redux';
import axios from 'axios';

const ValidateStoryScreen = ({route}) => {
    
    const user = useSelector(state => state.authReducer.user)
    const  { params : {path} } = route;

    const uploadUri = `${Platform.OS === "android" ? 'file://' : ''}${path}`
    const fileName = user.username + Date.now();

    const navigation = useNavigation();

    const handleCreateStory = async() => {
        const data = new FormData();
        data.append("file", {
            uri: uploadUri,
            name: fileName,
            type: 'image/jpg',
          });
        try {
            await axios.post("https://pigeon-chat-app-api.herokuapp.com/api/upload",data)
            await axios.put("https://pigeon-chat-app-api.herokuapp.com/api/users/",
                {
                    id: user._id,
                    stories : [...user.stories, fileName]
                },{
                    headers: {
                        'token': user.accessToken,
                        'Content-Type': 'multipart/form-data',
                    }
                }
            );
        }catch(error) { 
            console.log("error",error);
            console.log("res",error.response);
        }
    }

    const Container = styled.View`
        height: 100%;
        width: 100%;
    `
    const Img = styled.ImageBackground`
        height: 100%;
        width: 100%;
    `

   
  return(
    <SafeAreaView>
        <Container>
            <Img source={{uri : uploadUri}} >
                <ValidateStoryFooter 
                    handleCreateStory={handleCreateStory}s
                />
            </Img>
        </Container>  
    </SafeAreaView>
  )
}

export default ValidateStoryScreen;
