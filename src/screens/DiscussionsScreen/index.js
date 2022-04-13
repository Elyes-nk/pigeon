import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Discussion from '../../components/Discussion';
import Stories from '../../components/Stories'
import axios from 'axios'

const DiscussionsScreen = () => {

  const user = useSelector(state => state.authReducer.user)

  const [isLoading, setIsLoading] = useState(true);
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const getDiscussions = async () => {
      try {
        const res = await axios.get(`https://pigeon-chat-app-api.herokuapp.com/api/discussions/${user._id}`,
        {
          headers: {'token': user.accessToken}
        })
        setDiscussions(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getDiscussions();
  }, [user._id]);

  return(
    <>
      {isLoading ? 
        <Container>
          <ActivityIndicator/>
        </Container>
        :
        <WhiteFlatList
          data={discussions}
          renderItem={({item}) => <Discussion discussion={item} />}
          keyExtractor={item => item?._id}
          ListHeaderComponent={Stories}
        />
      }
    </>
)}

const WhiteFlatList = styled.FlatList`
  background-color: ${props => props.theme.BACKGROUND_COLOR};
`
const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.BACKGROUND_COLOR};
  align-items: center;
  justify-content: center;
`

export default DiscussionsScreen;
