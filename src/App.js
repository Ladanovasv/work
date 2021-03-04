import React from 'react';
import {FlatList} from 'react-native';
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
    uniqueCategories: ['Земноводные', 'Обезьяны', 'Собаки'],
    selectCategory: 'Земноводные',
  };

  render() {
    const {images, uniqueCategories, selectCategory} = this.state;

    let selectedCategory = images.filter(
      (item) => item.category == selectCategory,
    );

    const renderItem = ({item}) => <ItemImageTitle item={item} />;

    const updateSelectedCategory = (selectCategory) => {
      this.setState({selectCategory});
    };

    return (
      <FlatList
        data={selectedCategory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <HeaderCategories uniqueCategories={uniqueCategories} />
        }
      />
    );
  }
}

export default App;
