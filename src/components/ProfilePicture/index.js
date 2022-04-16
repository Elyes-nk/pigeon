import React from 'react';
import styled from 'styled-components';

const ProfilePicture = ({ uri, size = 63 }) => {

  const Img = styled.Image`
    border-radius: ${size/2}px;
    width: ${size}px;
    height: ${size}px;
  `
  return (
      <Img
        source={{uri : uri ? uri : `https://pigeon-chat-app-api.herokuapp.com/img/profile.png`}}
      />
  )
}
export default ProfilePicture;
