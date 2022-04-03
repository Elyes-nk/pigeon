import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
  SafeAreaView
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components';
import { Context } from '../../context/Context'
import ProfilePicture from "../../components/ProfilePicture";
import { useNavigation } from '@react-navigation/native';

const StoryScreen = ({route}) => {

  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const  { params : {userId} } = route;
  const { stories, theme } = useContext(Context);
  const [nextUser, setNextUser] = useState(null);
  const navigation = useNavigation();

  const UserStories = stories.find(item => item.user.id === userId);

  const NextUser = (direction) => {
    let index = stories.indexOf(UserStories)
    
    if(direction === "prev"){
      setNextUser(stories[parseInt(index) - 1]?.user.id ? stories[parseInt(index) - 1].user.id : null )
    }
    if(direction === "next"){
      setNextUser(stories[parseInt(index) + 1]?.user.id ? stories[parseInt(index) + 1].user.id : null )
    }
    return;
  }

  const handleNextStory = () => {
    if (activeStoryIndex >= UserStories?.stories.length - 1) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  }

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  }

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  }

  if (!UserStories || UserStories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  const activeStory = UserStories.stories[activeStoryIndex]

  const Container = styled.SafeAreaView`
    height: 100%;
  `
  const BackImg = styled.ImageBackground`
      flex: 1;
      justify-content: space-between;
  `
  const UserInfo = styled.View`
      flex-direction: row;
      align-items: center;
      margin-top: 10px;
  `
  const UserName = styled.Text`
      color: ${theme.TEXT_PRIMARY_COLOR};
      font-weight: 700;
      font-size: 14px;
  `
  const PostedTime = styled.Text`
      margin-left: 10px;
      font-weight: 700;
      color: ${theme.TEXT_SECONDARY_COLOR};
      font-size: 13px;
  `
  const BottomContainer = styled.View`
      background-color: ${theme.BACKGROUND_COLOR};
  `
  const IconsContainer = styled.View`
      flex-direction: row;
      margin: 10px 10px 20px 10px;
  `

  const MessageButton = styled.View`
      width: 50px;
      align-items: center;
      justify-content: center;
  `

  const TextInput = styled.TextInput`
      height: 100%;
      color: ${theme.TEXT_PRIMARY_COLOR};
      font-size: 14px;
  `
  const TextInputContainer = styled.View`
      flex: 1;
      border-width: 1;
      border-color: gray;
      margin-left: 10px;
      margin-right: 10px;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 50px;
      height: 50px;
  `

  return (
    <Container>
      <TouchableWithoutFeedback onPress={handlePress}>
        <BackImg source={activeStory?.image}>
          <UserInfo>
            <ProfilePicture uri={UserStories.user.image} size={34} />
            <UserName>{UserStories.user.name}</UserName>
            <PostedTime>{activeStory?.postedTime}</PostedTime>
          </UserInfo>
          <BottomContainer>
            <IconsContainer>
              <TextInputContainer>
                <TextInput
                  editable
                  placeholder="Send message"
                  placeholderTextColor={"white"}
                />
              </TextInputContainer>
              <MessageButton>
                <AntDesign name="hearto" size={25} color={"white"} />
              </MessageButton>
              <MessageButton>
                <Ionicons name="paper-plane-outline" size={25} color={"#ffffff"}/>
              </MessageButton>
            </IconsContainer>
          </BottomContainer>
        </BackImg>
      </TouchableWithoutFeedback>
    </Container>
  )
}

export default StoryScreen;
