import React, {useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux'
import { switchTheme } from '../../redux/actions/themeActions';
import {light, dark} from '../../theme/Themes'
import {useSelector} from 'react-redux';
import styled from 'styled-components'


const EditThemeScreen = () => {

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.theme )

  const editTheme = () => {
    if(theme.MODE === "light"){
      dispatch(switchTheme(dark))
    }else{
      dispatch(switchTheme(light))
    }
  }

  const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${theme.BACKGROUND_COLOR};
    align-items: center;
  `

  const Option = styled.View`
    flex-direction: row;
    width: 100%;
    margin: 30px 0px 10px 30px;
    align-items: center;
  `

  const RadioButtonOff = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border-width: 1px;
    border-color: gray;
  `

  const RadioButtonOn = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-color: ${theme.PRIMARY_COLOR};
  `
  const Circle = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: ${theme.PRIMARY_COLOR};
  `

  const OptionText = styled.Text`
    font-size: 15px; 
    color: ${theme.TEXT_PRIMARY_COLOR};
    margin-left: 10px;
  `

  const SmallText = styled.Text`
    margin: 30px 5px 0px 5px;
    font-size: 12px; 
    color: ${theme.TEXT_SECONDARY_COLOR};
  `

  return(
  <Container>
    <Option>
      <TouchableWithoutFeedback onPress={() => editTheme()}>
        {theme.MODE === "light" ? <RadioButtonOn><Circle/></RadioButtonOn> : <RadioButtonOff />}
      </TouchableWithoutFeedback>
      <OptionText>Off</OptionText>
    </Option>
    <Option>
      <TouchableWithoutFeedback onPress={() => editTheme()}>
        {theme.MODE === "dark" ? <RadioButtonOn><Circle/></RadioButtonOn> : <RadioButtonOff />}
      </TouchableWithoutFeedback>
      <OptionText>On</OptionText>
    </Option>
    {/* <Option>
      <TouchableWithoutFeedback onPress={() => setSelected("system")}>
        {selected === "system" ? <RadioButtonOn><Circle/></RadioButtonOn> : <RadioButtonOff />}
      </TouchableWithoutFeedback>
      <OptionText>System</OptionText>
    </Option> */}
    <SmallText>If system is selected, Pigeon will automatically adjust your appearance based on your device's system settings.</SmallText>
  </Container>
)}


export default EditThemeScreen;
