import React, { useContext, useState, useEffect }from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import bottomHomeNavigator from './bottomHomeNavigator.routes';
import { Context } from "../context/Context";
import styled from 'styled-components'
import { TouchableWithoutFeedback, StatusBar } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import ValidateStoryScreen from '../screens/ValidateStoryScreen'
import CameraScreen from "../screens/CameraScreen";
import LoginScreen from "../screens/LoginScreen";
import StoryScreen from "../screens/StoryScreen";
import MessagesScreen from '../screens/MessagesScreen';
import DiscussionScreen from '../screens/DiscussionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';
import EditUsernameScreen from '../screens/EditUsernameScreen';
import EditThemeScreen from '../screens/EditThemeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ProfilePicture from '../components/ProfilePicture';
import RegisterScreen from '../screens/RegisterScreen'

const Router = () => { 
  const { isConnected, theme } = useContext(Context);
  const navigation = useNavigation()
  const RootStack = createStackNavigator();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
   setTimeout(()=> {
    setisLoading(false)
   }, 1000)
  }, []);

  const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: ${theme.BACKGROUND_COLOR};
  `
  const MainLogo = styled.Image`
    height: 100px;
    width: 100px;
  `

  const Title = styled.Text`
    font-size: 20px;
    color:${theme.TEXT_PRIMARY_COLOR};
    margin-left: 10px;
  `

  const SaveButton = styled.Text`
    font-size: 17px;
    color:${theme.PRIMARY_COLOR};
  `

  const ContainerLeft = styled.View`
    flex-direction: row;
    padding: 10px;
  `

  const ContainerRight = styled.View`
    padding: 10px;
  `

  if(isLoading){
    return(
      <Container>
        <MainLogo
          source={require('../assets/images/logo.png')}
        />
      </Container>
    )
  }

  return(
  <>
  <StatusBar barStyle={theme.MODE === 'light' ? "dark-content" : "light-content"} backgroundColor={theme.BACKGROUND_COLOR}/>
  <RootStack.Navigator>
    {isConnected ? 
    <>
      <RootStack.Screen
        name={"Home"}
        component={bottomHomeNavigator}
        options={{
          headerShown: false,
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
        }}
      />
      <RootStack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerShown: false,
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
        }}
      />
       <RootStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: () => (<Title></Title>),
          headerLeft: () => (
            <ContainerLeft>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}> 
                <AntDesign name="left" size={28} color={theme.TEXT_PRIMARY_COLOR}/>
              </TouchableWithoutFeedback>
              <Title>Profile</Title>
            </ContainerLeft>
          ),
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },        
        }}
      />
      <RootStack.Screen
        name="EditUsername"
        component={EditUsernameScreen}
        options={{
          headerTitle: () => (<Title></Title>),
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
          headerLeft: () => (
            <ContainerLeft>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}> 
               <AntDesign name="left" size={28} color={theme.TEXT_PRIMARY_COLOR}/>
              </TouchableWithoutFeedback>
              <Title>Username</Title>
            </ContainerLeft>
          ),
          headerRight: () => (
            <ContainerRight>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}> 
                <SaveButton>Save</SaveButton>
              </TouchableWithoutFeedback>
            </ContainerRight>
          ),
        }}
      />
      <RootStack.Screen
        name="EditTheme"
        component={EditThemeScreen}
        options={{
          headerTitle: () => (<Title></Title>),
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
          headerLeft: () => (
            <ContainerLeft>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}> 
               <AntDesign name="left" size={28} color={theme.TEXT_PRIMARY_COLOR}/>
              </TouchableWithoutFeedback>
              <Title>Dark mode</Title>
            </ContainerLeft>
          ),
        }}
      />
      <RootStack.Screen
        name="Discussion"
        component={DiscussionScreen}
        options={{
          headerTitle: () => (<Title></Title>),
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
          headerLeft: () => (
            <ContainerLeft>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}> 
               <AntDesign name="left" size={28} color={theme.TEXT_PRIMARY_COLOR}/>
              </TouchableWithoutFeedback>
              <ProfilePicture 
                  uri={"https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"} 
                  size={33} 
              />
              <Title>Bilal</Title>
            </ContainerLeft>
          ),
        }}
      />
       <RootStack.Screen
        name="Story"
        component={StoryScreen}
        options={{
          headerShown: false,
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
        }}
      />
       <RootStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          headerTitle: () => (<Title></Title>),
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
          headerLeft: () => (
            <ContainerLeft>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}> 
                <AntDesign name="left" size={28} color={theme.TEXT_PRIMARY_COLOR}/>
              </TouchableWithoutFeedback>
              <Title>Story</Title>
            </ContainerLeft>
          ),
        }}
      />
       <RootStack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          headerShown: false,
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
          headerLeft: () => (
            <ContainerLeft>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}> 
                <AntDesign name="left" size={28} color={theme.TEXT_PRIMARY_COLOR}/>
              </TouchableWithoutFeedback>
              <Title>Story</Title>
            </ContainerLeft>
          ),
        }}
      />
       <RootStack.Screen
        name="ValidateStory"
        component={ValidateStoryScreen}
        options={{
          headerShown: false,
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
        }}
      />      
    </>
    :
    <>
      <RootStack.Screen
        name={"Login"}
        component={LoginScreen}
        options={{
          headerShown: false,
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
        }}
      />
      <RootStack.Screen
        name={"Register"}
        component={RegisterScreen}
        options={{
          headerShown: false,
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
        }}
      />
    </>
    }
  </RootStack.Navigator>
</>
);
}


export default Router;
