import React, {useContext} from 'react';
import {Text} from 'react-native'
import styled from 'styled-components'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MessagesStackScreen from './messages.routes';
import PeopleStackScreen from "./people.routes";
import { Context } from '../context/Context';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => {
  const { theme } = useContext(Context);
  


  const Container = styled.View`
    display: flex;
    align-items: center;
  `

  return(
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'MessagesTab') {
          return  (
            <Container>
              <MaterialCommunityIcons name='message' color={color} size={22}  />
              <Text style={{color:`${color}`}}>Messages</Text>
            </Container>
            )
        }
        if (route.name === 'PeopleTab') {
          return  (
          <Container>
            <Ionicons  name='people' color={color} size={23} />
            <Text style={{color:`${color}`}}>People</Text>
          </Container>
          )
        }
      },
      tabBarStyle: { 
        backgroundColor: theme.BACKGROUND_COLOR,
       },
    })}
    tabBarOptions={{
      activeTintColor: '#178DF4',
      inactiveTintColor: 'lightgray',
      showLabel: false,
     
    }}
  >
    <Tab.Screen 
      name="MessagesTab" 
      component={MessagesStackScreen}
      options={{
        headerShown: false
      }}
    />
     <Tab.Screen 
      name="PeopleTab" 
      component={PeopleStackScreen} 
      options={{
        headerShown: false
      }}
    />
  </Tab.Navigator>
)}

export default BottomHomeNavigator;
