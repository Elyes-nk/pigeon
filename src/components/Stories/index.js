import React, {useContext} from 'react';
import { FlatList } from 'react-native';
import Story from '../Story';
import { Context } from "../../context/Context";

const Stories = () => {
  
const stories =  [
  {
    user: {
      id : 3,
      image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      name : "433",
    },
    stories: [
      {
        image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        postedTime: '20 m',
      },
      {
        image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        postedTime: '18 m',
      },
      {
        image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        postedTime: '10 m',
      },
      {
        image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        postedTime: '6 m',
      }
    ]
  },  {
    user: {
      id: '1',
      image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      name : "swannj60",
    },
    stories: [
      {
        image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        postedTime: '4 m',
      },
    ]
  }, {
    user: {
      id: '4',
      image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      name: 'footy.base',
    },
    stories: [
      {
        image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        postedTime: '30 m',
      },
      {
        image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        postedTime: '5 m',
      },
      {
        image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        postedTime: '2 m',
      },
    ]
  }, {
    user: {
      id: '6',
      image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      name: 'man_united_fans-voice',
    },
    stories: [
      {
        image : "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        postedTime: '5 m',
      },
    ]
  },
]

  return (
    <FlatList
      data={stories}
      keyExtractor={({user: {id}}) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Story story={item}/>}
    />
  )
}

export default Stories;
