import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Story from '../Story';

const Stories = () => {
  
  const users = useSelector((state) => state.usersReducer.users)

  return (
    <FlatList
      data={users}
      keyExtractor={ item => item._id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => item.stories.length > 0 && <Story user={item}/>}
    />
  )
}

export default Stories;