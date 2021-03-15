import React from 'react';
import {FlatList, Text, View, Dimensions} from 'react-native';
import ProductItem from './ProductItem';

class ProductsList extends React.Component {
  render() {
    const {products, deleteProduct, selectProduct} = this.props;
    const {height} = Dimensions.get('window');

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
        ListHeaderComponent={
          <View
            style={{
              height: height * 0.09,
              width: '100%',
              backgroundColor: '#fd5200',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}>
            <Text
              style={{
                fontSize: 40,
                color: 'black',
              }}>
              {' '}
              Список покупок{' '}
            </Text>
          </View>
        }
      />
    );
  }
}

export default ProductsList;
