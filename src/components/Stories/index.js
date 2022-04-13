import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Story from '../Story';
import { getUsers } from '../../redux/actions/usersActions';

const Stories = () => {

  const dispatch = useDispatch()
  const users = useSelector((state) => state.usersReducer.users)

  const getUsersFromServeur = async() => {
    await dispatch(getUsers())
    setIsLoading(false)
  }

  useEffect(() => {
    getUsersFromServeur()
  }, []);


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