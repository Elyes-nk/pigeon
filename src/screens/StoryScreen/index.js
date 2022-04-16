import React, { useState } from 'react';
import { ActivityIndicator, TouchableWithoutFeedback, Dimensions, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProfilePicture from "../../components/ProfilePicture";

const StoryScreen = ({route}) => {

  const users = useSelector(state => state.usersReducer.users)


  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const  { params : {userId} } = route;
  const UserStories = users.find(item => item._id === userId);

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

  return (
    <Container>
      <TouchableWithoutFeedback onPress={handlePress}>
        <BackImg source={{ uri : activeStory}}>
          <UserInfo>
            <ProfilePicture 
              uri={UserStories?.profilePic} 
              size={34} 
            />
            <UserName>{UserStories.username}</UserName>
          </UserInfo>
        </BackImg>
      </TouchableWithoutFeedback>
    </Container>
  )
}

const Container = styled.SafeAreaView`
  height: 100%;
  background-color: black;
`
const BackImg = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
`
const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
`
const UserName = styled.Text`
  color: ${props => props.theme.SECONDARY_COLOR};
  font-weight: 700;
  font-size: 14px;
  margin-left: 5px;
`

export default StoryScreen;
