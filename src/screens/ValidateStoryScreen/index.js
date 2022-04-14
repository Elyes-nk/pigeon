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
    const newStory = [...user.stories, fileName]

    const navigation = useNavigation();

    const handleCreateStory = async() => {
        console.log("letsssgooooo");
        const data = new FormData();
        data.append("file", {
            file: uploadUri,
            name: fileName,
            type: 'image/jpg',
          });
          console.log(data);

        try {
            const ress = await axios.post("https://pigeon-chat-app-api.herokuapp.com/api/upload",data)
            console.log("envoie photo reussi",ress.data);
            const res = await axios.put(`https://pigeon-chat-app-api.herokuapp.com/api/users/${user._id}`,
                {
                    stories : newStory
                },{
                    headers: {
                        'token': user.accessToken,
                        'Content-Type': 'multipart/form-data',
                    }
                }
            );
            console.log("edit user success",res.data);
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
