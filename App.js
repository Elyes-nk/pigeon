import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { Provider } from 'react-redux';
import { store } from './src/redux/config/store'
import { ThemeProvider } from 'styled-components'
import {useSelector} from 'react-redux';

const App = () => {
  const theme = useSelector((state) => state.themeReducer.theme)
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App