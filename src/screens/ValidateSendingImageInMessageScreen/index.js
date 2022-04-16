import React, { useState } from 'react';
import styled from 'styled-components'
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ValidateFooter from '../../components/ValidateFooter'
import { useSelector } from 'react-redux';
import axios from 'axios';

const ValidateSendingImageInMessageScreen = ({route}) => {
        
    const  { params : { path, discussionId, userSelected } } = route;

    const [isLoading, setisLoading] = useState(false);
    const user = useSelector(state => state.authReducer.user)
    const navigation = useNavigation();

    const uploadUri = `${Platform.OS === "android" ? 'file://' : ''}${path}`

    const fileName = user.username + Date.now() + "." + uploadUri.split('.').pop();

    const newFile = {
        uri: uploadUri,
        type:`ìmage/${uploadUri.split('.').pop()}`,
        name:fileName
    }

    const data = new FormData();
    data.append("file", newFile);
    data.append("upload_preset", 'ya77sb6o')
    data.append("cloud_name", 'djowvulob')

    const handleSubmit = () => {
        setisLoading(true)
        fetch("https://api.cloudinary.com/v1_1/djowvulob/image/upload",
        {
            method:"POST", 
            body:data
        })
        .then(res=> res.json())
        .then(data=> handleSendMessage(data.secure_url))
        .catch(err=> console.log(err))
    }


    const handleSendMessage = async(url) => {
        try {
            const res = await axios.post(`https://pigeon-chat-app-api.herokuapp.com/api/messages`,
            {
                discussionId: discussionId,
                image: url,
                sender: user._id
            },
            {
                headers: {'token': user.accessToken}
            })
            setisLoading(false)
            navigation.navigate("Messages", {userSelected: userSelected})
        } catch (err) {
            console.log(err);
        }
    }

  return(
    <SafeAreaView>
        <Container>
            <Img source={{uri : uploadUri}} >
                <ValidateFooter 
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                    isStory={false}
                    isMessage={true}
                    isProfilePicture={false}
                />
            </Img>
        </Container>  
    </SafeAreaView>
  )
}

const Container = styled.View`
    height: 100%;
    width: 100%;
`
const Img = styled.ImageBackground`
    height: 100%;
    width: 100%;
`

export default ValidateSendingImageInMessageScreen;
