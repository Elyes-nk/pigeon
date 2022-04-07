import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Story from '../Story';

const Stories = () => {
  
  const users = useSelector((state) => state.usersReducer.users)

  return (
    <FlatList
      data={users}
      keyExtractor={ user => user._id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({user}) => <Story story={user}/>}
    />
  )
}

export default Stories;