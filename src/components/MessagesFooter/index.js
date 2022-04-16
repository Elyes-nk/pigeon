import React from 'react'
import { TouchableWithoutFeedback, PermissionsAndroid, Platform } from 'react-native';
import styled from 'styled-components'
import { Dimensions  } from 'react-native';
import RoundedIcon from '../RoundedIcon'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

function index({newMessage, setNewMessage, handleSubmit, discussionId, userSelected}) {

    const navigation = useNavigation()
   

    const requestLocationPermission = async () => {
        setNewMessage("Checking location...")
        if (Platform.OS === 'ios') {
            getOneTimeLocation();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Access Required',
                    message: 'This App needs to Access your location',
                },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    getOneTimeLocation();
                    // subscribeLocationLocation();
                } else {
                    setNewMessage('Permission Denied');
                }
            } catch (err) {
                console.log(err);
            }
        }
    };
       
    
    const getOneTimeLocation = () => {
        setNewMessage('Getting Location ...');
        Geolocation.getCurrentPosition(
            (position) => {    
                const currentLongitude = 
                    JSON.stringify(position.coords.longitude);

                const currentLatitude = 
                    JSON.stringify(position.coords.latitude);

                setNewMessage('https://www.google.com/maps/search/?api=1&query='+currentLatitude+','+currentLongitude)
            },
            (error) => {
                console.log(error);
                setNewMessage("")
            },
            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: 1000
            },
        );
    };
   
    return (
    <Footer>

        <RoundedIcon color={props => props.theme.DISCUSSION_COLOR}>
            <TouchableWithoutFeedback 
            onPress={() => navigation.navigate("Gallery", 
                { 
                    isStory : false,
                    isMessage : true,
                    isProfilePicture : false,
                    discussionId: discussionId,
                    userSelected: userSelected
                })}
            >
                <Ionicons name='image' size={20} color={props => props.theme.ICON_PRIMARY_COLOR} />
            </TouchableWithoutFeedback>
        </RoundedIcon>
    

        <RoundedIcon color={props => props.theme.DISCUSSION_COLOR}>
            <TouchableWithoutFeedback 
                onPress={() => navigation.navigate("Camera", 
                    {
                        isStory : false, 
                        isMessage : true,
                        isProfilePicture : false,
                        discussionId: discussionId,
                        userSelected: userSelected
                    })}
            >    
                <FontAwesome name='camera' size={18} color={props => props.theme.ICON_PRIMARY_COLOR} />
            </TouchableWithoutFeedback>
        </RoundedIcon>


        <RoundedIcon color={props => props.theme.DISCUSSION_COLOR}>
            <TouchableWithoutFeedback onPress={() => requestLocationPermission()}>    
                <FontAwesome name='map-marker' size={18} color={props => props.theme.ICON_PRIMARY_COLOR} />
            </TouchableWithoutFeedback>
        </RoundedIcon>


        <TextInputContainer>
            <TextInput 
                placeholder='Type your message...'
                placeholderTextColor={props => props.theme.TEXT_PRIMARY_COLOR} 
                onChangeText={txt => setNewMessage(txt)}
                value={newMessage}
            />
        </TextInputContainer>
        

        <TouchableWithoutFeedback onPress={() => handleSubmit()}>
            <Send>Send</Send>
        </TouchableWithoutFeedback>


    </Footer>
  )
}

const Footer = styled.View`
    flex-direction: row;
    height: 55px;
    background-color: ${props => props.theme.BACKGROUND_COLOR};
    justify-content: space-between;
    align-items: center;
`

const TextInput = styled.TextInput`
    color: ${props => props.theme.TEXT_PRIMARY_COLOR};
    font-size: 14px;
`
const TextInputContainer = styled.View`
    margin-left: 10px;
    margin-right: 10px;
    height: 40px;
    width: ${Dimensions.get('window').width - 210}px;
    border-radius: 20px;
    background-color: ${props => props.theme.DISCUSSION_COLOR};
    padding-left: 5px;
`
const Send = styled.Text`
    color: ${props => props.theme.PRIMARY_COLOR};
    font-size: 14px;
    margin-right: 10px;
`

export default index