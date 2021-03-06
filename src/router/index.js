import React, { useState, useEffect }from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import bottomHomeNavigator from './bottomHomeNavigator.routes';
import styled from 'styled-components'
import { TouchableWithoutFeedback, StatusBar } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import ValidateStoryScreen from '../screens/ValidateStoryScreen'
import CameraScreen from "../screens/CameraScreen";
import LoginScreen from "../screens/LoginScreen";
import StoryScreen from "../screens/StoryScreen";
import MessagesScreen from '../screens/MessagesScreen';
import DiscussionsScreen from '../screens/DiscussionsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';
import EditUsernameScreen from '../screens/EditUsernameScreen';
import EditThemeScreen from '../screens/EditThemeScreen';
import GalleryScreen from '../screens/GalleryScreen';
import RegisterScreen from '../screens/RegisterScreen'
import {useDispatch, useSelector} from 'react-redux';
import { init } from '../redux/actions/authActions';
import { initTheme } from '../redux/actions/themeActions';
import MessageImageScreen from '../screens/MessageImageScreen';
import ValidateSendingImageInMessageScreen from '../screens/ValidateSendingImageInMessageScreen';
import ValidateProfilePictureScreen from '../screens/ValidateProfilePictureScreen';

const Router = () => { 
  
  const user = useSelector((state) => state.authReducer.user);
  const theme = useSelector((state) => state.themeReducer.theme);
  const navigation = useNavigation();
  const RootStack = createStackNavigator();
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();

  const checkUserAndThemeInAsyncStorage = async() =>{
    await dispatch(init())
    await dispatch(initTheme())
    setisLoading(false)
  }
  useEffect(() => {
    checkUserAndThemeInAsyncStorage()
  }, []);

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
  <StatusBar 
    barStyle={theme.MODE === 'light' ? "dark-content" : "light-content"} 
    backgroundColor={theme.BACKGROUND_COLOR}
  />
  <RootStack.Navigator>
    {user ? 
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
        name="Discussions"
        component={DiscussionsScreen}
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
          )
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
        name="Messages"
        component={MessagesScreen}
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
              <Title>Messages</Title>
            </ContainerLeft>
          ),
        }}
      />
      <RootStack.Screen
        name="MessageImage"
        component={MessageImageScreen}
        options={{
          headerShown: false,
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
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
              <Title>Camera</Title>
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
        <RootStack.Screen
          name="ValidateSendingImageInMessage"
          component={ValidateSendingImageInMessageScreen}
          options={{
            headerShown: false,
            headerStyle:{
              backgroundColor: theme.BACKGROUND_COLOR,
            },
          }}
        />     
         <RootStack.Screen
          name="ValidateProfilePicture"
          component={ValidateProfilePictureScreen}
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


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.BACKGROUND_COLOR};
`
const MainLogo = styled.Image`
  height: 100px;
  width: 100px;
`

const Title = styled.Text`
  font-size: 20px;
  color:${props => props.theme.TEXT_PRIMARY_COLOR};
  margin-left: 10px;
`

const ContainerLeft = styled.View`
  flex-direction: row;
  padding: 10px;
`


export default Router;
