import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import styled from 'styled-components'
import DiscussionsScreen from "../screens/DiscussionsScreen";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProfilePicture from '../components/ProfilePicture';
import RoundedIcon from '../components/RoundedIcon';
import {useSelector} from 'react-redux';


const DiscussionsStack = createStackNavigator();

const DiscussionsRoutes = () => {
  const theme = useSelector((state) => state.themeReducer.theme)
  const user = useSelector((state) => state.authReducer.user)
  const navigation = useNavigation()

  return(
    <DiscussionsStack.Navigator>
      <DiscussionsStack.Screen
        name="DiscussionsStack"
        component={DiscussionsScreen}
        options={{
          title: 'Discussions',
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
                  uri={`https://pigeon-chat-app-api.herokuapp.com/img/${user?.profilePic}`} 
                  size={33} 
                />
              </TouchableWithoutFeedback>
              <Title>Discussions</Title>
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
    </DiscussionsStack.Navigator>
  )
}



const ContainerLeft = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const Title = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  color:${props => props.theme.TEXT_PRIMARY_COLOR};
`

const ContainerRight = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
`

const Text = styled.Text``

export default DiscussionsRoutes;
