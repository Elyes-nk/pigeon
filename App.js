import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { Provider } from 'react-redux';
import {store} from './src/redux/config/store'
import { ThemeProvider } from 'styled-components'
import {useSelector} from 'react-redux';


const AppWrapper = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )}

const App = () => {
  const theme = useSelector((state) => state.themeReducer.theme)
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppWrapper