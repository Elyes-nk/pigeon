import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RoundedIcon from '../../components/RoundedIcon'
import ProfilePicture from '../../components/ProfilePicture';
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authActions';

const ProfileScreen = () =>{

    const user = useSelector((state) => state.authReducer.user)
    const navigation = useNavigation();
    const dispatch = useDispatch()
    
    const handleLogout = async() => {
        try{
            await dispatch(logout())
            navigation.navigate("Login")
        }catch(err){console.log(err);}
    }

 return(
    <Container>
        <ContainerTop>
            <ProfilePicture 
                uri={`https://pigeon-chat-app-api.herokuapp.com/img/${user?.profilePic}`} 
                size={100}
            />
            <Title>{user?.username}</Title>
        </ContainerTop>
        <ContainerBottom>
            <Option >
                <TouchableWithoutFeedback  onPress={() => navigation.navigate("EditTheme")}>
                    <RoundedIcon color="gray">
                        <Ionicons name='moon' color="white" size={20} />
                    </RoundedIcon>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate("EditTheme")}>
                    <OptionTitle>Dark mode</OptionTitle>
                </TouchableWithoutFeedback>
            </Option>
            <Option>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate("EditUsername")}>
                    <RoundedIcon color="lightblue">
                        <FontAwesome name='user' color="white" size={20} />
                    </RoundedIcon>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate("EditUsername")}>
                    <OptionTitle>Username</OptionTitle>
                </TouchableWithoutFeedback>
            </Option>
            <Option>
                <TouchableWithoutFeedback  onPress={handleLogout}>
                    <RoundedIcon color="red">
                        <MaterialIcons name='logout' color="white" size={20} />
                    </RoundedIcon>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={handleLogout}>
                    <OptionTitle>Logout</OptionTitle>
                </TouchableWithoutFeedback>
            </Option>
        </ContainerBottom>
    </Container>
)}


const Container = styled.View`
    background-color: ${props => props.theme.BACKGROUND_COLOR};
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
    color: ${props => props.theme.TEXT_PRIMARY_COLOR};
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
    color: ${props => props.theme.TEXT_PRIMARY_COLOR};
`

export default ProfileScreen;
