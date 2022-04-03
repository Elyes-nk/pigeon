import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import { ContextProvider } from "./src/context/Context";
import { Provider } from 'react-redux';
import { store } from './src/redux/config/store'

const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ContextProvider>
    </Provider>
  );
};

export default App