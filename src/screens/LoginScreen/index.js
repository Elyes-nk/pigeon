import React, { useState, useEffect } from 'react';
import { Alert, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/images/logo.png'
import { login } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

import {authReducer} from '../../redux/reducers/authReducer'

const LoginScreen = () =>{
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const error = useSelector(state => state.authReducer.error)
    const [err, setErr] = useState(error);

    useEffect(() => {
        setErr(false)
        if(username?.length > 3 && password?.length > 3){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    },[password, username]);

   
    const handleConnexion = async() => {
        if(isValid){
            setIsFetching(true)
            await dispatch(login(username,password))
            setIsFetching(false)
            setErr(error)
        }
    }

    return(
    <Container>

        <Logo source={logo} />

        <TextInput
            placeholder="Phone number, email adress or username"
            placeholderTextColor={props => props.theme.ICON_SECONDARY_COLOR}
            value={username}
            onChangeText={txt => setUsername(txt)}
        />
        <TextInput
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={props => props.theme.ICON_SECONDARY_COLOR}
            value={password}
            onChangeText={txt => setPassword(txt)}
        />

        <TouchableWithoutFeedback onPress={handleConnexion}>
            <Btn isValid={isValid}>
                {
                    isFetching ? 
                    <ActivityIndicator/>
                    :
                    <Text style={{color: 'white'}}> Log in</Text>
                }
            </Btn>
        </TouchableWithoutFeedback>

        <Error> {err ? "Incorrect username or password. Please check and try again" : ""} </Error>

        <OrContainer>
            <Or/>
            <Text> OR </Text>
            <Or/>
        </OrContainer>
      
        <ForgotenContainer>
            <Text> Don't have an account? </Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Register")}>
                <Text style={{color: '#00376b'}}>Register.</Text>
            </TouchableWithoutFeedback>
        </ForgotenContainer>

    </Container>
)}

const Container = styled.View`
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.BACKGROUND_COLOR};
`
const Logo = styled.Image`
    margin-top: 40%;
    height: 70px;
    width: 70px;
    margin-bottom: 20px;
`

const TextInput = styled.TextInput`
    font-size: 14px;
    height: 45px;
    width: 90%;
    background-color: ${props => props.theme.DISCUSSION_COLOR};
    border-radius: 5px;
    border-width: 1px;
    border-color: lightgray;
    margin-bottom: 20px;
`

const Btn = styled.View`
    flex-direction: row;
    font-size: 14px;
    height: 45px;
    width: 90%;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.isValid ? props.theme.PRIMARY_COLOR : "#b2dffc"};
`

const OrContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 10px 10px 10px;
    align-items: center;
`

const Or = styled.View`
    border-width: 1px;
    border-color: lightgray;
    height: 1px;
    width: 40%;
`

const Text = styled.Text`
    color: lightgray;
`  

const ForgotenContainer = styled.View`
    flex-direction: row;
` 

const Error = styled.Text`
    color: ${props => props.theme.PRIMARY_COLOR};
    font-size: 12px;
`  


export default LoginScreen;
