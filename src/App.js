import React from 'react';
import {FlatList } from 'react-native';
import ItemImageTitle from './components/ItemImageTitle';


class App extends React.Component {


  state = {
    images: [
      {
        id: 0,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/13.1.jpg',
        title: 'Аксолотль'
      },
      {
        id: 1,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/5.jpg',
        title: 'Носач'
      },
      {
        id: 2,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/6.1.jpg',
        title: 'Белолицый саки'
      },
      {
        id: 3,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/9.1.jpg',
        title: 'Ринопитеки'
      },
      {
        id: 4,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/12.jpg',
        title: 'Венгерская овчарка \n комондор'
      }
    ]
  };


  render() {
    const { images } = this.state;

    const renderItem = ({ item }) => (
      <ItemImageTitle item={item} />
    );

    return (
      
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      
    );
  }
}

export default App;
