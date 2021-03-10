import React from 'react';
import {FlatList, View, Text} from 'react-native';
import ItemImageTitle from './ItemImageTitle';
import HeaderCategories from './HeaderCategories';

class ListCategories extends React.Component {
  render() {
    const {
      images,
      uniqueCategories,
      activeCategory,
      updateSelectedCategory,
    } = this.props;

    let selectedCategory = images.filter(
      (item) => item.category == activeCategory,
    );

    const renderItem = ({item}) => <ItemImageTitle item={item} />;

    return (
      <FlatList
        data={activeCategory ? selectedCategory : images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <HeaderCategories
            uniqueCategories={uniqueCategories}
            updateSelectedCategory={updateSelectedCategory}
            activeCategory={activeCategory}
          />
        }
        ListEmptyComponent={
          <View
            style={{
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Ничего не найдено :(</Text>
          </View>
        }
      />
    );
  }
}

export default ListCategories;
