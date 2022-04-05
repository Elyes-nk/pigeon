import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import Person from '../../components/Person'
import { getUsers } from '../../redux/actions/usersActions';


const PeopleScreen = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.authReducer.user)
  const users = useSelector((state) => state.usersReducer.users)
  const [usersFiltred, setUsersFiltred] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  const getUsersFromServeur = async() => {
    await dispatch(getUsers(user.token))
    await setUsersFiltred(users.filter(el => el._id !== user._id))
    setIsLoading(false)
  }

  useEffect(() => {
    getUsersFromServeur()
  }, []);


  const WhiteFlatList = styled.FlatList`
      background-color: ${props => props.theme.BACKGROUND_COLOR};
  `

  const Container = styled.View`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  `
  return(
    <>
    {isLoading? 
      <Container>
        <ActivityIndicator/>
      </Container>
      :
      <WhiteFlatList
        data={usersFiltred}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={({id}) => id}
      />
    }
    </>

  )}



export default PeopleScreen;
