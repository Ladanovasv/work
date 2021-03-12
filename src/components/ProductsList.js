import React from 'react';
import {FlatList, Text} from 'react-native';
import ProductItem from './ProductItem';

class ProductsList extends React.Component {
  render() {
    const {products, deleteProduct, selectProduct} = this.props;

    const renderItem = ({item}) => (
      <ProductItem
        item={item}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    );

    return (
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text>Список покупок</Text>}
        ListFooterComponent={<Text>Конец списока покупок</Text>}
      />
    );
  }
}

export default ProductsList;
