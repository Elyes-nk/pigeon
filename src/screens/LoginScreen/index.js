import React, { useState, useEffect } from 'react';
import { Text, Alert, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/images/logo.png'
import { login } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const LoginScreen = () =>{
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        if(username?.length > 3 && password?.length > 3){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    },[password]);
   
    const handleConnexion = async() => {
        if(isValid){
        setIsFetching(true)
            try{
                await dispatch(login(username,password))
                setIsConnected(true)
                navigation.navigate("Home")
            }catch(err){
                setIsFetching(false)
                Alert.alert("Incorrect username or password",
                "The credentials that you've entered doesn't appear to belong to an account. Please check your credentials and try again.",
                [
                    {
                    text: "Try again",
                    },
                ],)
            }
        }
    }


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
        margin-bottom: 20px;
        align-items: center;
        justify-content: center;
        background-color: ${isValid ? props => props.theme.PRIMARY_COLOR : "#b2dffc"};
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

    const ForgotenContainer = styled.View`
        flex-direction: row;
    ` 
  
    return(
    <Container>
        <Logo source={logo} />
        <TextInput
            editable
            placeholder="Phone number, email adress or username"
            placeholderTextColor={props => props.theme.ICON_SECONDARY_COLOR}
            defaultValue={username}
            onChangeText={txt => setUsername(txt)}
        />
        <TextInput
            editable
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={props => props.theme.ICON_SECONDARY_COLOR}
            defaultValue={password}
            onChangeText={txt => setPassword(txt)}
        />
        <TouchableWithoutFeedback onPress={handleConnexion}>
            <Btn>
                {
                    isFetching ? 
                    <ActivityIndicator/>
                    :
                    <Text style={{color: 'white'}}> Log in</Text>
                }
            </Btn>
        </TouchableWithoutFeedback>
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


export default LoginScreen;
