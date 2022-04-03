import React, { useState, useEffect, useContext } from 'react';
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
import { Context } from '../../context/Context';

const LoginScreen = () =>{
    const { setIsConnected } = useContext(Context);
    const navigation = useNavigation();
    const { theme } = useContext(Context)
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [isValid, setIsValid] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        if(name?.length > 3 && password?.length > 3){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    }, [name], [password]);

    console.log(name, password);
   
    const handleSubmit = () =>{        
        setIsFetching(true)
        if(isValid){
            if(name.toLowerCase() === "elyes" && password.toLowerCase() === "elyes"){
                handleConnexion()
            }else{
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

    const handleConnexion = async() => {
        try{
            setIsConnected(true)
            await AsyncStorage.setItem('token', name)
            navigation.navigate("Home")
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
            placeholderTextColor={theme.ICON_SECONDARY_COLOR}
            value={name}
            onChangeText={txt => setName(txt)}
        />
        <TextInput
            editable
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={theme.ICON_SECONDARY_COLOR}
            value={password}
            onChangeText={txt => setPassword(txt)}
        />
        <TouchableWithoutFeedback onPress={handleSubmit}>
            <Btn 
                style={isValid ? { backgroundColor: theme.PRIMARY_COLOR} :{ backgroundColor: '#b2dffc'}}
            >
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
            <TouchableWithoutFeedback onPress={navigation.navigate("Register")}>
                <Text style={{color: '#00376b'}}>Register.</Text>
            </TouchableWithoutFeedback>
        </ForgotenContainer>
    </Container>
)}


export default LoginScreen;
