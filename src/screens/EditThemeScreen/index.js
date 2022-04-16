import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux'
import { switchTheme } from '../../redux/actions/themeActions';
import {light, dark} from '../../theme/Themes'
import {useSelector} from 'react-redux';
import styled from 'styled-components'
import { Appearance } from 'react-native'


const EditThemeScreen = () => {
  const colorScheme = Appearance.getColorScheme();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeReducer.theme)
  const systemeSelected = useSelector((state) => state.themeReducer.systemeSelected)

  const editTheme = () => {
    if(theme.MODE === "light"){
      dispatch(switchTheme(dark, false))
    }else{
      dispatch(switchTheme(light, false))
    }
  }

  const selectSysteme = () => {
    if(colorScheme === "light"){
      dispatch(switchTheme(light, true))
    }else{
      dispatch(switchTheme(dark, true))
    }
  }

  return(
  <Container>

    <Option>
      <TouchableWithoutFeedback onPress={() => editTheme()}>
        {(theme.MODE === "light" && !systemeSelected) ? <RadioButtonOn><Circle/></RadioButtonOn> : <RadioButtonOff />}
      </TouchableWithoutFeedback>
      <OptionText>Off</OptionText>
    </Option>

    <Option>
      <TouchableWithoutFeedback onPress={() => editTheme()}>
        {(theme.MODE === "dark" && !systemeSelected) ? <RadioButtonOn><Circle/></RadioButtonOn> : <RadioButtonOff />}
      </TouchableWithoutFeedback>
      <OptionText>On</OptionText>
    </Option>


    <Option>
      <TouchableWithoutFeedback onPress={() => selectSysteme()}>
        {systemeSelected ? <RadioButtonOn><Circle/></RadioButtonOn> : <RadioButtonOff />}
      </TouchableWithoutFeedback>
      <OptionText>System</OptionText>
    </Option>


    <SmallText>If system is selected, Pigeon will automatically adjust your appearance based on your device's system settings.</SmallText>
  </Container>
)}


const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.BACKGROUND_COLOR};
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
  border-color: ${props => props.theme.PRIMARY_COLOR};
`
const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${props => props.theme.PRIMARY_COLOR};
`

const OptionText = styled.Text`
  font-size: 15px; 
  color: ${props => props.theme.TEXT_PRIMARY_COLOR};
  margin-left: 10px;
`

const SmallText = styled.Text`
  margin: 30px 5px 0px 5px;
  font-size: 12px; 
  color: ${props => props.theme.TEXT_SECONDARY_COLOR};
`

export default EditThemeScreen;
