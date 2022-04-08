import React, { useState } from 'react';
import { ActivityIndicator, TouchableWithoutFeedback, Dimensions, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProfilePicture from "../../components/ProfilePicture";

const StoryScreen = ({route}) => {

  const users = useSelector(state => state.usersReducer.users)
  const theme = useSelector(state => state.themeReducer.theme)


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
        <BackImg source={{ uri : `https://pigeon-chat-app-api.herokuapp.com/img/${activeStory}`}}>
          <UserInfo>
            <ProfilePicture 
              uri={`https://pigeon-chat-app-api.herokuapp.com/img/${UserStories?.profilePic}`} 
              size={34} 
            />
            <UserName>{UserStories.username}</UserName>
            <PostedTime>10 mn</PostedTime>
          </UserInfo>
          <BottomContainer>
            <IconsContainer>
              <TextInputContainer>
                <TextInput
                  editable
                  placeholder="Send message"
                  placeholderTextColor={theme.TEXT_PRIMARY_COLOR}
                />
              </TextInputContainer>
              <MessageButton>
                <AntDesign name="hearto" size={25} color={theme.TEXT_PRIMARY_COLOR} />
              </MessageButton>
              <MessageButton>
                <Ionicons name="paper-plane-outline" size={25} color={theme.TEXT_PRIMARY_COLOR} />
              </MessageButton>
            </IconsContainer>
          </BottomContainer>
        </BackImg>
      </TouchableWithoutFeedback>
    </Container>
  )
}

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
  color: ${props => props.theme.TEXT_PRIMARY_COLOR};
  font-weight: 700;
  font-size: 14px;
`
const PostedTime = styled.Text`
  margin-left: 10px;
  font-weight: 700;
  color: ${props => props.theme.TEXT_SECONDARY_COLOR};
  font-size: 13px;
`
const BottomContainer = styled.View`
  background-color: ${props => props.theme.BACKGROUND_COLOR};
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
  color: ${props => props.theme.DISCUSSION_COLOR};
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

export default StoryScreen;
