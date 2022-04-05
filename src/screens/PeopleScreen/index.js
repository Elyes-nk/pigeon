import React from 'react';
import styled from 'styled-components';
import Person from '../../components/Person'

const people = [
  {
    id: 1,
    name: "elyes",
    image: "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
  },
  {
    id: 2,
    name: "elyes",
    image: "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
  },
  {
    id: 3,
    name: "elyes",
    image: "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
  },
  {
    id: 4,
    name: "elyes",
    image: "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
  },
]
const PeopleScreen = () => {


  const WhiteFlatList = styled.FlatList`
      background-color: ${props => props.theme.BACKGROUND_COLOR};
  `
  return(
  <WhiteFlatList
    data={people}
    renderItem={({item}) => <Person person={item} />}
    keyExtractor={({id}) => id}
  />
)}



export default PeopleScreen;
