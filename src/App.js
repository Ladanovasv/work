import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import ItemImageTitle from './components/ItemImageTitle';
import HeaderCategories from './components/HeaderCategories';

class App extends React.Component {
  state = {
    images: [
      {
        id: 0,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/13.1.jpg',
        title: 'Аксолотль',
        category: 'Земноводные',
      },
      {
        id: 1,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/5.jpg',
        title: 'Носач',
        category: 'Обезьяны',
      },
      {
        id: 2,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/6.1.jpg',
        title: 'Белолицый саки',
        category: 'Обезьяны',
      },
      {
        id: 3,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/9.1.jpg',
        title: 'Ринопитеки',
        category: 'Обезьяны',
      },
      {
        id: 4,
        url: 'http://silver.ru/LoadedFiles/zzzz/78/12.jpg',
        title: 'Венгерская овчарка комондор',
        category: 'Собаки',
      },
    ],
    uniqueCategories: ['Земноводные', 'Обезьяны', 'Собаки', 'Кошки'],
  };

  render() {
    const {images, uniqueCategories} = this.state;
    const {width, height} = Dimensions.get('window');

    const renderItem = ({item}) => (
      <ItemImageTitle item={item} width={width} height={height} />
    );

    return (
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // ListHeaderComponent={
        //   <HeaderCategories uniqueCategories={uniqueCategories} />
        // }
      />
    );
  }
}

export default App;
