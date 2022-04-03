import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import styled from 'styled-components'
import MessagesScreen from "../screens/MessagesScreen";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProfilePicture from '../components/ProfilePicture';
import RoundedIcon from '../components/RoundedIcon';
import {useSelector} from 'react-redux';


const MessagesStack = createStackNavigator();

const MessagesRoutes = () => {
  const theme = useSelector((state) => state.themeReducer.theme )
  const navigation = useNavigation()


  const ContainerLeft = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 145px;
  `
  const Title = styled.Text`
    font-size: 20px;
    color:${theme.TEXT_PRIMARY_COLOR};
  `

  const ContainerRight = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 90px;
  `
  
  const Text = styled.Text``


  return(
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="MessagesStack"
        component={MessagesScreen}
        options={{
          title: 'Messages',
          headerStyle:{
            backgroundColor: theme.BACKGROUND_COLOR,
          },
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerTitle: () => (<Text></Text>),
          headerLeft: () => (
            <ContainerLeft>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile")}> 
                <ProfilePicture 
                  uri={"https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"} 
                  size={33} 
                />
              </TouchableWithoutFeedback>
              <Title>Messages</Title>
            </ContainerLeft>
          ),
          headerRight: () => (
            <ContainerRight>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Gallery")}>
                <RoundedIcon color={theme.DISCUSSION_COLOR}>
                  <Ionicons name='image' size={20} color={theme.TEXT_PRIMARY_COLOR} />
                </RoundedIcon>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Camera")}>
                <RoundedIcon color={theme.DISCUSSION_COLOR}>
                  <FontAwesome name='camera' size={18} color={theme.TEXT_PRIMARY_COLOR} />
                </RoundedIcon>
              </TouchableWithoutFeedback>
            </ContainerRight>
          )
        }}
      />
    </MessagesStack.Navigator>
  )
}


export default MessagesRoutes;
