import React from 'react';
import styled from 'styled-components'
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MessageImageScreen = ({route}) => {
    
    const  { params : {url, userSelected} } = route;
    const navigation = useNavigation();


  return(
    <SafeAreaView>
        <Container>
            <Img source={{uri : url}} >
                <BottomContainer>
                    <IconsContainer>  
                        <Icon>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate("Messages", {userSelected: userSelected})}>
                                <AntDesign name="left" size={20} color="white"/>
                            </TouchableWithoutFeedback>
                        </Icon>
                    </IconsContainer>
                </BottomContainer>
            </Img>
        </Container>  
    </SafeAreaView>
  )
}

const Container = styled.View`
    height: 100%;
    width: 100%;
`
const Img = styled.ImageBackground`
    height: 100%;
    width: 100%;
`

const BottomContainer = styled.View`
    margin-top: 190%;
    height: 8%;
`   

const IconsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 10px 10px 10px;
`

const Icon = styled.View`
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 45px; 
    background-color: ${props => props.theme.ICON_PRIMARY_COLOR};
`
export default MessageImageScreen;
