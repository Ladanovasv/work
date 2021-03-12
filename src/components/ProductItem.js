import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DeleteProductItemButton from './DeleteProductItemButton';

class ProductItem extends React.Component {
  render() {
    const {item, deleteProduct, selectProduct} = this.props;

    onPress = () => {
      deleteProduct(item);
    };
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <CheckBox
          style={{
            flex: 1,
          }}
          value={item.isSelected}
          onValueChange={() => {
            selectProduct(item, item.isSelected ? false : true);
          }}
        />

        <View
          style={{
            flex: 8,
          }}>
          <Text>{item.name}</Text>
        </View>

        <DeleteProductItemButton onPress={onPress} />
      </View>
    );
  }
}

export default ProductItem;
