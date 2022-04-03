import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/Context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RoundedIcon from '../../components/RoundedIcon'
import ProfilePicture from '../../components/ProfilePicture';
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ProfileScreen = () =>{
    const navigation = useNavigation();
    const { setIsConnected, theme } = useContext(Context);

    const handleLogout = async() => {
        try{
            await AsyncStorage.removeItem("token")
            setIsConnected(false)
            navigation.navigate("Login")
        }catch(err){console.log(err);}
    }

    const Container = styled.View`
        background-color: ${theme.BACKGROUND_COLOR};
        height: 100%;
        width: 100%;
    `

    const ContainerTop = styled.View`
        justify-content:center;
        align-items: center;
        height: 40%;
    `

    const Title = styled.Text`
        font-size: 30px;
        color: ${theme.TEXT_PRIMARY_COLOR};
        margin: 20px;
    `
    const ContainerBottom = styled.View`
        justify-content:center;
        align-items: center;
    `

    const Option = styled.View`
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 10px;
    `

    const OptionTitle = styled.Text`
        font-size: 16px;
        padding: 10px;
        color: ${theme.TEXT_PRIMARY_COLOR};
    `


 return(
    <Container>
        <ContainerTop>
            <ProfilePicture 
                uri={"https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"} 
                size={100}
            />
            <Title>Elyes</Title>
        </ContainerTop>
        <ContainerBottom>
            <Option>
                <RoundedIcon color="gray">
                    <Ionicons name='moon' color="white" size={20} />
                </RoundedIcon>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate("EditTheme")}>
                    <OptionTitle>Dark mode</OptionTitle>
                </TouchableWithoutFeedback>
            </Option>
            <Option>
                <RoundedIcon color="lightblue">
                    <FontAwesome name='user' color="white" size={20} />
                </RoundedIcon>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate("EditUsername")}>
                    <OptionTitle>Username</OptionTitle>
                </TouchableWithoutFeedback>
            </Option>
            <Option>
                <RoundedIcon color="red">
                    <MaterialIcons name='logout' color="white" size={20} />
                </RoundedIcon>
                <TouchableWithoutFeedback  onPress={handleLogout}>
                    <OptionTitle>Logout</OptionTitle>
                </TouchableWithoutFeedback>
            </Option>
        </ContainerBottom>
    </Container>
)}

export default ProfileScreen;
