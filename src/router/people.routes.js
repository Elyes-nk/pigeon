import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import styled from 'styled-components'
import PeopleScreen from "../screens/PeopleScreen";
import {useSelector} from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from '../components/ProfilePicture';

const PeopleStack = createStackNavigator();

const PeopleRoutes = () => {

  const navigation = useNavigation() 
  const theme = useSelector((state) => state.themeReducer.theme )

  const Title = styled.Text`
    font-size: 20px;
    color:${theme.TEXT_PRIMARY_COLOR};
  `

  const ContainerLeft = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 115px;
  `
  const Text = styled.Text``

  return(
    <PeopleStack.Navigator>
      <PeopleStack.Screen
        name="PeopleStack"
        component={PeopleScreen}
        options={{
          title: 'People',
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
              <Title>People</Title>
            </ContainerLeft>
          ),
          headerRight: () => (<Text></Text>)
        }}
      />
    </PeopleStack.Navigator>
  )
}


export default PeopleRoutes;
