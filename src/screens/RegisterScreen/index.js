import React, { useState, useEffect } from 'react';
import { 
    Text, 
    Alert,
    TouchableWithoutFeedback,
    ActivityIndicator
     } from 'react-native'
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../../assets/images/logo.png'
import {useSelector} from 'react-redux';

const RegisterScreen = () =>{
    const navigation = useNavigation();
    const theme = useSelector((state) => state.themeReducer.theme )
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    const [isValid, setIsValid] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        if(name?.length > 3 && password?.length > 3){
            setIsValid(true)
        }
        if(password === confirmPassword){
            setIsValid(true)
        }
    }, [name], [password]);
 
    const handleRegister = async() => {
        setIsFetching(true)
        if(isValid){
            try{
            
                navigation.navigate("Login")
            }catch(err){
                setIsFetching(false)
                console.log("token not working");
                console.log(err);
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
        background-color: ${theme.BACKGROUND_COLOR};
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
        background-color: ${theme.DISCUSSION_COLOR};
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
            placeholderTextColor={theme.SECONDARY_COLOR}
            value={name}
            onChangeText={txt => setName(txt)}
        />
        <TextInput
            editable
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={theme.SECONDARY_COLOR}
            value={password}
            onChangeText={txt => setPassword(txt)}
        />
         <TextInput
            editable
            placeholder="Confirm password"
            secureTextEntry={true}
            placeholderTextColor={theme.SECONDARY_COLOR}
            value={confirmPassword}
            onChangeText={txt => setConfirmPassword(txt)}
        />
        <TouchableWithoutFeedback onPress={handleRegister}>
            <Btn 
                style={isValid ? { backgroundColor: theme.PRIMARY_COLOR} :{ backgroundColor: '#b2dffc'}}
            >
                {
                    isFetching ? 
                    <ActivityIndicator/>
                    :
                    <Text style={{color: 'white'}}> Register</Text>
                }
            </Btn>
        </TouchableWithoutFeedback>
        <OrContainer>
            <Or/>
            <Text> OR </Text>
            <Or/>
        </OrContainer>
      
        <ForgotenContainer>
            <Text> Have already an account? </Text>
            <TouchableWithoutFeedback onPress={navigation.navigate("Login")}>
                <Text style={{color: '#00376b'}}>Log in.</Text>
            </TouchableWithoutFeedback>
        </ForgotenContainer>
    </Container>
)}


export default RegisterScreen;
