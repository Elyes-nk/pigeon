import React, { useState, useEffect }  from 'react';
import styled from 'styled-components'
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ValidateStoryFooter from '../../components/ValidateStoryFooter'

const ValidateStoryScreen = ({route}) => {

    const  { params : {path} } = route;
    const navigation = useNavigation();
    
    const handleCreateStory = () => {
        if (image) {
        let newArray = stories;
        newArray.unshift(
        {
            stories: [
                {
                    image : {uri : image},
                    postedTime: '2 s',
                }
                ],
            user: {
                id : 10,
                name : "elyes-nk",
                image : profile,
            },
        }
        );
        setStories(newArray);
        setImage(null);
        navigation.navigate("Home")
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
            <Img source={{uri : `${Platform.OS === "android" ? 'file://' : ''}${path}`}} >
                <ValidateStoryFooter 
                    handleCreateStory={handleCreateStory}s
                />
            </Img>
        </Container>  
    </SafeAreaView>
  )
}

export default ValidateStoryScreen;
