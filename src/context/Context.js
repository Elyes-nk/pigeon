import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeProvider} from 'styled-components'
import {useSelector} from 'react-redux';

const INITIAL_STATE = {
  isConnected: false,  
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {

  const [isConnected, setIsConnected] = useState(false);

  const theme = useSelector((state) => state.themeReducer.theme )

  useEffect(() => {
    handleCheckToken()
  }, []);

  const handleCheckToken = async() => {
    try{
      const tkn = await AsyncStorage.getItem('token')
      if(tkn){
        setIsConnected(true)
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider
        value={{
          isConnected: isConnected,
          setIsConnected: setIsConnected,
          theme: theme
        }}
      >
        {children}
      </Context.Provider>
    </ThemeProvider>
  );
};
