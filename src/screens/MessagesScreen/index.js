import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Message from '../../components/Message';
import Stories from '../../components/Stories'
import { getMessages } from '../../redux/actions/messagesActions';

// const messages = [
//   {
//     id: 1,
//     user: {
//       name: "elyes",
//       image: "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
//     },
//     content: "hello bro hello hello hello batardazeazeazeazeaeazeaz",
//     time: "22:30"
//   },
//   {
//     id: 2,
//     user: {
//       name: "elyes",
//       image: "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
//     },
//     content: "hello bro",
//     time: "22:30"
//   },
//   {
//     id: 3,
//     user: {
//       name: "elyes",
//       image: "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
//     },
//     content: "hello bro",
//     time: "22:30"
//   },
// ]

const MessagesScreen = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.authReducer.user)
  const messages = useSelector((state) => state.messagesReducer.messages)
  const [isLoading, setIsLoading] = useState(true);
  const [messsagesFiltredAndSorted, setMesssagesFiltredAndSorted] = useState([]);

  const getMessagesFromServeur = async() => {
    await dispatch(getMessages(user.token))
    await filterAndSortMessages()
    setIsLoading(false)
  }

  const filterAndSortMessages = () => {
    
  }

  useEffect(() => {
    getMessagesFromServeur()
  }, []);

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

  return(
    <>
      {isLoading ? 
        <Container>
          <ActivityIndicator/>
        </Container>
        :
        <WhiteFlatList
          data={messsagesFiltredAndSorted}
          renderItem={({item}) => <Message message={item} />}
          keyExtractor={({id}) => id}
          ListHeaderComponent={Stories}
        />
      }
    </>
)}




export default MessagesScreen;
